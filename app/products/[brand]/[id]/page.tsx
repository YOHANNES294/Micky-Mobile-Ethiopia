import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Star, Check, RefreshCcw, Shield, Truck } from "lucide-react"

// Update the product prices to Ethiopian Birr and make text more attractive
// Find the samsungProducts array and update the first product:

const samsungProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    price: 120000,
    images: ["/images/samsung-s23-ultra.jpg", "/images/samsung-s23-ultra-2.jpg", "/images/samsung-s23-ultra-3.jpg"],
    brand: "Samsung",
    isNew: true,
    discount: 0,
    category: "S Series",
    colors: ["Phantom Black", "Green", "Cream", "Lavender"],
    storage: ["256GB", "512GB", "1TB"],
    description:
      "Experience the epitome of smartphone innovation with the Samsung Galaxy S23 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, powerful Snapdragon processor, and an advanced camera system with a 200MP main sensor. Now available in Ethiopia with official warranty.",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X, 3088 x 1440 pixels, 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP main, 12MP ultrawide, 10MP telephoto (3x), 10MP telephoto (10x)",
      frontCamera: "12MP",
      battery: "5000mAh",
      os: "Android 13, One UI 5.1",
      dimensions: "163.4 x 78.1 x 8.9 mm",
      weight: "233g",
      waterResistant: "IP68",
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 245,
  },
  // Other Samsung products...
]

// Find the iphoneProducts array and update the first product:

const iphoneProducts = [
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    price: 125000,
    images: ["/images/iphone-15-pro-max.jpg", "/images/iphone-15-pro-max-2.jpg", "/images/iphone-15-pro-max-3.jpg"],
    brand: "Apple",
    isNew: true,
    discount: 0,
    category: "Pro Series",
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    description:
      "The iPhone 15 Pro Max features Apple's groundbreaking A17 Pro chip, a sophisticated titanium design, and a pro camera system that includes a 48MP main camera with a larger sensor for stunning detail. Available now in Ethiopia with local support and warranty.",
    specifications: {
      display: "6.7-inch Super Retina XDR OLED, 2796 x 1290 pixels, 120Hz",
      processor: "A17 Pro chip",
      camera: "48MP main, 12MP ultrawide, 12MP telephoto (5x optical zoom)",
      frontCamera: "12MP TrueDepth",
      battery: "4422mAh",
      os: "iOS 17",
      dimensions: "159.9 x 76.7 x 8.25 mm",
      weight: "221g",
      waterResistant: "IP68",
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 312,
  },
  // Other iPhone products...
]

// Update the ProductDetailPage component to show ETB currency and make text more attractive:

