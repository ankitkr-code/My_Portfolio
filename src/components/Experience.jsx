import { ArrowUpRight, Briefcase, CalendarDays, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Experience"
          title="Where I've worked"
        />
        <div className="relative mt-12">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-indigo-500/60 via-white/10 to-transparent sm:left-[8px]" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <div className="relative pl-10">
                  <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center">
                    <span className="h-3 w-3 rounded-full border-2 border-indigo-400 bg-[#0b0f1a]" />
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{e.role}</h3>
                        <p className="mt-1 inline-flex items-center gap-1.5 font-medium text-indigo-300">
                          <Briefcase size={15} /> {e.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} /> {e.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} /> {e.location}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2.5 text-slate-300">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {e.certificate && (
                      <a
                        href={e.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
                      >
                        View certificate <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
