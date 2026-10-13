import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="About"
          title="A developer who cares about the details"
        />
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                I'm {profile.name}, a Computer Science graduate from Jharkhand University of
                Technology, now based in {profile.location}. I specialize in building responsive,
                polished web interfaces with <span className="text-white font-semibold">React.js</span> and{' '}
                <span className="text-white font-semibold">Tailwind CSS</span>, backed by{' '}
                <span className="text-white font-semibold">Node.js</span> APIs and{' '}
                <span className="text-white font-semibold">Firebase</span> when a project needs a backend.
              </p>
              <p>
                Most recently I interned at VaultOfCode, where I shipped 8+ responsive pages and built a
                Tailwind design system with reusable components. I've also explored the AI side — an AI
                &amp; Data Analytics internship with AICTE, Shell India and Edunet Foundation, plus a
                Generative AI Mastermind certification.
              </p>
              <p>
                Right now I'm looking for my first full-time role as a frontend, junior web or full-stack
                developer — somewhere I can own features, learn fast, and contribute to a team that ships.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-semibold text-white">Quick facts</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  {[
                    ['Based in', profile.location],
                    ['Email', profile.email],
                    ['Phone', profile.phone],
                    ['Degree', 'B.Tech, Computer Science (2022–2026)'],
                    ['Status', profile.availability],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-slate-500">{k}</dt>
                      <dd className="mt-0.5 font-medium text-slate-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
