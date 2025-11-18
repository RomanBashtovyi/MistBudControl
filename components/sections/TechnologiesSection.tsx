import { TECHNOLOGIES, BENEFITS } from '@/constants/site'
import { cn } from '@/lib/utils'
import { Cog, Factory, Handshake } from 'lucide-react'

export function TechnologiesSection() {
  const benefitIcons = [Handshake, Cog, Factory]

  return (
    <section
      className={cn('section-spacing bg-background')}
    >
      <div className={cn('container space-y-24')}>
        <div
          className={cn(
            'relative rounded-[36px] bg-charcoal text-white px-6 py-12 md:px-12 md:py-16 overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.5)]'
          )}
        >
          <div
            className={cn(
              'pointer-events-none absolute inset-0'
            )}
          >
            <div
              className={cn(
                'absolute -right-12 top-10 h-72 w-72 rounded-full bg-primary/30 blur-[140px]'
              )}
            />
            <div
              className={cn(
                'absolute -left-16 bottom-0 h-96 w-96 rounded-full bg-primary-dark/30 blur-[180px]'
              )}
            />
          </div>

          <div
            className={cn(
              'relative z-10 text-center space-y-4 md:space-y-6  mx-auto mb-12 md:mb-16 lg:w-3/4'
            )}
          >
            <p
              className={cn(
                'text-sm uppercase tracking-[0.4em] text-white/70'
              )}
            >
              Automation stack
            </p>
            <h2
              className={cn(
                'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
              )}
            >
              <span className={cn('text-white')}>
                Сучасні технології{' '}
              </span>
              <span className={cn('text-primary')}>
                автоматизації
              </span>
            </h2>
            <p
              className={cn(
                'text-lg md:text-xl text-white/80'
              )}
            >
              Ми супроводжуємо команду на кожному етапі: від
              концепції BIM до координації задач у
              PM-системах та фінальної візуалізації.
            </p>
          </div>

          <div
            className={cn(
              'relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 px-4'
            )}
          >
            {TECHNOLOGIES.map((tech, index) => (
              <article
                key={index}
                className={cn(
                  'rounded-[22px] border border-white/10 bg-white/5 px-6 py-6 md:px-7 md:py-8 text-left space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1'
                )}
              >
                <div
                  className={cn(
                    'flex items-center justify-between gap-3'
                  )}
                >
                  <h3
                    className={cn('text-xl font-semibold')}
                  >
                    {tech.title}
                  </h3>
                  <span
                    className={cn(
                      'text-sm uppercase tracking-[0.2em] text-white/50'
                    )}
                  >
                    0{index + 1}
                  </span>
                </div>
                <p
                  className={cn(
                    'text-base text-white/80 leading-relaxed'
                  )}
                >
                  {tech.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className={cn('space-y-10 md:space-y-12')}>
          <div
            className={cn(
              'text-center space-y-3 md:space-y-4  mx-auto px-4 lg:w-2/3'
            )}
          >
            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold'
              )}
            >
              <span className={cn('text-charcoal')}>
                Наші{' '}
              </span>
              <span className={cn('text-primary')}>
                переваги
              </span>
            </h2>
            <p
              className={cn('text-lg text-text-secondary')}
            >
              Інтегруємо технології, процеси та команду, щоб
              забезпечити стабільну реалізацію проектів.
            </p>
          </div>
          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto lg:w-11/12'
            )}
          >
            {BENEFITS.map((benefit, index) => {
              const Icon =
                benefitIcons[index] ?? benefitIcons[0]

              return (
                <article
                  key={index}
                  className={cn(
                    'relative h-full rounded-[26px] bg-gradient-to-br from-primary/25 via-transparent to-charcoal/10 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.18)]'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-full flex-col rounded-[24px] bg-white px-6 py-7 shadow-[0_20px_45px_rgba(15,23,42,0.1)] space-y-4'
                    )}
                  >
                    <div
                      className={cn(
                        'flex items-center gap-3'
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'
                        )}
                      >
                        <Icon className={cn('h-6 w-6')} />
                      </span>
                      <span
                        className={cn(
                          'text-sm font-semibold text-primary/80'
                        )}
                      >
                        0{index + 1}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        'text-xl md:text-2xl font-semibold text-charcoal leading-tight'
                      )}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className={cn(
                        'text-base md:text-lg text-text-secondary leading-relaxed'
                      )}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
