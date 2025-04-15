"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Sample product data
const samsungProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    price: 120000,
    image: "/images/samsung-s23-ultra.jpg",
    brand: "Samsung",
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Fold 5",
    price: 180000,
    image: "/images/samsung-fold.jpg",
    brand: "Samsung",
    isNew: true,
    discount: 10,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: 80000,
    image: "/images/samsung-s23.jpg",
    brand: "Samsung",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Samsung Galaxy A54",
    price: 45000,
    image: "/images/samsung-a54.jpg",
    brand: "Samsung",
    isNew: false,
    discount: 15,
  },
]

// Find the iphoneProducts array and update it:

const iphoneProducts = [
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    price: 125000,
    image: "/images/iphone-15-pro-max.jpg",
    brand: "Apple",
    isNew: true,
    discount: 0,
  },
  {
    id: 6,
    name: "iPhone 15",
    price: 85000,
    image: "/images/iphone-15.jpg",
    brand: "Apple",
    isNew: true,
    discount: 5,
  },
  {
    id: 7,
    name: "iPhone 14 Pro",
    price: 100000,
    image: "/images/iphone-14-pro.jpg",
    brand: "Apple",
    isNew: false,
    discount: 15,
  },
  {
    id: 8,
    name: "iPhone SE",
    price: 43000,
    image: "/images/iphone-se.jpg",
    brand: "Apple",
    isNew: false,
    discount: 10,
  },
]

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all")

  const allProducts = [...samsungProducts, ...iphoneProducts]

  const displayProducts = activeTab === "all" ? allProducts : activeTab === "samsung" ? samsungProducts : iphoneProducts

  return (
    <div>
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Devices</TabsTrigger>
            <TabsTrigger value="samsung">Samsung</TabsTrigger>
            <TabsTrigger value="iphone">iPhone</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <ProductGrid products={displayProducts} />
        </TabsContent>
        <TabsContent value="samsung" className="mt-0">
          <ProductGrid products={displayProducts} />
        </TabsContent>
        <TabsContent value="iphone" className="mt-0">
          <ProductGrid products={displayProducts} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button asChild>
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </div>
  )
}

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
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
          className="absolute top-2 right-2 bg-black/80 hover:bg-black text-highlight rounded-full"
          onClick={(e) => {
            e.preventDefault()
            // Get existing wishlist or initialize empty array
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

            // Check if product already in wishlist
            const existingItem = wishlist.find((item) => item.id === product.id)

            if (!existingItem) {
              wishlist.push(product)
              localStorage.setItem("wishlist", JSON.stringify(wishlist))
              toast({
                title: "Added to wishlist",
                description: `${product.name} has been added to your wishlist`,
              })
            } else {
              toast({
                title: "Already in wishlist",
                description: `${product.name} is already in your wishlist`,
              })
            }
          }}
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
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
        <Button className="w-full bg-highlight hover:bg-highlight/90 text-black" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

