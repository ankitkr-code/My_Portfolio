import Reveal from './Reveal.jsx'

export default function SectionHeading({ kicker, title, sub }) {
  return (
    <Reveal>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-slate-400">{sub}</p>}
    </Reveal>
  )
}
