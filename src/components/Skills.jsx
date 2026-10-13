import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Skills"
          title="What I work with"
          sub="The stack I use day-to-day — honest and battle-tested on real internships and projects."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-500/40 hover:bg-white/[0.05]">
                <h3 className="font-display text-lg font-semibold text-white">{g.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
