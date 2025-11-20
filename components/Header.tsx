'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  SITE_CONFIG,
  NAVIGATION,
  UI_TEXT,
} from '@/constants/site'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  const [aboutLink, projectsLink, contactLink] = NAVIGATION

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container flex min-h-[80px] md:min-h-[88px] lg:min-h-[96px] items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt={SITE_CONFIG.name}
            width={276}
            height={92}
            className="h-[60px] md:h-[70px] lg:h-[78px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href={aboutLink.href}
            className="text-lg font-medium text-text-secondary hover:text-primary hover:underline underline-offset-8 transition-all whitespace-nowrap"
          >
            {aboutLink.label}
          </Link>
          <Link
            href={projectsLink.href}
            className="text-lg font-medium text-text-secondary hover:text-primary hover:underline underline-offset-8 transition-all whitespace-nowrap"
          >
            {projectsLink.label}
          </Link>
          <Button size="default" asChild>
            <Link href={contactLink.href}>
              {contactLink.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-label={
              open ? UI_TEXT.closeMenu : UI_TEXT.openMenu
            }
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="container flex flex-col gap-4">
          <Link
            href={aboutLink.href}
            className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {aboutLink.label}
          </Link>
          <Link
            href={projectsLink.href}
            className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {projectsLink.label}
          </Link>
          <Button
            asChild
            className="w-full"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <Link href={contactLink.href}>
              {contactLink.label}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
