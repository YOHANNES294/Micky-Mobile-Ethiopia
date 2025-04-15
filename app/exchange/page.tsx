import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, HelpCircle, RefreshCcw, Smartphone } from "lucide-react"

export default function ExchangePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden rounded-xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image src="/images/exchange-hero.jpg" alt="Exchange your smartphone" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exchange Program <span className="text-highlight">in Ethiopia</span>
          </h1>
          <p className="text-xl text-white max-w-xl mb-8">
            Trade in your old smartphone and get the best value towards your new Samsung or iPhone purchase. Available
            exclusively at our Addis Ababa store.
          </p>
          <Button size="lg" asChild className="bg-highlight hover:bg-highlight/90 text-black">
            <Link href="/exchange/calculator">
              <RefreshCcw className="mr-2 h-5 w-5" />
              Calculate Your Device Value
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-black text-white py-12">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">How It Works</h2>
        <p className="text-center text-highlight mb-12">Simple 3-step process</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-highlight" />
              </div>
              <CardTitle className="text-white">1. Evaluate Your Device</CardTitle>
              <CardDescription className="text-gray-400">
                Use our online calculator or visit our store for an instant valuation of your device.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We'll ask you a few questions about your device's condition, model, and specifications to provide you
                with an accurate trade-in value in Ethiopian Birr.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link href="/exchange/calculator">Start Evaluation</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center mb-4">
                <RefreshCcw className="h-6 w-6 text-highlight" />
              </div>
              <CardTitle className="text-white">2. Choose Your New Device</CardTitle>
              <CardDescription className="text-gray-400">
                Browse our selection of Samsung and iPhone smartphones and select your new device.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                The trade-in value of your old device will be applied as a discount on your new purchase, making premium
                smartphones more affordable for Ethiopian customers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link href="/products">Browse Devices</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-highlight" />
              </div>
              <CardTitle className="text-white">3. Complete the Exchange</CardTitle>
              <CardDescription className="text-gray-400">
                Finalize your purchase and hand over your old device to receive your new smartphone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our team in Addis Ababa will help you transfer your data to your new device and ensure a smooth
                transition. We'll also securely wipe your old device.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Eligible Devices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Eligible Devices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted/30 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Image src="/images/samsung-logo.png" alt="Samsung" width={30} height={30} className="mr-2" />
              Samsung Devices
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                Galaxy S Series (S10 and newer)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                Galaxy Note Series (Note 10 and newer)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                Galaxy Z Fold Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                Galaxy Z Flip Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                Galaxy A Series (A50 and newer)
              </li>
            </ul>
          </div>

          <div className="bg-muted/30 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Image src="/images/apple-logo.png" alt="Apple" width={30} height={30} className="mr-2" />
              iPhone Devices
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone 11 Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone 12 Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone 13 Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone 14 Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone 15 Series (All models)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                iPhone SE (2nd and 3rd generation)
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Don't see your device listed? Contact us to check if your smartphone is eligible for trade-in.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                How is my device value determined?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Your device value is determined based on several factors including the model, age, condition, and current
              market value. We check for screen condition, functionality of all features, battery health, and cosmetic
              condition.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                What should I do before trading in my device?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Before trading in your device, you should back up all your data, sign out of all accounts (including
              iCloud or Google account), disable any security features like Find My iPhone or Samsung Find My Mobile,
              and perform a factory reset. Remove any SIM cards or memory cards as well.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Can I exchange a device with a cracked screen?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can exchange a device with a cracked screen, but it will significantly reduce the trade-in value.
              The exact reduction depends on the severity of the damage and the model of the device. We recommend
              getting an online estimate first.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                How long does the exchange process take?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              The in-store exchange process typically takes about 30-45 minutes. This includes the device evaluation,
              data transfer to your new device, and completing the purchase. If you've already calculated your trade-in
              value online, the process can be faster.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Can I exchange multiple devices?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can exchange multiple devices. The combined value of all eligible devices will be applied to your
              new purchase. There's no limit to how many devices you can trade in, as long as they're on our eligible
              devices list.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Upgrade Your Smartphone?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Get the best value for your old device and upgrade to the latest Samsung or iPhone model today. Our exchange
          program makes it easy and affordable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/exchange/calculator">Calculate Your Device Value</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">Browse New Devices</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

