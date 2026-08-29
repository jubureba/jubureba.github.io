import { useLanguage } from '../context/LanguageContext'
import { Reveal, SectionHeading } from '../components/Reveal'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading kicker={t.about.kicker} title={t.about.title} />

      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {t.about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white/60 p-5 transition hover:border-accent hover:shadow-lg hover:shadow-accent/10 dark:border-white/10 dark:bg-white/5">
                <h3 className="font-semibold text-ink transition group-hover:text-accent-deep dark:text-white dark:group-hover:text-accent">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
