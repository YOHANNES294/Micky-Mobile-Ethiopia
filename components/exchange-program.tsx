import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ExchangeProgram() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Exchange Your Old Device</h2>
            <p className="text-muted-foreground mb-6">
              Upgrade to the latest smartphone by trading in your old device. Get the best value for your used phone and
              save on your new purchase.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Best Exchange Rates</h3>
                  <p className="text-muted-foreground text-sm">We offer competitive prices for your old devices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Instant Valuation</h3>
                  <p className="text-muted-foreground text-sm">
                    Get an instant quote for your device online or in-store.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Hassle-Free Process</h3>
                  <p className="text-muted-foreground text-sm">Simple and straightforward exchange process.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Data Transfer Assistance</h3>
                  <p className="text-muted-foreground text-sm">We'll help you transfer your data to your new device.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/exchange/calculator">Calculate Exchange Value</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/exchange/process">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10" />
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image
                src="/images/exchange-program.jpg"
                alt="Exchange your old device"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Samsung Trade-In</h4>
                  <p className="text-3xl font-bold text-primary">Up to $700</p>
                  <p className="text-sm text-muted-foreground">Value for eligible devices</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">iPhone Trade-In</h4>
                  <p className="text-3xl font-bold text-primary">Up to $650</p>
                  <p className="text-sm text-muted-foreground">Value for eligible devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

