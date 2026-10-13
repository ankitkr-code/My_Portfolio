import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Projects"
          title="Things I've built"
          sub="Real, working projects — not tutorials. Each one taught me something I carry into the next."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-600/10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                    {p.tag}
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-indigo-400/50 hover:text-white"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{p.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition group-hover:gap-2.5 hover:text-indigo-200"
                    >
                      View live <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition group-hover:gap-2.5 hover:text-indigo-200"
                  >
                    View source code <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
