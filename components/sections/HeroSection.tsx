import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HERO_CONTENT } from '@/constants/site'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background-secondary via-background to-background-secondary pt-0 pb-10 md:py-12 lg:py-16 min-h-[90svh] flex items-center">
      <div className="container">
        <div className="mx-auto text-center space-y-6 md:space-y-6 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance text-primary space-y-2">
            <span className="block ">
              {HERO_CONTENT.title.line1}
            </span>
            <span className="block">
              {HERO_CONTENT.title.line2}
            </span>
          </h1>

          <div className="mx-auto w-full space-y-1 text-text-secondary text-base md:text-xl leading-relaxed text-center md:text-center">
            <p>{HERO_CONTENT.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">
                {HERO_CONTENT.buttons.primary}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="#contact">
                {HERO_CONTENT.buttons.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
