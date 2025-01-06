export interface DeviceSpecs {
  soc: string
  ram: string
  cpu: {
    model: string
    speeds: string[]
  }
  architecture: string
  gpu: string
  network: string[]
}

export interface Device {
  name: string
  codename: string
  image: string
  vendor: string
  supported: boolean
  released: string
  specs: DeviceSpecs
  guides?: {
    installation?: string
    build?: string
    update?: string
    upgrade?: string
  }
  bootModes?: {
    recovery?: string
    bootloader?: string
  }
  quirks?: string[]
}

export interface VendorDevices {
  [key: string]: Device[]
}

