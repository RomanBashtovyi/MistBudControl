import { getAllProjects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { ContactSection } from '@/components/sections/ContactSection'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Наші проекти
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Перегляньте приклади наших реалізованих проектів
            промислових об&apos;єктів
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-20 text-muted-foreground">
            <p className="text-sm md:text-base">
              Проекти відсутні. Додайте перший проект у
              data/projects/
            </p>
          </div>
        )}
      </div>

      <ContactSection />
    </div>
  )
}
