import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const DescriptionComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "I build web applications",
        1000,
        "I develop full-stack applications",
        1000,
        "I enjoy turning ideas into real projects",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-2xl"
      repeat={Infinity}
    />
  );
};

export default function Home() {
  return (
    <main>
      <section className="py-4 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-4 text-xl">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <div className="py-3 mb-2">
              <h1 className="font-bold text-4xl leading-tight tracking-tight text-slate-900 md:text-5xl">Edbert Clarence Angwyn</h1>
              <DescriptionComponent />
              <h2 className="text-slate-500">Software Engineer · Web Developer</h2>
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

          <div className="flex justify-center animate-fade-up animation-delay-150">
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-blue-50">
              <img 
                src="personal/developer.jpeg" 
                alt="Developer" 
                className="rounded-3xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}