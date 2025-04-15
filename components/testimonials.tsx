import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      text: "I traded in my old iPhone for the latest Samsung Galaxy at Micky Mobile. The exchange process was smooth, and I got a great deal. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/images/avatar-2.jpg",
      rating: 5,
      text: "Excellent customer service! The staff was knowledgeable and helped me choose the perfect iPhone for my needs. The prices were competitive too.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/images/avatar-3.jpg",
      rating: 4,
      text: "I've been buying my smartphones from Micky Mobile for years. They always have the latest models and their exchange program is the best in town.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

