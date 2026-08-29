import { useLanguage } from '../context/LanguageContext'
import { Reveal, SectionHeading } from '../components/Reveal'

export function Stack() {
  const { t } = useLanguage()

  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-slate-200/70 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.stack.kicker} title={t.stack.title} />
        <Reveal>
          <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
            {t.stack.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.stack.groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-deep dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
