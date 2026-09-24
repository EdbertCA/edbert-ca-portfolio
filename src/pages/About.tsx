import SkillsSection from "../components/about/SkillSection";
import BeyondCoding from "../components/about/BeyondCoding";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="flex items-center">
        <img 
          src="personal/Edbert_GC.jpeg" 
          alt="Edbert C Angwyn" 
          className="shrink-0 w-40 h-40 rounded-full border-4 border-blue-300 object-cover p-1"
        />
        <div className="pl-7">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">ABOUT</p>
          <h1 className="text-4xl font-bold md:text-5xl">Hi, I'm Edbert.</h1>
        </div>
      </section>
      <section className="mt-8 space-y-6 text-xl leading-8 text-slate-600">
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
          src="personal/Edbert_UNSW.jpeg" 
          alt="Edbert C Angwyn" 
          className="shrink-0 w-40 h-40 md:w-45 md:h-45 rounded-full object-cover p-1 ml-3"
        />
      </section>

      <SkillsSection />

      <BeyondCoding />
    </main>
  )
}
