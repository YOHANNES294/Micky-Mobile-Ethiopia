import Link from "next/link"
import { Facebook, Instagram, Smartphone, Youtube } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Smartphone className="h-5 w-5 text-highlight" />
              <span className="font-bold text-xl text-white">Micky Mobile</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted destination for premium Samsung and iPhone smartphones in Ethiopia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-highlight transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-highlight transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://t.me/Micku2" className="text-gray-300 hover:text-highlight transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
                  <path d="M11.5 14.5L14.5 11.5"></path>
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@micky_mobile1?is_from_webapp=1&sender_device=pc"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8v8"></path>
                  <path d="M9 16v8"></path>
                  <path d="M15 8a4 4 0 0 0 4 4"></path>
                  <path d="M19 4a4 4 0 0 0-4-4"></path>
                  <path d="M15 4h-4"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-highlight transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-highlight">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/samsung" className="text-gray-300 hover:text-white transition-colors">
                  Samsung
                </Link>
              </li>
              <li>
                <Link href="/products/iphone" className="text-gray-300 hover:text-white transition-colors">
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="/exchange" className="text-gray-300 hover:text-white transition-colors">
                  Exchange Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-highlight">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-300 hover:text-white transition-colors">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-highlight">Contact Information</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Bole Road, Near Millennium Hall</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="pt-2">
                <a href="tel:+251933694796" className="hover:text-white transition-colors">
                  Phone: +251 93 369 4796
                </a>
              </p>
              <p>
                <a href="mailto:johnsm294@gmail.com" className="hover:text-white transition-colors">
                  Email: johnsm294@gmail.com
                </a>
              </p>
              <p>
                <a href="https://t.me/Micku2" className="hover:text-white transition-colors">
                  Telegram: @Micku2
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Micky Mobile Ethiopia. All rights reserved.</p>
          <p className="mt-2 text-highlight">Developed by Yohanes Mekonen (Information System)</p>
        </div>
      </div>
    </footer>
  )
}

