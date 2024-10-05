'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/category1" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Category 1
                </Link>
                <Link href="/category2" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Category 2
                </Link>
                <Link href="/category3" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Category 3
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">View cart</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/category1" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Category 1
            </Link>
            <Link href="/category2" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Category 2
            </Link>
            <Link href="/category3" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Category 3
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">View cart</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}