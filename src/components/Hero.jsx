import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data.js'

const stats = [
  { value: '3', label: 'Internships completed' },
  { value: '8+', label: 'Responsive pages shipped' },
  { value: '4', label: 'Full-stack projects' },
]

export default function Hero() {
  return (
    <section id="top" className="bg-dots relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {profile.availability}
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            {profile.name}
            <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {profile.title}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              View Projects <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={16} /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm transition hover:text-white">
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm transition hover:text-white">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-sm transition hover:text-white">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-3 gap-4 sm:max-w-xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-display text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
