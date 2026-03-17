"use client"
import { useState } from "react"
import {Menu, X } from "lucide-react"
import styles from "./letter-nav.module.css"
import Link from "next/link"

interface LetterNavProps {
  letters: string[]
}

export function LetterNav({ letters }: LetterNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <nav className={styles.sidebar}>
          <h3 className={styles.indexTitle}>Index</h3>
          {letters.map((letter) => (
            <Link
              key={letter}
              href={`#letter-${letter}`}
              className={styles.letterLink}
              onClick={() => setOpen(false)}
            >
              {letter}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}