import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Проектуємо промислові будівлі та споруди
        </h1>
        
        <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl leading-relaxed">
          Комплексна розробка проектної документації для нового будівництва, 
          реконструкції чи модернізації промислових об'єктів, виробничих будівель, 
          складів, логістичних центрів.
        </p>

        <p className="mx-auto max-w-3xl text-sm text-muted-foreground md:text-base lg:text-lg leading-relaxed">
          Це включає розрахунки, розміщення обладнання, врахування технологічних, 
          виробничих, екологічних, енергетичних вимог, технічних умов підключення 
          інженерних систем, автоматизації виробничих процесів.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/projects">
              Переглянути проекти
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link href="#contact">
              Зв'язатися з нами
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

