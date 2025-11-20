import Image from 'next/image'
import type { Project } from '@/types'
import { PROJECT_CATEGORY_LABELS } from '@/constants/site'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-background">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized={project.thumbnail.startsWith('http')}
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            {PROJECT_CATEGORY_LABELS[project.category] ||
              project.category}
          </span>
          {project.year && (
            <span className="font-medium">
              • {project.year}
            </span>
          )}
        </div>
        <h3 className="font-bold text-xl md:text-2xl text-primary leading-tight">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-3">
          {project.area && (
            <span className="text-base md:text-lg font-bold text-primary">
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
