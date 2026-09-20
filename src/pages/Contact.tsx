import {
  MoveUpRight,
  MailPlus
} from 'lucide-react'

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">Get in Touch</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Let's talk</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        I'm currently interested in software engineering and
        web development opportunities. Feel free to reach me out
        to discuss an opportunity, a project, or simply connect.
      </p>
      <section className="mt-8 flex flex-col gap-12 md:flex-row">
        <form action="" className="flex flex-1 flex-col gap-3">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <label htmlFor="email" className="font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <label htmlFor="message" className="font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="mt-4 w-fit rounded-xl bg-blue-500 px-4 py-2 transition text-white hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold">
            Direct Links
          </h2>
          <p className="mt-2 text-slate-600">
            Want to reach out directly? You can find me here.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a 
                href="mailto:edbert.ca05@gmail.com"
                className="flex items-center gap-1 font-medium text-blue-500 hover:text-blue-700"
              >
                edbert.ca05@gmail.com <MailPlus className="h-4 w-4"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/edbert-clarence-angwyn/"
                target="_blank"
                className="flex items-center gap-1 font-medium text-blue-500 hover:text-blue-700"
              >
                LinkedIn <MoveUpRight className="h-4 w-4"/>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/EdbertCA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium text-blue-500 hover:text-blue-700"
              >
                GitHub <MoveUpRight className="h-4 w-4"/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}
