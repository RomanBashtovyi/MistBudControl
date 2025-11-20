import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection'
import { SpecializationsSection } from '@/components/sections/SpecializationsSection'
import { TechnologiesSection } from '@/components/sections/TechnologiesSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjectsSection />
      <StatsSection />
      <PartnersSection />
      <SpecializationsSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  )
}
