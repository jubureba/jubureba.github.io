import { useEffect, useState } from 'react'

/**
 * Rotating typewriter effect: types a phrase, pauses, deletes, moves on.
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {},
) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const current = words[index % words.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  // Reset when the word list changes (e.g. language switch)
  useEffect(() => {
    setText('')
    setIndex(0)
    setDeleting(false)
  }, [words])

  return text
}
