import {
  TECHNOLOGIES,
  BENEFITS,
  SECTION_HEADINGS,
} from '@/constants/site'
import { cn } from '@/lib/utils'
import { Cog, Handshake, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export function TechnologiesSection() {
  const benefitIcons = [Handshake, Cog, TrendingUp]
  const { technologies } = SECTION_HEADINGS

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
            <h2
              className={cn(
                'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
              )}
            >
              <span className={cn('text-white')}>
                {technologies.title.part1}
              </span>
              <span className={cn('text-primary')}>
                {technologies.title.part2}
              </span>
            </h2>
            <p
              className={cn(
                'text-lg md:text-xl text-white/80'
              )}
            >
              {technologies.description}
            </p>
          </div>

          <div
            className={cn(
              'relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8 px-4'
            )}
          >
            {TECHNOLOGIES.map((tech, index) => (
              <article
                key={index}
                className={cn(
                  'rounded-[22px] border border-white/10 bg-white/5 px-6 py-6 md:px-7 md:py-8 text-left space-y-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]'
                )}
              >
                <h3 className={cn('text-xl font-semibold')}>
                  {tech.title}
                </h3>
                <ul className={cn('space-y-3')}>
                  {tech.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={cn(
                        'flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 border border-white/10'
                      )}
                    >
                      <div
                        className={cn(
                          'relative h-14 w-14 flex-shrink-0'
                        )}
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          fill
                          className={cn('object-contain')}
                        />
                      </div>
                      <span
                        className={cn(
                          'text-base text-white/90 font-medium'
                        )}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className={cn('space-y-10 md:space-y-12')}>
          <div
            className={cn(
              'text-center space-y-3 md:space-y-4 mx-auto px-4 lg:w-2/3'
            )}
          >
            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold text-primary'
              )}
            >
              {technologies.integrationTitle}
            </h2>
          </div>
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto lg:w-11/12'
            )}
          >
            {BENEFITS.map((benefit, index) => {
              const Icon =
                benefitIcons[index] ?? benefitIcons[0]

              return (
                <article
                  key={index}
                  className={cn(
                    'relative h-full rounded-[26px] bg-gradient-to-br from-primary/25 via-transparent to-charcoal/10 p-[1px]'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-full flex-col rounded-[24px] bg-white px-6 py-7 shadow-[0_20px_45px_rgba(15,23,42,0.1)]'
                    )}
                  >
                    <div
                      className={cn(
                        'flex items-center gap-4 mb-5'
                      )}
                    >
                      <h3
                        className={cn(
                          'text-xl md:text-2xl font-semibold text-primary leading-tight flex-1'
                        )}
                      >
                        <span className={cn('block')}>
                          {benefit.titleLine1}
                        </span>
                        <span className={cn('block')}>
                          {benefit.titleLine2}
                        </span>
                      </h3>
                      <span
                        className={cn(
                          'inline-flex h-20 w-20 md:h-24 md:w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'
                        )}
                      >
                        <Icon
                          className={cn(
                            'h-12 w-12 md:h-14 md:w-14'
                          )}
                        />
                      </span>
                    </div>
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
