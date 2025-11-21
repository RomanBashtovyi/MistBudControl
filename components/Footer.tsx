import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import {
  SITE_CONFIG,
  DIRECTOR_CONTACT,
  FOOTER_TEXT,
  NAVIGATION,
} from '@/constants/site'

export function Footer() {
  const [aboutLink, projectsLink] = NAVIGATION

  return (
    <footer className="bg-charcoal text-white py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto mb-12">
          {/* Company Info */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image
                src="/logo_footer.png"
                alt={SITE_CONFIG.name}
                width={250}
                height={83}
                className="h-20 md:h-24 w-auto"
              />
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {FOOTER_TEXT.companyDescription}
            </p>
          </div>

          {/* Contacts */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              {FOOTER_TEXT.contactsTitle}
            </h3>
            <ul className="space-y-4 text-base md:text-lg mb-6">
              <li>
                <a
                  href={`tel:${DIRECTOR_CONTACT.phone.replace(
                    /\s/g,
                    ''
                  )}`}
                  className="inline-flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{DIRECTOR_CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DIRECTOR_CONTACT.email}`}
                  className="inline-flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">
                    {DIRECTOR_CONTACT.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              {FOOTER_TEXT.navigationTitle}
            </h3>
            <ul className="space-y-4 text-base md:text-lg">
              <li>
                <Link
                  href={aboutLink.href}
                  className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4 inline-block"
                >
                  {aboutLink.label}
                </Link>
              </li>
              <li>
                <Link
                  href={projectsLink.href}
                  className="text-gray-300 hover:text-primary transition-colors hover:underline underline-offset-4 inline-block"
                >
                  {projectsLink.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-10 text-sm md:text-base text-gray-400 space-y-3 text-center">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            {SITE_CONFIG.name}. {FOOTER_TEXT.copyright}
          </p>
          <p>
            Розроблено, протестовано та підтримується
            командою{' '}
            <a
              href="https://jet.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              Jet.Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
