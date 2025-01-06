'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import FooterSection from '@/components/footer-section'

const vendors = [
  "ASUS", "Banana Pi", "Dynalink", "Essential", "F(x)tec", "Fairphone", 
  "Google", "HardKernel", "Lenovo", "LG", "Motorola", "Nintendo", "Nokia",
  "Nubia", "NVIDIA", "OnePlus", "Radxa", "Razer", "Realme", "Samsung",
  "SHIFT", "Solana", "Sony", "Walmart", "Xiaomi"
]

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="h-16 flex items-center justify-between gap-8">
            <nav className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full" />
                <span className="font-medium">FluorineOS Wiki</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/wiki/devices" className="text-sm text-white">DEVICES</Link>
                <Link href="/wiki/contribute" className="text-sm text-gray-400 hover:text-white transition-colors">CONTRIBUTE</Link>
                <Link href="/wiki/developers" className="text-sm text-gray-400 hover:text-white transition-colors">DEVELOPERS</Link>
              </div>
            </nav>
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-full h-9 pl-10 pr-4 bg-white/5 rounded-md text-sm text-white placeholder:text-gray-400 border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/25"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-medium mb-8">Devices</h1>
          
          <p className="text-sm text-gray-400 mb-6">
            Devices with a lower opacity image are no longer officially supported and the pages exist for reference only.<br />
            You can show them by disabling "Hide discontinued devices" in the device filters below:
          </p>

          <Button variant="outline" className="mb-12 text-xs">
            FILTER (198 OF 505 SHOWN)
          </Button>

          <div className="mb-8">
            <h2 className="text-sm font-medium mb-4">Select a vendor to jump to:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {vendors.map((vendor) => (
                <Link
                  key={vendor}
                  href={`#${vendor.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {vendor}
                </Link>
              ))}
            </div>
          </div>

          {/* Example Vendor Section */}
          <section id="google" className="mt-16">
            <h2 className="text-2xl font-medium mb-8">Google</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Pixel 7a",
                  codename: "lynx",
                  image: "/placeholder.svg?height=200&width=200"
                },
                {
                  name: "Pixel 8",
                  codename: "shiba",
                  image: "/placeholder.svg?height=200&width=200"
                },
                {
                  name: "Pixel 8 Pro",
                  codename: "husky",
                  image: "/placeholder.svg?height=200&width=200"
                }
              ].map((device) => (
                <Link
                  key={device.name}
                  href={`/wiki/devices/google/${device.codename}`}
                  className="group block"
                >
                  <div className="aspect-square bg-white/5 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={device.image}
                      alt={device.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-sm font-medium group-hover:text-white transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {device.codename}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

