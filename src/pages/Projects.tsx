import ProjectCard from "../components/ProjectCard"
import { PROJECTS } from "../data/projects"

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-5 animate-fade-up">
        <p className="text-md font-semibold text-blue-500">My Work</p>
        <h3 className="mt-3 text-4xl font-bold text-slate-900">Projects</h3>
        <p className="mt-1 max-w-2xl text-lg text-slate-600">
          Some projects I've built and worked on, including personal and
          production sites built for real clients
        </p>
      </div>
      <div className="animate-fade-up animation-delay-150">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.title}
            index={index}
            {...project}
          />
        ))}
      </div>
    </main>
  )
}
