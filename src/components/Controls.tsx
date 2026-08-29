import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-accent hover:text-accent-deep dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-accent"
    >
      {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-slate-200 bg-white/70 p-0.5 text-xs font-semibold dark:border-white/10 dark:bg-white/5"
    >
      {(['pt', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            language === lang
              ? 'bg-accent text-ink'
              : 'text-slate-500 hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
