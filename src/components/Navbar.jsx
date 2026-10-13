import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data.js'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'border-b border-white/10 bg-[#0b0f1a]/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 font-display text-sm font-bold text-white">
            AK
          </span>
          <span className="font-display text-lg font-semibold text-white">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <a
              href={profile.resume}
              download
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Résumé
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-slate-200 transition hover:bg-white/5"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0f1a]/95 px-5 pb-5 pt-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
