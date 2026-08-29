import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export function Hero() {
  const { t, language } = useLanguage()
  const typed = useTypewriter(t.hero.roles)

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl dark:bg-accent/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.status}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="block text-slate-500 dark:text-slate-400 text-xl font-semibold sm:text-2xl">
              {t.hero.greeting}
            </span>
            <span className="text-gradient animate-gradient-pan">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-mono text-lg text-slate-700 dark:text-slate-300 sm:text-xl"
          >
            <span className="text-accent-deep dark:text-accent">$</span> {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-blink bg-accent-deep dark:bg-accent" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/30"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent-deep dark:border-white/15 dark:text-slate-200 dark:hover:text-accent"
            >
              {t.hero.ctaContact}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:text-accent-deep dark:text-slate-300 dark:hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:text-accent-deep dark:text-slate-300 dark:hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location[language]}
          </p>
        </div>

        {/* Avatar / code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="absolute inset-0 -z-10 animate-float rounded-3xl bg-gradient-to-tr from-accent/30 to-indigo-400/30 blur-2xl" />
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">developer.java</span>
            </div>
            <div className="overflow-hidden rounded-xl bg-slate-950 p-5 font-mono text-[13px] leading-relaxed">
              <pre className="whitespace-pre-wrap text-slate-300">
<span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span> {'{'}
{'\n  '}<span className="text-purple-400">String</span> name = <span className="text-emerald-400">"Anderson Lima"</span>;
{'\n  '}<span className="text-purple-400">String</span> role = <span className="text-emerald-400">"Software Dev"</span>;
{'\n  '}<span className="text-purple-400">List</span>&lt;<span className="text-purple-400">String</span>&gt; skills =
{'\n    '}<span className="text-sky-400">List</span>.of(<span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">".NET"</span>,
{'\n           '}<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"AWS"</span>);
{'\n'}{'}'}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
