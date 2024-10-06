'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, User, Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Libre_Caslon_Display } from '@next/font/google'
const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export function NavBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="w-1/4 flex justify-start">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2 md:px-3">
                  <Menu className="h-5 w-5 md:mr-2" strokeWidth={1.5}/>
                  <span className="sr-only md:not-sr-only md:text-base md:inline-block font-playfair">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="font-roboto">
                <SheetHeader>
                  <SheetTitle className="font-playfair font-medium">Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <Link href="/category1" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    Category 1
                  </Link>
                  <Link href="/category2" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    Category 2
                  </Link>
                  <Link href="/category3" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    Category 3
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <Link href="/" className={`text-2xl md:text-3xl text-primary uppercase font-libreCaslon`}>
              Prestige
            </Link>
          </div>

          <div className="w-1/4 flex items-center justify-end space-x-2">
            <Link href="/contact" className="hidden xl:inline-block text-gray-700 hover:text-primary mr-4 font-playfair">
              Contacter-nous
            </Link>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" strokeWidth={1.5} />
              <span className="sr-only">Favoris</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" strokeWidth={1.5} />
              <span className="sr-only">Compte utilisateur</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="sr-only">Panier</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}