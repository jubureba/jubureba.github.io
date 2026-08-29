import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 text-center dark:border-white/10 dark:from-white/[0.04] dark:to-transparent sm:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent-deep dark:text-accent">
            {t.contact.kicker}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/30"
            >
              <LinkedinIcon className="h-4 w-4" />
              {t.contact.cta}
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent-deep dark:border-white/15 dark:text-slate-200 dark:hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
