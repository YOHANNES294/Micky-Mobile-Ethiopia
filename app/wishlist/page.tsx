"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist))
    }
    setIsLoading(false)
  }, [])

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== productId)
    setWishlistItems(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
    toast({
      title: "Item removed",
      description: "Product has been removed from your wishlist",
    })
  }

  const addToCart = (product) => {
    // Get existing cart or initialize empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if product already in cart
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart))

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Loading your wishlist...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-white">
        My <span className="text-highlight">Wishlist</span>
      </h1>
      <p className="text-gray-400 mb-8">Items you've saved for later</p>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-900 rounded-lg">
          <Heart className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Your wishlist is empty</h2>
          <p className="text-gray-400 mb-6">Save items you love by clicking the heart icon on any product</p>
          <Button asChild className="bg-highlight hover:bg-highlight/90 text-black">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <WishlistCard key={product.id} product={product} onRemove={removeFromWishlist} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}

function WishlistCard({ product, onRemove, onAddToCart }) {
  const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : null

  return (
    <Card className="overflow-hidden group bg-gray-900 border-gray-800">
      <CardContent className="p-0 relative">
        <Link href={`/products/${product.brand.toLowerCase()}/${product.id}`}>
          <div className="relative h-64 bg-black">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-highlight hover:bg-highlight/80 text-black rounded-full"
          onClick={() => onRemove(product.id)}
        >
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">Remove from wishlist</span>
        </Button>

        {product.isNew && <Badge className="absolute top-2 left-2 bg-highlight text-black">New</Badge>}

        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute bottom-2 left-2">
            {product.discount}% Off
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <div className="w-full flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-sm truncate text-white">{product.name}</h3>
            <p className="text-gray-400 text-xs">{product.brand}</p>
          </div>
          <div className="text-right">
            {discountedPrice ? (
              <>
                <p className="font-bold text-highlight">{discountedPrice.toLocaleString()} ETB</p>
                <p className="text-gray-400 text-xs line-through">{product.price.toLocaleString()} ETB</p>
              </>
            ) : (
              <p className="font-bold text-highlight">{product.price.toLocaleString()} ETB</p>
            )}
          </div>
        </div>
        <Button
          className="w-full bg-highlight hover:bg-highlight/90 text-black"
          size="sm"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

