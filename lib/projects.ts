import type { Project } from "@/types";
import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "data/projects");

/**
 * Helper to resolve image paths
 */
function resolveImagePaths(project: Project, projectId: string): Project {
  const baseUrl = `/api/projects/${projectId}`;
  
  return {
    ...project,
    thumbnail: project.thumbnail.startsWith('http') || project.thumbnail.startsWith('/') 
      ? project.thumbnail 
      : `${baseUrl}/${project.thumbnail}`,
    images: project.images.map(img => 
      img.startsWith('http') || img.startsWith('/') ? img : `${baseUrl}/${img}`
    ),
  };
}

/**
 * Get all projects from data directory
 */
export async function getAllProjects(): Promise<Project[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const projectFolders = fs.readdirSync(projectsDirectory);
    const projects: Project[] = [];

    for (const folder of projectFolders) {
      const manifestPath = path.join(projectsDirectory, folder, "manifest.json");
      
      if (fs.existsSync(manifestPath)) {
        const fileContents = fs.readFileSync(manifestPath, "utf8");
        const project = JSON.parse(fileContents) as Project;
        const projectWithPaths = resolveImagePaths(project, folder);
        projects.push(projectWithPaths);
      }
    }

    return projects;
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.featured);
}

/**
 * Get single project by ID
 */
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const manifestPath = path.join(projectsDirectory, id, "manifest.json");
    
    if (!fs.existsSync(manifestPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(manifestPath, "utf8");
    const project = JSON.parse(fileContents) as Project;
    return resolveImagePaths(project, id);
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.category === category);
}

