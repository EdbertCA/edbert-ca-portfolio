import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-4 text-xl">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="py-3 mb-2">
              <h1 className="font-bold text-4xl leading-tight tracking-tight text-slate-900 md:text-5xl">Hi, I am Edbert</h1>
              <h2 className="text-slate-500">Software Engineer· Web Developer</h2>
            </div>

            <p>
              I build modern web applications, using React, TypeScript, Tailwind, Python, and modern web technologies, with experience of frontend development, API integration, and full-stack applications.
            </p>
            <div className="pt-4 flex gap-4">
              <Link to="/projects" className="border bg-blue-500 px-5 py-3 rounded-xl text-white transition hover:bg-blue-600">
                View Projects →
              </Link>
              <Link to="/about" className="rounded-xl border border-slate-300 px-5 py-3  hover:bg-slate-100">
                About Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-blue-50">
              <span className="text-slate-400">
                Your photo
              </span>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}