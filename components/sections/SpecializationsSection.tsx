import {
  SPECIALIZATIONS,
  SECTION_HEADINGS,
} from '@/constants/site'
import { cn } from '@/lib/utils'
import { HiCheckCircle } from 'react-icons/hi'

export function SpecializationsSection() {
  const { title, description } =
    SECTION_HEADINGS.specializations

  return (
    <section
      className={cn(
        'section-spacing bg-gradient-to-b from-white via-background to-background-secondary/40'
      )}
    >
      <div className={cn('container px-3 sm:px-6 lg:px-8')}>
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
            {title}
          </h2>
          <p
            className={cn(
              'text-lg md:text-xl text-text-secondary leading-relaxed'
            )}
          >
            {description}
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
                  'relative flex h-full flex-col rounded-[26px] bg-gradient-to-b from-white to-background-secondary/40 px-6 py-6 md:px-8 md:py-8'
                )}
              >
                <div
                  className={cn('space-y-2 min-h-[40px]')}
                >
                  <h3
                    className={cn(
                      'text-2xl md:text-3xl font-bold leading-tight text-primary'
                    )}
                  >
                    {specialization.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    'mt-auto flex flex-col pt-4'
                  )}
                >
                  <ul className={cn('space-y-[-20px]')}>
                    {specialization.items.map(
                      (item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={cn(
                            'flex items-center gap-4 rounded-2xl bg-white/95 px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] ring-1 ring-primary/20'
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-12 w-12 flex-shrink-0 items-center justify-center'
                            )}
                          >
                            <HiCheckCircle
                              className="h-10 w-10"
                              style={{
                                color:
                                  'hsl(var(--color-primary))',
                              }}
                            />
                          </span>
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
