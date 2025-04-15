"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, ShoppingCart, Trash2, CreditCard, ArrowRight } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [couponCode, setCouponCode] = useState("")

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
    setIsLoading(false)
  }, [])

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))

    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))

    toast({
      title: "Item removed",
      description: "Product has been removed from your cart",
    })
  }

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a coupon code",
        variant: "destructive",
      })
      return
    }

    // Demo coupon code
    if (couponCode.toUpperCase() === "MICKY10") {
      toast({
        title: "Coupon applied",
        description: "10% discount has been applied to your order",
      })
    } else {
      toast({
        title: "Invalid coupon",
        description: "The coupon code you entered is invalid or expired",
        variant: "destructive",
      })
    }
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount ? item.price - (item.price * item.discount) / 100 : item.price
    return total + itemPrice * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 500 : 0 // 500 ETB shipping fee
  const discount = couponCode.toUpperCase() === "MICKY10" ? subtotal * 0.1 : 0
  const total = subtotal + shipping - discount

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Loading your cart...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-white">
        Shopping <span className="text-highlight">Cart</span>
      </h1>
      <p className="text-gray-400 mb-8">Review and checkout your items</p>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-900 rounded-lg">
          <ShoppingCart className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Add some products to your cart to continue shopping</p>
          <Button asChild className="bg-highlight hover:bg-highlight/90 text-black">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-gray-900 border-gray-800 sticky top-20">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">{subtotal.toLocaleString()} ETB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-white">{shipping.toLocaleString()} ETB</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discount</span>
                    <span className="text-highlight">-{discount.toLocaleString()} ETB</span>
                  </div>
                )}

                <Separator className="bg-gray-800" />

                <div className="flex justify-between font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-highlight">{total.toLocaleString()} ETB</span>
                </div>

                <div className="pt-4">
                  <div className="flex gap-2 mb-4">
                    <Input
                      placeholder="Coupon code"
                      className="bg-gray-800 border-gray-700 text-white"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-800"
                      onClick={applyCoupon}
                    >
                      Apply
                    </Button>
                  </div>

                  <Button className="w-full bg-highlight hover:bg-highlight/90 text-black font-bold" size="lg" asChild>
                    <Link href="/checkout">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Link>
                  </Button>

                  <div className="mt-4 text-center">
                    <Link
                      href="/products"
                      className="text-highlight hover:underline text-sm flex items-center justify-center"
                    >
                      <ArrowRight className="h-4 w-4 mr-1" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

function CartItem({ item, updateQuantity, removeFromCart }) {
  const discountedPrice = item.discount ? item.price - (item.price * item.discount) / 100 : item.price

  const totalPrice = discountedPrice * item.quantity

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
      <div className="relative w-full sm:w-24 h-24 bg-black rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-white">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.brand}</p>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <p className="font-bold text-highlight">{totalPrice.toLocaleString()} ETB</p>
            {item.discount > 0 && (
              <p className="text-gray-400 text-xs line-through">{(item.price * item.quantity).toLocaleString()} ETB</p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-gray-700 text-white"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-10 text-center text-white">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-gray-700 text-white"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}

