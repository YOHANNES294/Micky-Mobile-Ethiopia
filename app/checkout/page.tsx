"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  CreditCard,
  CheckCircle2,
  MapPin,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Building,
  User,
  Phone,
  Mail,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Addis Ababa",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
    setIsLoading(false)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate order processing
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. Your order is being processed.",
    })

    // Clear cart after successful order
    localStorage.removeItem("cart")

    // Redirect to confirmation page (would be implemented in a real app)
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount ? item.price - (item.price * item.discount) / 100 : item.price
    return total + itemPrice * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 500 : 0 // 500 ETB shipping fee
  const total = subtotal + shipping

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Loading checkout...</h1>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Your cart is empty</h1>
        <p className="text-gray-400 mb-8">Add some products to your cart before proceeding to checkout</p>
        <Button asChild className="bg-highlight hover:bg-highlight/90 text-black">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <Link href="/cart" className="text-highlight hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2 text-white">Checkout</h1>
      <p className="text-gray-400 mb-8">Complete your order</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card className="bg-gray-900 border-gray-800 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2 text-highlight" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Yohanes"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Mekonen"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johnsm294@gmail.com"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+251 93 369 4796"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white">
                    Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="address"
                      name="address"
                      placeholder="Bole Road, Near Millennium Hall"
                      className="pl-10 bg-gray-800 border-gray-700 text-white"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-white">
                      City
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="city"
                        name="city"
                        placeholder="Addis Ababa"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-white">
                      Zip Code
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      placeholder="1000"
                      className="bg-gray-800 border-gray-700 text-white"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-white">
                    Order Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Special instructions for delivery"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Truck className="h-5 w-5 mr-2 text-highlight" />
                  Shipping Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="standard" className="space-y-4">
                  <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <RadioGroupItem value="standard" id="standard" className="text-highlight" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="font-medium text-white">Standard Delivery</div>
                      <div className="text-sm text-gray-400">3-5 business days</div>
                    </Label>
                    <div className="font-semibold text-white">500 ETB</div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <RadioGroupItem value="express" id="express" className="text-highlight" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="font-medium text-white">Express Delivery</div>
                      <div className="text-sm text-gray-400">1-2 business days</div>
                    </Label>
                    <div className="font-semibold text-white">1,000 ETB</div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <CreditCard className="h-5 w-5 mr-2 text-highlight" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid grid-cols-3 bg-gray-800">
                    <TabsTrigger
                      value="card"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-black"
                    >
                      Credit Card
                    </TabsTrigger>
                    <TabsTrigger
                      value="telebirr"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-black"
                    >
                      TeleBirr
                    </TabsTrigger>
                    <TabsTrigger
                      value="cash"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-black"
                    >
                      Cash on Delivery
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-white">
                        Name on Card
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="Yohanes Mekonen"
                        className="bg-gray-800 border-gray-700 text-white"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-white">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="bg-gray-800 border-gray-700 text-white"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry" className="text-white">
                          Expiry Date
                        </Label>
                        <Input
                          id="cardExpiry"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          className="bg-gray-800 border-gray-700 text-white"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardCvc" className="text-white">
                          CVC
                        </Label>
                        <Input
                          id="cardCvc"
                          name="cardCvc"
                          placeholder="123"
                          className="bg-gray-800 border-gray-700 text-white"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <ShieldCheck className="h-4 w-4 text-highlight" />
                      Your payment information is secure and encrypted
                    </div>
                  </TabsContent>

                  <TabsContent value="telebirr" className="mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="text-center mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="TeleBirr"
                          width={80}
                          height={80}
                          className="mx-auto mb-2"
                        />
                        <h3 className="font-medium text-white">Pay with TeleBirr</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        After placing your order, you will receive a TeleBirr payment request to your phone number.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="telebirrPhone" className="text-white">
                          TeleBirr Phone Number
                        </Label>
                        <Input
                          id="telebirrPhone"
                          placeholder="+251 93 369 4796"
                          className="bg-gray-700 border-gray-600 text-white"
                          required={paymentMethod === "telebirr"}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="cash" className="mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-white">Cash on Delivery</h3>
                          <p className="text-gray-400 text-sm">
                            Pay with cash when your order is delivered to your doorstep. Available in Addis Ababa only.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-highlight hover:bg-highlight/90 text-black font-bold"
                  size="lg"
                >
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div>
          <Card className="bg-gray-900 border-gray-800 sticky top-20">
            <CardHeader>
              <CardTitle className="text-white">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-black rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{item.name}</h4>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-highlight">
                        {(
                          (item.discount ? item.price - (item.price * item.discount) / 100 : item.price) * item.quantity
                        ).toLocaleString()}{" "}
                        ETB
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-gray-800" />

              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">{subtotal.toLocaleString()} ETB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-white">{shipping.toLocaleString()} ETB</span>
              </div>

              <Separator className="bg-gray-800" />

              <div className="flex justify-between font-bold">
                <span className="text-white">Total</span>
                <span className="text-highlight">{total.toLocaleString()} ETB</span>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Truck className="h-4 w-4 text-highlight" />
                  Free shipping for orders over 10,000 ETB
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <ShieldCheck className="h-4 w-4 text-highlight" />
                  Secure payment processing
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

