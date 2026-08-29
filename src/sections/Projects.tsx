import { useLanguage } from '../context/LanguageContext'
import { Reveal, SectionHeading } from '../components/Reveal'
import { ArrowUpRightIcon, CodeIcon, GithubIcon } from '../components/icons'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-slate-200/70 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} />
        <Reveal>
          <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
            {t.projects.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 dark:border-white/10 dark:bg-white/5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-deep dark:text-accent">
                    <CodeIcon className="h-5 w-5" />
                  </span>
                  <div className="flex items-center gap-1">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} — ${t.projects.viewCode}`}
                      className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-accent-deep dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-accent"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} — ${t.projects.viewLive}`}
                        className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-accent-deep dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-accent"
                      >
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-mono text-lg font-bold text-ink transition group-hover:text-accent-deep dark:text-white dark:group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
