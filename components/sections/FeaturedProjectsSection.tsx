import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export async function FeaturedProjectsSection() {
  const featuredProjects = await getFeaturedProjects();

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-3 md:space-y-4 text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Наша реалізація</h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Перегляньте приклади наших реалізованих проектів промислових об'єктів
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
        {featuredProjects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
          <Link href="/projects">
            Переглянути всі проекти
          </Link>
        </Button>
      </div>
    </section>
  );
}

