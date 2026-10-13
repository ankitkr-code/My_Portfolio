import { ArrowUpRight, GraduationCap, Award } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Education & Certifications"
          title="Always learning"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-500/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  {i === 0 ? <GraduationCap size={20} /> : <Award size={20} />}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{e.title}</h3>
                  <p className="mt-1 text-slate-400">{e.org}</p>
                  <p className="mt-1 text-sm text-slate-500">{e.period}</p>
                  {e.certificate && (
                    <a
                      href={e.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
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
    </section>
  )
}
