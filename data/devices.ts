import { Device, VendorDevices } from '@/types/device'

export const vendors = [
  "ASUS", "Banana Pi", "Dynalink", "Essential", "F(x)tec", "Fairphone", 
  "Google", "HardKernel", "Lenovo", "LG", "Motorola", "Nintendo", "Nokia",
  "Nubia", "NVIDIA", "OnePlus", "Radxa", "Razer", "Realme", "Samsung",
  "SHIFT", "Solana", "Sony", "Walmart", "Xiaomi"
]

export const devices: VendorDevices = {
  "Sony": [
    {
      name: "Xperia 1 III",
      codename: "pdx215",
      image: "/placeholder.svg?height=400&width=200",
      vendor: "Sony",
      supported: true,
      released: "April 2021",
      specs: {
        soc: "Qualcomm SM8350 Snapdragon 888",
        ram: "8/12 GB",
        cpu: {
          model: "Octa-core Kryo 680",
          speeds: ["1 x 2.84 GHz", "3 x 2.42 GHz", "4 x 1.8 GHz"]
        },
        architecture: "arm64",
        gpu: "Qualcomm Adreno 660",
        network: ["2G GSM", "3G UMTS", "4G LTE", "5G NR"]
      },
      guides: {
        installation: "Installation guide content here",
        build: "Build guide content here",
        update: "Update to a newer build of the same LineageOS version",
        upgrade: "Upgrade to a higher version of LineageOS (e.g. lineage-21 -> lineage-22.1)"
      },
      bootModes: {
        recovery: "With the device powered off, hold Volume Down + Power",
        bootloader: "With the device powered off, hold Volume Up and connect the USB cable. The notification light should turn blue."
      },
      quirks: ["Device integrity"]
    }
  ]
  // Add more vendors and devices here
}

