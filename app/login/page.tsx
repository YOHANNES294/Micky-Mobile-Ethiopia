"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Smartphone, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Pre-fill with the email provided by the user
  useEffect(() => {
    setEmail("johnsm294@gmail.com")
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setShowWelcome(true)

      // Redirect after showing welcome message
      setTimeout(() => {
        router.push("/")
      }, 2000)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {showWelcome ? (
        <div className="welcome-animation text-center">
          <Smartphone className="h-16 w-16 text-highlight mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-highlight">Micky Mobile</span>
          </h1>
          <p className="text-xl text-white">Your premium smartphone destination in Ethiopia</p>
        </div>
      ) : (
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Smartphone className="h-12 w-12 text-highlight" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Login to Micky Mobile</CardTitle>
            <CardDescription className="text-gray-400">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="email"
                      placeholder="johnsm294@gmail.com"
                      className="pl-10 bg-gray-800 border-gray-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="text-sm text-highlight hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 bg-gray-800 border-gray-700 text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-highlight hover:bg-highlight/90 text-black font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Image src="/images/google-logo.png" alt="Google" width={18} height={18} className="mr-2" />
                Google
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Image src="/images/apple-logo.png" alt="Apple" width={18} height={18} className="mr-2" />
                Apple
              </Button>
            </div>
            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-highlight hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      )}

      <style jsx global>{`
        .welcome-animation {
          animation: fadeIn 0.5s ease-in-out, scaleUp 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

