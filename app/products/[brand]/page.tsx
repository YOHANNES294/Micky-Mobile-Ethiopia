"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"

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
    category: "S Series",
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Fold 5",
    price: 180000,
    image: "/images/samsung-fold.jpg",
    brand: "Samsung",
    isNew: true,
    discount: 10,
    category: "Fold Series",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: 80000,
    image: "/images/samsung-s23.jpg",
    brand: "Samsung",
    isNew: false,
    discount: 0,
    category: "S Series",
  },
  {
    id: 4,
    name: "Samsung Galaxy A54",
    price: 45000,
    image: "/images/samsung-a54.jpg",
    brand: "Samsung",
    isNew: false,
    discount: 15,
    category: "A Series",
  },
  {
    id: 9,
    name: "Samsung Galaxy S22 Ultra",
    price: 100000,
    image: "/images/samsung-s22-ultra.jpg",
    brand: "Samsung",
    isNew: false,
    discount: 20,
    category: "S Series",
  },
  {
    id: 10,
    name: "Samsung Galaxy Z Flip 5",
    price: 100000,
    image: "/images/samsung-fold.jpg",
    brand: "Samsung",
    isNew: true,
    discount: 5,
    category: "Flip Series",
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
    category: "Pro Series",
  },
  {
    id: 6,
    name: "iPhone 15",
    price: 85000,
    image: "/images/iphone-15.jpg",
    brand: "Apple",
    isNew: true,
    discount: 5,
    category: "Standard",
  },
  {
    id: 7,
    name: "iPhone 14 Pro",
    price: 100000,
    image: "/images/iphone-14-pro.jpg",
    brand: "Apple",
    isNew: false,
    discount: 15,
    category: "Pro Series",
  },
  {
    id: 8,
    name: "iPhone SE",
    price: 43000,
    image: "/images/iphone-se.jpg",
    brand: "Apple",
    isNew: false,
    discount: 10,
    category: "SE",
  },
  {
    id: 11,
    name: "iPhone 14",
    price: 70000,
    image: "/images/iphone-15.jpg",
    brand: "Apple",
    isNew: false,
    discount: 20,
    category: "Standard",
  },
  {
    id: 12,
    name: "iPhone 13 Pro",
    price: 90000,
    image: "/images/iphone-14-pro.jpg",
    brand: "Apple",
    isNew: false,
    discount: 25,
    category: "Pro Series",
  },
]

// Update the BrandPage component to include Ethiopia-specific text:

export default function BrandPage({ params }) {
  const { brand } = params

  if (brand !== "samsung" && brand !== "iphone") {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-highlight">Brand Not Found</h1>
        <p className="text-white mb-8">Sorry, we couldn't find the brand you're looking for.</p>
        <Button asChild className="bg-highlight text-black hover:bg-highlight/90">
          <Link href="/products">Browse All Products</Link>
        </Button>
      </div>
    )
  }

  const products = brand === "samsung" ? samsungProducts : iphoneProducts
  const brandName = brand === "samsung" ? "Samsung" : "iPhone"

  return (
    <div className="container mx-auto px-4 py-12 bg-black text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {brandName} Smartphones <span className="text-highlight">in Ethiopia</span>
        </h1>
        <p className="text-gray-300 max-w-3xl">
          {brand === "samsung"
            ? "Explore our collection of Samsung Galaxy smartphones featuring cutting-edge technology, stunning displays, and powerful cameras. All devices come with official warranty in Ethiopia."
            : "Discover the latest iPhones with powerful performance, premium design, and the seamless iOS experience. Authorized reseller in Ethiopia with local support."}
        </p>
        <p className="text-highlight mt-2">All prices in Ethiopian Birr (ETB)</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

// Update the ProductCard component to show ETB currency:

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
              alert(`${product.name} has been added to your wishlist`)
            } else {
              alert(`${product.name} is already in your wishlist`)
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
            <p className="text-gray-400 text-xs">{product.category}</p>
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

