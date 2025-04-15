import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premium Brands</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Samsung Showcase */}
          <div className="relative overflow-hidden rounded-xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
            <Image
              src="/images/samsung-s23-ultra.jpg"
              alt="Samsung Smartphones"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Samsung</h3>
              <p className="text-white/90 mb-6 max-w-xs">
                Discover the latest Samsung Galaxy smartphones with cutting-edge technology and innovative features.
              </p>
              <Button asChild>
                <Link href="/products/samsung">Explore Samsung</Link>
              </Button>
            </div>
          </div>

          {/* iPhone Showcase */}
          <div className="relative overflow-hidden rounded-xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
            <Image
              src="/images/iphone-15-pro-max.jpg"
              alt="Apple iPhones"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold text-white mb-2">iPhone</h3>
              <p className="text-white/90 mb-6 max-w-xs">
                Experience the premium quality and performance of Apple iPhones with the latest iOS features.
              </p>
              <Button asChild>
                <Link href="/products/iphone">Explore iPhone</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

