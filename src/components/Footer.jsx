import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 font-display text-xs font-bold text-white">
            AK
          </span>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white">
            <Mail size={18} />
          </a>
          <a href="#top" aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-indigo-400/50 hover:text-white">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
