import Image from 'next/image'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

const categoryLabels: Record<string, string> = {
  warehouse: 'Склад',
  production: 'Виробництво',
  logistics: 'Логістика',
  metalworking: 'Металообробка',
  'grain-processing': 'Переробка зерна',
  'transport-service': 'Транспортне обслуговування',
  other: 'Інше',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg bg-background transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          unoptimized={project.thumbnail.startsWith('http')}
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            {categoryLabels[project.category] ||
              project.category}
          </span>
          {project.year && (
            <span className="font-medium">
              • {project.year}
            </span>
          )}
        </div>
        <h3 className="font-bold text-xl md:text-2xl text-charcoal leading-tight">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-3">
          {project.area && (
            <span className="text-base md:text-lg font-bold text-charcoal">
              {project.area}
            </span>
          )}
          {project.location && (
            <span className="text-sm text-text-muted">
              {project.location}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
