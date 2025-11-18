import { SPECIALIZATIONS } from '@/constants/site'
import { cn } from '@/lib/utils'

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
              'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-charcoal'
            )}
          >
            Ми зробили{' '}
            <span className="text-primary">найбільше</span>
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
                'relative h-full rounded-[26px] bg-gradient-to-br from-primary/20 via-transparent to-charcoal/10 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.18)]'
              )}
            >
              <div
                className={cn(
                  'flex h-full flex-col rounded-[24px] bg-white px-5 py-6 md:px-7 md:py-8 shadow-[0_18px_45px_rgba(15,23,42,0.12)]'
                )}
              >
                <div className={cn('pb-5')}>
                  <h3
                    className={cn(
                      'text-2xl font-bold text-charcoal leading-tight'
                    )}
                  >
                    {specialization.title}
                  </h3>
                </div>
                <div className={cn('flex flex-1 flex-col')}>
                  <div
                    className={cn(
                      'mt-auto flex flex-col gap-4'
                    )}
                  >
                    <ul
                      className={cn(
                        'space-y-3 text-lg text-charcoal'
                      )}
                    >
                      {specialization.items.map(
                        (item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={cn(
                              'flex items-center gap-4 rounded-2xl border border-charcoal/5 bg-background-secondary/70 px-4 py-3 w-full'
                            )}
                          >
                            <span
                              className={cn(
                                'inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary'
                              )}
                            >
                              {String(
                                itemIndex + 1
                              ).padStart(2, '0')}
                            </span>
                            <span
                              className={cn(
                                'flex-1 leading-snug'
                              )}
                            >
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div
                      className={cn(
                        'rounded-2xl bg-primary px-5 py-3 text-center text-3xl font-bold text-white'
                      )}
                    >
                      {specialization.percentage}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
