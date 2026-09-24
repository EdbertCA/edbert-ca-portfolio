import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Teaching Samples",
    description:
      "An AI-assisted teaching platform that helps educators create structured lesson plans from selected text and language features.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "Docker",
    ],
    image: "projects/teaching_sample.webp",
    github: "https://github.com/unsw-cse-comp99-3900/capstone-project-26t2-3900-h09a-cherry",
  },
  {
    title: "RoamSphere",
    description:
      "A full-stack destination discovery platform where users can explore, create listings, leave reviews, and save their favourite places.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Bootstrap",
    ],
    image: "projects/roamsphere.png",
    github: "https://github.com/EdbertCA/roamsphere",
    demo: "https://roamsphere-cznu.onrender.com/",
  },
  {
    title: "AirBrB",
    description:
      "An Airbnb-inspired single-page application developed in a two-person team using React. The application supports creating, editing, publishing, and managing accommodation listings, with component and UI tests covering major user workflows.",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
    ],
    image: "projects/airbrb.webp",
    github: "https://nw-syd-gitlab.cseunsw.tech/COMP6080/25T3/groups/SHINYJOY/airbrb",
  },
]

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
        {projects.map((project, index) => (
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
