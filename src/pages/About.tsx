const skills = {
  "Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "SQL",
  ],

  "Frontend": [
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
  ],

  "Backend": [
    "Node.js",
    "Express.js",
    "FastAPI",
  ],

  "Databases & Services": [
    "PostgreSQL",
    "MongoDB",
    "Supabase",
  ],

  "Tools": [
    "Git",
    "GitHub",
    "Docker",
    "Jira",
  ],
};

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="flex items-center">
        <img 
          src="Edbert_GC.jpeg" 
          alt="Edbert C Angwyn" 
          className="w-40 h-40 rounded-full border-4 border-blue-300 object-cover p-1"
        />
        <div className="pl-7">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">ABOUT</p>
          <h1 className="text-4xl font-bold md:text-5xl">Hi, I'm Edbert.</h1>
        </div>
      </section>
      <section className="mt-12 space-y-6 text-xl leading-8 text-slate-600">
        <p>
          Hi! I'm Edbert Clarence Angwyn, a software developer and Computer Science
          graduate from the University of New South Wales (UNSW Sydney). I'm
          interested in software engineering and web development, and I
          enjoy turning ideas into practical applications.
        </p>
        <p>
          From personal and group projects, I've worked across different parts 
          of web development, from building interfaces with React and TypeScript
          to integrating APIs, authentication, backend, and databases. I'm also interested
          in exploring AI and related fields in the future.
        </p>
      </section>

      <section className="flex items-center mt-10 border-t border-slate-200 pt-6">
        <div>
          <h2 className="text-3xl font-semibold">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">
              University of New South Wales (UNSW Sydney)
            </h3>
            <p className="mt-1 text-slate-600">
              Bachelor of Science (Computer Science)
            </p>
            <p className="mt-1 text-sm text-slate-500">2023 – 2026</p>
          </div>
        </div>
        <img 
          src="Edbert_UNSW.jpeg" 
          alt="Edbert C Angwyn" 
          className="w-45 h-45 rounded-full object-cover p-1 ml-8"
        />
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-3xl font-semibold">Technical Skills</h2>
        <p className="mt-2 text-lg text-slate-600">
          Technologies and tools I've used in my personal and university projects
        </p>
        <div className="mt-5 space-y-6 grid lg:grid-cols-2">
          {Object.entries(skills).map(([category, technologies]) => (
            <div className="pr-3" key={category}>
              <h3 className="mb-3 text-xl font-semibold">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <li 
                    key={technology}
                    className="rounded-full border border-blue-200 bg-blue-500 px-4 py-2 text-sm text-white"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center mt-8 border-t border-slate-200 pt-10 gap-5">
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-slate-900">
            Beyond Coding
          </h2>

          <p className="mt-3 text-lg leading-8 text-slate-600">
            Outside of development, I enjoy spending my time teaching,
            learning, and relaxing with some of my favourite activities.
          </p>

          <ul className="mt-5 space-y-3 text-slate-600">
            <li>🎵 Listening to music</li>
            <li>📺 Watching YouTube</li>
            <li>🧮 Teaching mathematics</li>
            <li>Hunting food</li>
          </ul>
        </div>
        <div className="flex justify-center w-1/2">
          <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-blue-50">
            <img 
              src="Edbert_Cendol.jpeg" 
              alt="Edbert C Angwyn" 
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
