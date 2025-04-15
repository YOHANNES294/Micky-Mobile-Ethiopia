"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { User, Settings, ShoppingBag, CreditCard, Bell, Lock, LogOut, Phone, Mail, MapPin, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "Yohanes Mekonen",
    email: "johnsm294@gmail.com",
    phone: "+251 911 234 567",
    address: "Bole Road, Near Millennium Hall, Addis Ababa, Ethiopia",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically save the data to a backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-white">
        My Profile <span className="text-highlight">Settings</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <Card className="bg-gray-900 border-gray-800 md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-highlight">
                <Image src="/placeholder.svg?height=96&width=96" alt="Profile picture" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold text-white">Yohanes Mekonen</h2>
              <p className="text-gray-400">Developer</p>
            </div>

            <nav className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <User className="mr-2 h-5 w-5 text-highlight" />
                Personal Info
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <ShoppingBag className="mr-2 h-5 w-5 text-highlight" />
                Orders
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <CreditCard className="mr-2 h-5 w-5 text-highlight" />
                Payment Methods
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <Bell className="mr-2 h-5 w-5 text-highlight" />
                Notifications
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <Settings className="mr-2 h-5 w-5 text-highlight" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <Lock className="mr-2 h-5 w-5 text-highlight" />
                Security
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800 hover:text-highlight"
              >
                <LogOut className="mr-2 h-5 w-5 text-highlight" />
                Logout
              </Button>
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full grid grid-cols-3 bg-gray-900">
              <TabsTrigger value="personal" className="data-[state=active]:bg-highlight data-[state=active]:text-black">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-highlight data-[state=active]:text-black">
                Security
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="data-[state=active]:bg-highlight data-[state=active]:text-black"
              >
                Preferences
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Personal Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              disabled={!isEditing}
                              className="pl-10 bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>
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
                              value={formData.email}
                              onChange={handleChange}
                              disabled={!isEditing}
                              className="pl-10 bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">
                            Phone Number
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={!isEditing}
                              className="pl-10 bg-gray-800 border-gray-700 text-white"
                            />
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
                              value={formData.address}
                              onChange={handleChange}
                              disabled={!isEditing}
                              className="pl-10 bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-6">
                      {isEditing ? (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsEditing(false)}
                            className="mr-2 border-gray-700 text-white hover:bg-gray-800"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-highlight hover:bg-highlight/90 text-black">
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </Button>
                        </>
                      ) : (
                        <Button
                          type="button"
                          onClick={() => setIsEditing(true)}
                          className="bg-highlight hover:bg-highlight/90 text-black"
                        >
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Security Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your password and security preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Change Password</h3>
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-white">
                          Current Password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-white">
                          New Password
                        </Label>
                        <Input id="new-password" type="password" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-white">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <Button className="bg-highlight hover:bg-highlight/90 text-black">Update Password</Button>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-gray-800">
                      <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Enable two-factor authentication</p>
                          <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage how you receive notifications and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Email Notifications</p>
                        <p className="text-sm text-gray-400">Receive order updates and promotions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">SMS Notifications</p>
                        <p className="text-sm text-gray-400">Receive text messages for order status</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Marketing Communications</p>
                        <p className="text-sm text-gray-400">Receive special offers and promotions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">New Product Announcements</p>
                        <p className="text-sm text-gray-400">Be the first to know about new products</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <h3 className="text-lg font-medium text-white mb-4">Language & Currency</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language" className="text-white">
                          Language
                        </Label>
                        <select
                          id="language"
                          className="w-full h-10 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        >
                          <option value="en">English</option>
                          <option value="am">Amharic</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency" className="text-white">
                          Currency
                        </Label>
                        <select
                          id="currency"
                          className="w-full h-10 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        >
                          <option value="ETB">Ethiopian Birr (ETB)</option>
                          <option value="USD">US Dollar (USD)</option>
                        </select>
                      </div>
                    </div>
                    <Button className="mt-4 bg-highlight hover:bg-highlight/90 text-black">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

