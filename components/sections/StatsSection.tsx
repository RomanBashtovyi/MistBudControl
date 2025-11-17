import { COMPANY_STATS } from "@/constants/site";

export function StatsSection() {
  const stats = [
    {
      value: COMPANY_STATS.projects,
      label: "реалізованих проектів",
    },
    {
      value: COMPANY_STATS.clients,
      label: "задоволених клієнтів",
    },
    {
      value: COMPANY_STATS.area,
      label: "м.кв. запроектованих площ",
    },
    {
      value: COMPANY_STATS.recommendations,
      label: "наші клієнти нас рекомендують",
    },
  ];

  return (
    <section className="border-y bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
          Досвід і результати
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2 md:space-y-3">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

