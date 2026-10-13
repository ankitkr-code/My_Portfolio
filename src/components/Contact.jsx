import { useState } from 'react'
import { Check, Copy, Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  const cards = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: GithubIcon, label: 'GitHub', value: 'github.com/ankitkr-code', href: profile.github },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/ankit-kumar-a34117311', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Contact"
          title="Let's work together"
          sub="I'm actively looking for a frontend / junior web / full-stack developer role. The fastest way to reach me is email — I reply within a day."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-white/[0.03] to-cyan-500/10 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Have a role or a project in mind?
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  I'm happy to talk through how I can contribute — from pixel-perfect UI to full-stack
                  features. Send me a message and I'll get back to you quickly.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for you')}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                  >
                    <Send size={17} /> Say hello
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} />}
                    {copied ? 'Copied!' : 'Copy email'}
                  </button>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {cards.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#0b0f1a]/60 p-4 transition hover:border-indigo-500/40 hover:bg-[#0b0f1a]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300">
                        <c.icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-slate-500">{c.label}</span>
                        <span className="block truncate text-sm font-medium text-slate-200">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
