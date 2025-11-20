// Project types
export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  area?: string
  year?: string
  location?: string
  thumbnail: string
  images: string[]
  featured?: boolean
}

export type ProjectCategory =
  | 'warehouse'
  | 'production'
  | 'logistics'
  | 'metalworking'
  | 'grain-processing'
  | 'transport-service'
  | 'other'

// Stats for homepage
export interface CompanyStats {
  projects: string
  clients: string
  area: string
  recommendations: string
}

// Partner info
export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
  location?: string
  logoBackgroundClass?: string
}

// Contact info
export interface ContactInfo {
  name: string
  position: string
  description?: string
  phone: string
  email: string
  photo?: string
}

// Technology item
export interface TechnologyItem {
  name: string
  icon: string
}

// Technology category
export interface Technology {
  title: string
  category: string
  items: TechnologyItem[]
}

// Hero section content
export interface HeroContent {
  title: {
    line1: string
    line2: string
  }
  description: string
  buttons: {
    primary: string
    secondary: string
  }
}

// Navigation item
export interface NavigationItem {
  label: string
  href: string
}
