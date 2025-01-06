import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, LinkIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { devices } from '@/data/devices'
import Header from '@/components/header'
import FooterSection from '@/components/footer-section'
import { Button } from "@/components/ui/button"

interface DevicePageProps {
  params: {
    vendor: string
    device: string
  }
}

export default function DevicePage({ params }: DevicePageProps) {
  const vendor = Object.entries(devices).find(([v]) => 
    v.toLowerCase() === params.vendor.toLowerCase()
  )?.[0]

  const device = vendor ? devices[vendor].find(d => 
    d.codename.toLowerCase() === params.device.toLowerCase()
  ) : null

  if (!device) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection="download" scrollToSection={() => {}} />

      <main className="pt-24 pb-12">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <Link 
              href="/download" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Devices
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-medium mb-2">{device.name}</h1>
              <p className="text-gray-400 text-sm mb-8">codename: {device.codename}</p>

              <div className="space-y-12">
                {/* Downloads Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">Downloads</h2>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Get the builds here
                  </Button>
                </section>

                {/* Guides Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">Guides</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Build for yourself
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Update to a newer build of the same LineageOS version
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Upgrade to a higher version of LineageOS (e.g. lineage-21 -> lineage-22.1)
                      </Link>
                    </li>
                  </ul>
                </section>

                {/* Special Boot Modes Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">Special boot modes</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Recovery:</span> {device.bootModes?.recovery}
                      </p>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                        Volume Down
                      </div>
                      {" + "}
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                        Power
                      </div>
                    </div>
                    <div>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Bootloader/Fastboot/Download:</span> {device.bootModes?.bootloader}
                      </p>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                        Volume Up
                      </div>
                    </div>
                  </div>
                </section>

                {/* Known Quirks Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                    Known quirks
                    <LinkIcon className="h-4 w-4" />
                  </h2>
                  <ul className="list-disc list-inside space-y-2">
                    {device.quirks?.map((quirk, i) => (
                      <li key={i} className="text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">
                          {quirk}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Find Help Online Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">Find help online</h2>
                  <p className="text-sm text-gray-400">
                    You can find assistance with LineageOS on{" "}
                    <Link href="#" className="text-white hover:underline">our subreddit</Link>
                    , or in{" "}
                    <Link href="#" className="text-white hover:underline">#LineageOS on Libera.Chat</Link>.
                  </p>
                </section>
              </div>
            </div>

            {/* Right Side - Device Image & Specs */}
            <div>
              <div className="sticky top-24">
                <div className="aspect-[9/16] relative mb-8">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-400">Released</div>
                    <div>{device.released}</div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Specifications</h3>
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">SoC</div>
                        <div>{device.specs.soc}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">RAM</div>
                        <div>{device.specs.ram}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">CPU</div>
                        <div>
                          <div>{device.specs.cpu.model}</div>
                          {device.specs.cpu.speeds.map((speed, i) => (
                            <div key={i} className="text-gray-400">{speed}</div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">Architecture</div>
                        <div>{device.specs.architecture}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">GPU</div>
                        <div>{device.specs.gpu}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-400">Network</div>
                        <div>
                          {device.specs.network.map((net, i) => (
                            <div key={i}>{net}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

