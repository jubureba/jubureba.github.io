import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-bold text-gradient">&lt;AL/&gt;</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
            © {year} {profile.name}. {t.footer.rights}.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-500">{t.footer.built}</p>
      </div>
    </footer>
  )
}
