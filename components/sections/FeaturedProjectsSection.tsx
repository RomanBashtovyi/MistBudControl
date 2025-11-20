import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'

export async function FeaturedProjectsSection() {
  const featuredProjects = await getFeaturedProjects()

  if (featuredProjects.length === 0) {
    return null
  }

  return (
    <section className="section-spacing bg-background-secondary">
      <div className="container">
        <div className="space-y-4 md:space-y-6 text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-primary">
              Реалізовані{' '}
            </span>
            <span className="text-primary">об’єкти</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary  mx-auto leading-relaxed">
            Перегляньте приклади наших реалізованих проєктів
            промислових об&apos;єктів
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              Переглянути всі проєкти
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
