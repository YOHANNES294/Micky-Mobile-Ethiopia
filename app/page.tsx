import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneIcon, RefreshCcw, ShoppingCart } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"
import BrandShowcase from "@/components/brand-showcase"
import ExchangeProgram from "@/components/exchange-program"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image src="/images/hero-banner.jpg" alt="Latest smartphones" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium Smartphones <br />
            <span className="text-highlight">Now in Ethiopia!</span>
          </h1>
          <p className="text-xl text-white max-w-xl mb-8">
            Discover the latest Samsung and iPhone models at Micky Mobile. Premium quality, competitive prices, and
            excellent exchange offers in Addis Ababa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-highlight hover:bg-highlight/90 text-black">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-highlight hover:bg-white/20"
              asChild
            >
              <Link href="/exchange">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Exchange Program
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Featured Products */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Featured Devices</h2>
          <p className="text-center text-highlight mb-12 text-lg">All prices in Ethiopian Birr (ETB)</p>
          <FeaturedProducts />
        </div>
      </section>

      {/* Exchange Program */}
      <ExchangeProgram />

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Micky Mobile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Authentic Products</h3>
              <p className="text-gray-300">
                All our devices are 100% authentic with manufacturer warranty available in Ethiopia.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="h-8 w-8 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Best Exchange Rates</h3>
              <p className="text-gray-300">
                Get the highest value for your old device when you upgrade at our Addis Ababa store.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Secure Shopping</h3>
              <p className="text-gray-300">
                Shop with confidence with our secure payment options and fast delivery across Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