export default function ProductDetailPage({ params }) {
  const { brand, id } = params

  if (brand !== "samsung" && brand !== "iphone") {
    return (
      <div className="container mx-auto px-4 py-12 text-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4 text-highlight">Brand Not Found</h1>
        <p className="text-white mb-8">Sorry, we couldn't find the brand you're looking for.</p>
        <Button asChild className="bg-highlight text-black hover:bg-highlight/90">
          <Link href="/products">Browse All Products</Link>
        </Button>
      </div>
    )
  }

  const products = brand === "samsung" ? samsungProducts : iphoneProducts
  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4 text-highlight">Product Not Found</h1>
        <p className="text-white mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild className="bg-highlight text-black hover:bg-highlight/90">
          <Link href={`/products/${brand}`}>Browse {brand === "samsung" ? "Samsung" : "iPhone"} Products</Link>
        </Button>
      </div>
    )
  }

  const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : null

  return (
    <div className="container mx-auto px-4 py-12 bg-black text-white">
      <div className="mb-6">
        <Link href={`/products/${brand}`} className="text-highlight hover:underline">
          &larr; Back to {brand === "samsung" ? "Samsung" : "iPhone"} products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-[500px] bg-gray-900 rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[0] || "/placeholder.svg?height=500&width=500"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />

            {product.isNew && <Badge className="absolute top-4 left-4 bg-highlight text-black">New</Badge>}

            {product.discount > 0 && (
              <Badge variant="destructive" className="absolute top-4 right-4">
                {product.discount}% Off
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative h-24 bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg?height=96&width=96"}
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-highlight fill-highlight" : "text-gray-600"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="mb-6">
            {discountedPrice ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-highlight">{discountedPrice.toLocaleString()} ETB</span>
                <span className="text-xl text-gray-400 line-through">{product.price.toLocaleString()} ETB</span>
                <Badge variant="destructive">{product.discount}% Off</Badge>
              </div>
            ) : (
              <span className="text-3xl font-bold text-highlight">{product.price.toLocaleString()} ETB</span>
            )}
          </div>

          <p className="text-gray-300 mb-8">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-white">Color</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color, index) => (
                <Button
                  key={color}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full px-4 ${index === 0 ? "bg-highlight text-black hover:bg-highlight/90" : "text-white border-gray-600 hover:bg-gray-800"}`}
                >
                  {index === 0 && <Check className="h-4 w-4 mr-2" />}
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Storage Selection */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3 text-white">Storage</h3>
            <div className="flex flex-wrap gap-3">
              {product.storage.map((storage, index) => (
                <Button
                  key={storage}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full px-4 ${index === 0 ? "bg-highlight text-black hover:bg-highlight/90" : "text-white border-gray-600 hover:bg-gray-800"}`}
                >
                  {index === 0 && <Check className="h-4 w-4 mr-2" />}
                  {storage}
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="flex-1 bg-highlight text-black hover:bg-highlight/90">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>

          {/* Exchange Option */}
          <div className="bg-gray-900 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <RefreshCcw className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">Exchange Your Old Device</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Trade in your old smartphone and get up to 50,000 ETB off on this device.
                </p>
                <Link href="/exchange/calculator" className="text-sm text-highlight hover:underline">
                  Calculate your device value
                </Link>
              </div>
            </div>
          </div>

          {/* Shipping & Warranty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">Free Shipping in Addis Ababa</h3>
                <p className="text-sm text-gray-300">Delivery within 2-3 business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">Local Warranty</h3>
                <p className="text-sm text-gray-300">1 year manufacturer warranty in Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="specifications">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 bg-gray-900">
            <TabsTrigger
              value="specifications"
              className="data-[state=active]:bg-highlight data-[state=active]:text-black"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-highlight data-[state=active]:text-black">
              Features
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-highlight data-[state=active]:text-black">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Display:</span>{" "}
                  <span className="text-gray-300">{product.specifications.display}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Processor:</span>{" "}
                  <span className="text-gray-300">{product.specifications.processor}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Main Camera:</span>{" "}
                  <span className="text-gray-300">{product.specifications.camera}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Front Camera:</span>{" "}
                  <span className="text-gray-300">{product.specifications.frontCamera}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Battery:</span>{" "}
                  <span className="text-gray-300">{product.specifications.battery}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Operating System:</span>{" "}
                  <span className="text-gray-300">{product.specifications.os}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Dimensions:</span>{" "}
                  <span className="text-gray-300">{product.specifications.dimensions}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Weight:</span>{" "}
                  <span className="text-gray-300">{product.specifications.weight}</span>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <span className="font-medium text-white">Water Resistance:</span>{" "}
                  <span className="text-gray-300">{product.specifications.waterResistant}</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Advanced Camera System</h4>
                    <p className="text-gray-300">
                      {brand === "samsung"
                        ? "Capture stunning photos with the 200MP main camera and 100x Space Zoom."
                        : "Take incredible photos with the 48MP main camera and advanced computational photography."}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Powerful Performance</h4>
                    <p className="text-gray-300">
                      {brand === "samsung"
                        ? "Experience lightning-fast performance with the Snapdragon 8 Gen 2 processor."
                        : "Enjoy seamless performance with the A17 Pro chip, perfect for gaming and multitasking."}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Stunning Display</h4>
                    <p className="text-gray-300">
                      {brand === "samsung"
                        ? "Immerse yourself in the 6.8-inch Dynamic AMOLED display with 120Hz refresh rate."
                        : "Experience the beautiful 6.7-inch Super Retina XDR display with ProMotion technology."}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">All-Day Battery Life</h4>
                    <p className="text-gray-300">
                      {brand === "samsung"
                        ? "Stay powered all day with the 5000mAh battery and fast charging capabilities."
                        : "Enjoy up to 29 hours of video playback with intelligent battery management."}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Premium Design</h4>
                    <p className="text-gray-300">
                      {brand === "samsung"
                        ? "Sleek and durable design with Armor Aluminum frame and Gorilla Glass Victus 2."
                        : "Elegant titanium design that's both lightweight and incredibly durable."}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Customer Reviews</h3>
                <Button className="bg-highlight text-black hover:bg-highlight/90">Write a Review</Button>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-highlight">{product.rating}</div>
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-highlight fill-highlight" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{product.reviewCount} reviews</div>
                </div>

                <div className="flex-1 ml-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium w-8 text-white">5★</div>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-highlight h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <div className="text-sm text-gray-400 w-8">70%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium w-8 text-white">4★</div>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-highlight h-full rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <div className="text-sm text-gray-400 w-8">20%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium w-8 text-white">3★</div>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-highlight h-full rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      <div className="text-sm text-gray-400 w-8">7%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium w-8 text-white">2★</div>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-highlight h-full rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <div className="text-sm text-gray-400 w-8">2%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium w-8 text-white">1★</div>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-highlight h-full rounded-full" style={{ width: "1%" }}></div>
                      </div>
                      <div className="text-sm text-gray-400 w-8">1%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-semibold text-white">Abebe T.</div>
                    <div className="text-sm text-gray-400">Verified Purchase</div>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "text-highlight fill-highlight" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2 text-white">Best phone available in Ethiopia!</h4>
                  <p className="text-gray-300">
                    This is by far the best smartphone I've ever owned. The camera quality is outstanding, and the
                    battery life easily lasts me through a full day of heavy use. Micky Mobile provided excellent
                    service and the price was fair compared to other stores in Addis.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-semibold text-white">Sara M.</div>
                    <div className="text-sm text-gray-400">Verified Purchase</div>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "text-highlight fill-highlight" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2 text-white">Great phone, excellent local support</h4>
                  <p className="text-gray-300">
                    The phone itself is excellent - fast, great screen, and amazing camera. What I appreciate most is
                    that Micky Mobile offers local warranty and support here in Ethiopia. When I had a question about
                    setup, they were very helpful.
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-6 border-gray-700 text-white hover:bg-gray-800">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

