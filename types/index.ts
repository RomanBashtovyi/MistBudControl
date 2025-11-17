// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  area?: string;
  year?: string;
  location?: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
}

export type ProjectCategory =
  | "warehouse"
  | "production"
  | "logistics"
  | "metalworking"
  | "grain-processing"
  | "transport-service"
  | "other";

// Stats for homepage
export interface CompanyStats {
  projects: string;
  clients: string;
  area: string;
  recommendations: string;
}

// Partner info
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  location?: string;
}

// Contact info
export interface ContactInfo {
  name: string;
  position: string;
  phone: string;
  email: string;
  photo?: string;
}

