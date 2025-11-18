import { Mail, Phone } from 'lucide-react'
import { DIRECTOR_CONTACT } from '@/constants/site'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-spacing bg-background-secondary scroll-mt-16"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-charcoal">
                Зв&apos;яжіться безпосередньо з{' '}
              </span>
              <span className="text-primary">
                директором та головним архітектором
              </span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mx-auto leading-relaxed">
              Жодних менеджерів чи посередників —
              телефонуйте або пишіть прямо людині, яка
              приймає ключові рішення. Отримайте авторську
              консультацію від директора та архітектора
              вашого проекту.
            </p>
          </div>

          <div className="bg-background rounded-xl p-8 md:p-10 lg:p-12 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary-light to-primary"></div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Director Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-5xl md:text-6xl font-bold text-white">
                  Д
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 w-full">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                    {DIRECTOR_CONTACT.name}
                  </h3>
                  <p className="text-lg md:text-xl text-text-secondary font-semibold">
                    Директор та головний архітектор
                  </p>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed">
                    Особисто відповідаю на всі звернення,
                    контролюю архітектуру та готовий
                    обговорити технічні деталі, терміни
                    виконання та вартість вашого проекту.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5 w-full">
                  <a
                    href={`tel:${DIRECTOR_CONTACT.phone.replace(
                      /\s/g,
                      ''
                    )}`}
                    className="flex items-start justify-center md:justify-start gap-4 text-lg md:text-xl hover:text-primary transition-colors group w-full"
                  >
                    <div className="min-w-[56px] h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary transition-colors group-hover:text-primary" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <div className="text-sm text-text-muted">
                        Телефонуйте прямо зараз
                      </div>
                      <span className="font-bold text-lg sm:text-xl md:text-2xl text-charcoal block leading-tight break-words">
                        {DIRECTOR_CONTACT.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${DIRECTOR_CONTACT.email}`}
                    className="flex items-start justify-center md:justify-start gap-4 text-lg md:text-xl hover:text-primary transition-colors group w-full"
                  >
                    <div className="min-w-[56px] h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary transition-colors group-hover:text-primary" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <div className="text-sm text-text-muted">
                        Або напишіть на email
                      </div>
                      <span className="font-semibold text-base sm:text-lg text-charcoal block break-words">
                        {DIRECTOR_CONTACT.email}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-6">
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    <span className="font-bold text-charcoal text-xl block mb-2">
                      Чому варто зв&apos;язатися з
                      директором?
                    </span>
                    Ви отримаєте найшвидшу відповідь, прямий
                    доступ до прийняття рішень та експертну
                    консультацію без зайвих посередників.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
