'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { SITE_CONFIG } from '@/constants/site'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3"
        >
          <Image
            src="/logo.png"
            alt={SITE_CONFIG.name}
            width={56}
            height={56}
            className="h-14 w-auto"
          />
          <span className="font-bold text-lg">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Головна
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Проекти
          </Link>
          <Button asChild>
            <Link href="#contact">
              Зв&apos;язатися з директором
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">
              Навігаційне меню
            </SheetTitle>
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-primary py-2 border-b"
                onClick={() => setOpen(false)}
              >
                Головна
              </Link>
              <Link
                href="/projects"
                className="text-lg font-medium transition-colors hover:text-primary py-2 border-b"
                onClick={() => setOpen(false)}
              >
                Проекти
              </Link>
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Link href="#contact">
                    Зв&apos;язатися з директором
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
