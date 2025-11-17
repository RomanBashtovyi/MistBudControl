import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { DIRECTOR_CONTACT } from "@/constants/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Зв'яжіться безпосередньо з директором
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Без менеджерів та посередників — телефонуйте або пишіть прямо директору компанії. 
              Отримайте швидку консультацію, обговоріть деталі вашого проекту та отримайте професійну експертну оцінку.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 md:p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Director Photo */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-muted overflow-hidden flex-shrink-0 ring-4 ring-primary/10">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                  Д
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex-1 text-center md:text-left space-y-5 md:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                    {DIRECTOR_CONTACT.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    Директор компанії
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Особисто відповідаю на всі звернення. Готовий обговорити технічні деталі, 
                    терміни виконання та вартість вашого проекту.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <a
                    href={`tel:${DIRECTOR_CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-base md:text-lg hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Телефонуйте прямо зараз</div>
                      <span className="font-semibold text-lg md:text-xl">{DIRECTOR_CONTACT.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${DIRECTOR_CONTACT.email}`}
                    className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-base md:text-lg hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Або напишіть на email</div>
                      <span className="font-semibold break-all">{DIRECTOR_CONTACT.email}</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Чому варто зв'язатися з директором?</span>
                    <br />
                    Ви отримаєте найшвидшу відповідь, прямий доступ до прийняття рішень та 
                    експертну консультацію без зайвих посередників.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

