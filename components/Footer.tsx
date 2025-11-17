import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE_CONFIG, DIRECTOR_CONTACT } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Image
                src="/logo.png"
                alt="МістБуд Контроль"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-bold text-sm md:text-base">МістБуд Контроль</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Проектування промислових об'єктів
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <ul className="flex items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Головна
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-foreground transition-colors">
                  Проекти
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Phone */}
          <div className="text-center md:text-right">
            <a
              href={`tel:${DIRECTOR_CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm md:text-base font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {DIRECTOR_CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}

