'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import FooterSection from '@/components/footer-section'
import { vendors, devices } from '@/data/devices'

export default function DownloadPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showDiscontinued, setShowDiscontinued] = useState(false)

  const totalDevices = Object.values(devices).flat().length
  const shownDevices = Object.values(devices)
    .flat()
    .filter(device => showDiscontinued || device.supported).length

  const filteredDevices = Object.entries(devices).reduce((acc, [vendor, deviceList]) => {
    const filtered = deviceList.filter(device => {
      const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          device.codename.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSupport = showDiscontinued || device.supported
      return matchesSearch && matchesSupport
    })
    if (filtered.length > 0) {
      acc[vendor] = filtered
    }
    return acc
  }, {} as typeof devices)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection="download" scrollToSection={() => {}} />

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between gap-8 mb-8">
            <h1 className="text-2xl font-medium">Devices</h1>
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search devices..."
                className="w-full h-9 pl-10 pr-4 bg-white/5 rounded-md text-sm text-white placeholder:text-gray-400 border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/25"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-6">
            Devices with a lower opacity image are no longer officially supported and the pages exist for reference only.<br />
            You can show them by disabling "Hide discontinued devices" in the device filters below:
          </p>

          <div className="flex gap-4 mb-12">
            <Button 
              variant="outline" 
              className="text-xs"
              onClick={() => setShowDiscontinued(!showDiscontinued)}
            >
              {showDiscontinued ? 'HIDE' : 'SHOW'} DISCONTINUED DEVICES
            </Button>
            <Button variant="outline" className="text-xs">
              FILTER ({shownDevices} OF {totalDevices} SHOWN)
            </Button>
          </div>

          <div className="mb-12">
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

          {/* Device Sections */}
          {Object.entries(filteredDevices).map(([vendor, deviceList]) => (
            <section key={vendor} id={vendor.toLowerCase()} className="mt-16">
              <h2 className="text-2xl font-medium mb-8">{vendor}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {deviceList.map((device) => (
                  <Link
                    key={device.codename}
                    href={`/download/${device.vendor.toLowerCase()}/${device.codename}`}
                    className="group block"
                  >
                    <div className="aspect-square bg-white/5 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={device.image}
                        alt={device.name}
                        width={200}
                        height={200}
                        className={`w-full h-full object-contain p-4 group-hover:scale-105 transition-transform ${
                          device.supported ? '' : 'opacity-50'
                        }`}
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
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

