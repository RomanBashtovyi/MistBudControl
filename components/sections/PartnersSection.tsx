import Image from 'next/image'

import { PARTNERS } from '@/constants/site'

export function PartnersSection() {
  return (
    <section className="section-spacing bg-background-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 px-4">
          <span className="text-charcoal">Наші </span>
          <span className="text-primary">партнери</span>
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {PARTNERS.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Відкрити сайт компанії ${partner.name}`}
              className="group bg-white/95 rounded-[26px] shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-6 sm:p-8 flex flex-col items-center justify-between text-center border border-slate-200 ring-1 ring-slate-100 hover:ring-primary/30 hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-h-[230px]"
            >
              <div
                className={`w-full flex-1 flex items-center justify-center mb-5 rounded-2xl p-4 h-28 transition-colors ${
                  partner.logoBackgroundClass ??
                  'bg-charcoal'
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={`Логотип компанії ${partner.name}`}
                  width={220}
                  height={90}
                  className="w-full max-h-20 object-contain drop-shadow-md"
                />
              </div>
              <div className="space-y-2 w-full">
                <p className="font-bold text-base sm:text-lg text-charcoal leading-tight group-hover:text-primary transition-colors">
                  {partner.name}
                </p>
                {partner.location && (
                  <p className="text-sm sm:text-base text-text-muted leading-snug">
                    {partner.location}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
