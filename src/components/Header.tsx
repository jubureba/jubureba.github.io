import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { LanguageToggle, ThemeToggle } from './Controls'

const sections = ['about', 'stack', 'experience', 'projects', 'contact'] as const

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-ink/80'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-bold">
          <span className="text-gradient">&lt;AL/&gt;</span>
          <span className="hidden text-slate-500 group-hover:text-accent-deep dark:text-slate-400 dark:group-hover:text-accent sm:inline">
            anderson.dev
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                active === id
                  ? 'text-accent-deep dark:text-accent'
                  : 'text-slate-600 hover:text-ink dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 dark:border-white/10 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200/70 bg-white/95 px-5 py-3 backdrop-blur dark:border-white/10 dark:bg-ink/95 md:hidden">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
