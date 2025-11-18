import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background-secondary via-background to-background-secondary py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto text-center space-y-8 md:space-y-6 px-2">
          <h1 className="text-5xl md:text-6xl sm:text-2xl font-bold leading-tight text-balance text-charcoal space-y-2">
            <span className="block">
              ПРОЕКТУЄМО ПРОМИСЛОВІ
            </span>
            <span className="block">
              БУДІВЛІ ТА СПОРУДИ
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8 pb-2 md:pb-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">
                Переглянути проекти
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="#contact">
                Безкоштовна консультація
              </Link>
            </Button>
          </div>

          <div className="mx-auto w-full space-y-1 text-text-secondary text-lg md:text-xl leading-relaxed text-center md:text-center">
            <p>
              Комплексна розробка проектної документації для
              нового будівництва, реконструкції чи
              модернізації промислових об’єктів, виробничих
              будівель, складів, логістичних центрів.
            </p>

            <p>
              Це включає розрахунки, розміщення обладнання,
              врахування технологічних, виробничих,
              екологічних, енергетичних вимог, технічних
              умов підключення інженерних систем,
              автоматизації виробничих процесів.
            </p>

            <p>
              Комплексний підхід охоплює всі етапи: розробка
              концепції, робочих проектів, авторський та
              технічний нагляд, виконавча документація,
              дозвільна документація, введення об’єкта в
              експлуатацію.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
