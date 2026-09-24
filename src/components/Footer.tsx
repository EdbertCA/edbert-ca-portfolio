import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-3 border-t border-slate-200">
      <div className="mx-auto flex gap-3 flex-col sm:flex-row max-w-7xl items-center justify-between px-8 py-6">
        <p className="text-slate-400 tracking-tight font-medium">Made by Edbert C Angwyn</p>
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/EdbertCA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700 transition-transform duration-250 hover:-translate-y-0.5"
          >
            <FaGithub className="h-6 w-6"/>
          </a>
          <a
            href="https://www.linkedin.com/in/edbert-clarence-angwyn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700 transition-transform duration-250 hover:-translate-y-0.5"
          >
            <FaLinkedin className="h-6 w-6"/>
          </a>
          <a 
            href="mailto:edbert.ca05@gmail.com"
            className="text-slate-500 hover:text-blue-700 transition-transform duration-250 hover:-translate-y-0.5"
          >
            <Mail className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </footer>
  )
}