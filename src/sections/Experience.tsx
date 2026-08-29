import { useLanguage } from '../context/LanguageContext'
import { Reveal, SectionHeading } from '../components/Reveal'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 hidden h-full w-px bg-gradient-to-b from-accent via-slate-300 to-transparent dark:via-white/10 sm:block" />

        <div className="space-y-10">
          {t.experience.items.map((item, i) => (
            <Reveal key={`${item.company}-${i}`} delay={i * 0.05}>
              <article className="relative sm:pl-12">
                <span className="absolute left-1.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-white dark:bg-ink sm:block" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">
                    {item.role}{' '}
                    <span className="font-medium text-accent-deep dark:text-accent">
                      @ {item.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-500">
                  {item.location}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education */}
      <Reveal className="mt-16">
        <h3 className="mb-5 font-mono text-sm font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
          {t.experience.educationTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.experience.education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-xl border border-slate-200 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-semibold">{ed.degree}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {ed.school} · {ed.period}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
