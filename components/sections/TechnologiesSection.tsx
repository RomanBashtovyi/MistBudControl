import { TECHNOLOGIES, BENEFITS } from "@/constants/site";

export function TechnologiesSection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        {/* Technologies */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 leading-tight">
            Сучасні технології автоматизації проектування
          </h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
            Ми вас підтримуємо
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {TECHNOLOGIES.map((tech, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border p-5 md:p-6 text-center space-y-2 md:space-y-3 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-base md:text-lg">{tech.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="border-t pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="space-y-2 md:space-y-3">
                <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

