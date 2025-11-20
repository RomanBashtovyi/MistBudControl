import { SPECIALIZATIONS } from '@/constants/site'
import { cn } from '@/lib/utils'
import { HiCheckCircle } from 'react-icons/hi'

export function SpecializationsSection() {
  return (
    <section
      className={cn(
        'section-spacing bg-gradient-to-b from-white via-background to-background-secondary/40'
      )}
    >
      <div className={cn('container')}>
        <div
          className={cn(
            'mx-auto text-center space-y-4 md:space-y-6 mb-12 md:mb-16 px-4 lg:w-2/3'
          )}
        >
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary'
            )}
          >
            Широкий спектр об’єктів
          </h2>
          <p
            className={cn(
              'text-lg md:text-xl text-text-secondary leading-relaxed'
            )}
          >
            Працюємо з ключовими галузями реального сектору
            та знаємо, як адаптувати інженерні рішення під
            вимоги виробництв різного масштабу.
          </p>
        </div>

        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mx-auto'
          )}
        >
          {SPECIALIZATIONS.map((specialization, index) => (
            <article
              key={index}
              className={cn(
                'relative h-full rounded-[28px] bg-white p-[1.5px] shadow-[0_20px_60px_rgba(15,23,42,0.08)]'
              )}
            >
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-[26px] bg-gradient-to-b from-white to-background-secondary/40 px-6 py-8 md:px-8 md:py-10'
                )}
              >
                <span
                  className={cn(
                    'absolute top-4 right-4 md:top-6 md:right-6 inline-flex min-w-[80px] md:min-w-[120px] justify-center rounded-full bg-primary px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-bold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(196,108,77,0.35)]'
                  )}
                >
                  {specialization.percentage}
                </span>

                <div
                  className={cn(
                    'space-y-3 pr-24 md:pr-32 min-h-[60px] md:min-h-[80px]'
                  )}
                >
                  <h3
                    className={cn(
                      'text-xl md:text-2xl font-bold leading-tight text-primary'
                    )}
                  >
                    {specialization.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    'mt-auto flex flex-col pt-8'
                  )}
                >
                  <ul className={cn('space-y-4')}>
                    {specialization.items.map(
                      (item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={cn(
                            'flex items-center gap-4 rounded-3xl bg-white/95 px-5 py-4 shadow-[0_15px_35px_rgba(15,23,42,0.1)] ring-1 ring-primary/20'
                          )}
                        >
                          <HiCheckCircle className="h-8 w-8 flex-shrink-0 text-primary" />
                          <span
                            className={cn(
                              'text-lg md:text-xl font-semibold leading-snug text-primary'
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
