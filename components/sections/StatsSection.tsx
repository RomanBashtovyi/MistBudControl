import { COMPANY_STATS, SECTION_HEADINGS } from '@/constants/site'
import { cn } from '@/lib/utils'

export function StatsSection() {
  const { labels } = SECTION_HEADINGS.stats

  const stats = [
    {
      value: COMPANY_STATS.projects,
      label: (
        <>
          <span className="block">{labels.projects.line1}</span>
          <span className="block">{labels.projects.line2}</span>
        </>
      ),
    },
    {
      value: COMPANY_STATS.clients,
      label: (
        <>
          <span className="block">{labels.clients.line1}</span>
          <span className="block">{labels.clients.line2}</span>
        </>
      ),
    },
    {
      value: COMPANY_STATS.area,
      label: (
        <>
          <span className="block">{labels.area.line1}</span>
          <span className="block">{labels.area.line2}</span>
        </>
      ),
    },
    {
      value: COMPANY_STATS.recommendations,
      label: (
        <>
          <span className="block">{labels.recommendations.line1}</span>
          <span className="block">{labels.recommendations.line2}</span>
        </>
      ),
    },
  ]

  return (
    <section
      className={cn(
        'section-spacing bg-charcoal text-white relative overflow-hidden'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0'
        )}
      >
        <div
          className={cn(
            'absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-[140px]'
          )}
        />
        <div
          className={cn(
            'absolute -bottom-28 -left-12 h-96 w-96 rounded-full bg-primary-dark/15 blur-[170px]'
          )}
        />
      </div>
      <div className={cn('container relative z-10')}>
        <h2
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-12 px-4'
          )}
        >
          <span className="text-white">{SECTION_HEADINGS.stats.title.part1}</span>
          <span className="text-primary">{SECTION_HEADINGS.stats.title.part2}</span>
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-2'
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'relative flex flex-col items-center justify-center text-center gap-3 md:gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 md:px-6 md:py-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)]'
              )}
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-x-10 -top-6 h-12 rounded-full bg-primary/10 blur-3xl'
                )}
              />
              <div
                className={cn(
                  'relative text-5xl sm:text-6xl md:text-5xl font-bold text-primary drop-shadow-[0_8px_25px_rgba(243,112,33,0.35)]'
                )}
              >
                {stat.value}
              </div>
              <h3
                className={cn(
                  'text-base lg:text-lg font-semibold text-white leading-tight tracking-tight px-1'
                )}
              >
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
