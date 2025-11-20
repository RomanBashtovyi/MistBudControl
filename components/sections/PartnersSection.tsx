import Image from 'next/image'

import { PARTNERS } from '@/constants/site'

export function PartnersSection() {
  return (
    <section className="section-spacing bg-background-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 px-4">
          <span className="text-primary">Наші </span>
          <span className="text-primary">партнери</span>
        </h2>
        <p className="text-base md:text-lg text-text-muted text-center mx-auto mb-10 md:mb-14 px-4">
          100+ клієнтів довіряють нашим архітекторам уже
          понад 12 років завдяки точності проєктування та
          якісному супроводу.
        </p>

        <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mx-auto px-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white/95 rounded-[26px] shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-6 sm:p-8 flex flex-col items-center justify-between text-center border border-slate-200 ring-1 ring-slate-100 min-h-[250px]"
            >
              <div className="w-full flex items-center justify-center mb-6 rounded-2xl px-6 py-5 h-[170px] transition-colors bg-slate-100">
                <Image
                  src={partner.logo}
                  alt={`Логотип компанії ${partner.name}`}
                  width={220}
                  height={90}
                  className="w-full max-h-24 object-contain drop-shadow-md"
                />
              </div>
              <div className="space-y-2 w-full">
                <p className="font-bold text-base sm:text-lg text-charcoal leading-tight">
                  {partner.name}
                </p>
                {partner.location && (
                  <p className="text-sm sm:text-base text-text-muted leading-snug">
                    {partner.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
