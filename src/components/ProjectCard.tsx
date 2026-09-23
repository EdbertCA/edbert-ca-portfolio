interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  index: number
}

export default function ProjectCard({title, description, technologies, image, github, demo, index}: ProjectCardProps) {
  const swapped = index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <article className={`flex flex-col max-w-7xl items-center gap-10 px-5 py-8 bg-gray-100 mb-7 rounded-2xl  ${swapped}`}>
      <section className="md:w-1/2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="my-2  text-slate-600">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">{tech}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800">
              GitHub ↗
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800">
              Live Demo ↗
            </a>
          )}
        </div>
      </section>
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 md:w-1/2">
        <img src={image} alt={`${title} screenshot`} className="h-full w-full object-cover"/>
      </div>
    </article>
  )
}