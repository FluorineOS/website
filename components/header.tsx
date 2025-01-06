import Link from "next/link"
import { Menu, Search } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'download', label: 'Download' },
    { id: 'support', label: 'Support' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
        <nav className="container mx-auto max-w-5xl h-12 flex items-center justify-between px-6">
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs hover:text-gray-300 transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="w-6 h-6 bg-white rounded-full" />
          </Link>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-gray-300 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 hover:text-gray-300 transition-colors">
                  <Menu className="w-4 h-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-black/95 text-white border-white/10">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        // Close the sheet (you might need to implement this functionality)
                      }}
                      className={`text-sm hover:text-gray-300 transition-colors ${
                        activeSection === item.id ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

