import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<string, string> = {
  warehouse: "Склад",
  production: "Виробництво",
  logistics: "Логістика",
  metalworking: "Металообробка",
  "grain-processing": "Переробка зерна",
  "transport-service": "Транспортне обслуговування",
  other: "Інше",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized={project.thumbnail.startsWith('http')}
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded-full bg-muted">
            {categoryLabels[project.category] || project.category}
          </span>
          {project.year && <span>• {project.year}</span>}
        </div>
        <h3 className="font-semibold text-lg line-clamp-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          {project.area && (
            <span className="text-sm font-medium">{project.area}</span>
          )}
          {project.location && (
            <span className="text-xs text-muted-foreground">
              {project.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

