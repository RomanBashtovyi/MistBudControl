import { SPECIALIZATIONS } from "@/constants/site";

export function SpecializationsSection() {
  return (
    <section className="border-y bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
          Ми зробили найбільше
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SPECIALIZATIONS.map((specialization, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-5 md:p-6 space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-base md:text-lg leading-snug">
                  {specialization.title}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">
                  {specialization.percentage}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                {specialization.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

