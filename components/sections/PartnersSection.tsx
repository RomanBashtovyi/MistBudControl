import { PARTNERS } from "@/constants/site";

export function PartnersSection() {
  return (
    <section className="border-t bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
          Наші партнери
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-card rounded-lg border p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center space-y-3 text-center hover:shadow-md transition-shadow"
            >
              {/* Placeholder for partner logo */}
              <div className="w-full h-16 md:h-20 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Logo
              </div>
              <div className="space-y-1 w-full">
                <p className="font-semibold text-xs md:text-sm leading-tight">
                  {partner.name}
                </p>
                {partner.location && (
                  <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2 leading-snug">
                    {partner.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

