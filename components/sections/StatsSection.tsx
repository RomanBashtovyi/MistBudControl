import { COMPANY_STATS } from '@/constants/site'
import { cn } from '@/lib/utils'

export function StatsSection() {
  const stats = [
    {
      value: COMPANY_STATS.projects,
      label: 'реалізованих проектів',
    },
    {
      value: COMPANY_STATS.clients,
      label: 'задоволених клієнтів',
    },
    {
      value: COMPANY_STATS.area,
      label: 'м.кв. запроектованих площ',
    },
    {
      value: COMPANY_STATS.recommendations,
      label: 'наші клієнти нас рекомендують',
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
          <span className="text-white">Досвід і </span>
          <span className="text-primary">результати</span>
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4'
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'relative flex flex-col items-center justify-center text-center gap-3 md:gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 md:px-8 md:py-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1'
              )}
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-x-10 -top-6 h-12 rounded-full bg-primary/10 blur-3xl'
                )}
              />
              <div
                className={cn(
                  'relative text-3xl sm:text-6xl md:text-5xl font-bold text-primary drop-shadow-[0_8px_25px_rgba(243,112,33,0.35)]'
                )}
              >
                {stat.value}
              </div>
              <h3
                className={cn(
                  'text-lg md:text-xl lg:text-2xl font-semibold text-white leading-snug px-2'
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
