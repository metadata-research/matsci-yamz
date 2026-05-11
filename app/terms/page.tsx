import type { Metadata } from "next"
export const metadata: Metadata = { title: "Browse Terms | MatSci YAMZ" }
import { db, definitionsTable, termsTable } from "@yamz/db"
import { asc, eq, sql } from "drizzle-orm"
import Link from "next/link"
import styles from "./terms.module.css"
import { LetterNav } from "@/components/letter-nav"


export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const terms = await db
    .select({
      term: termsTable.term,
      id: termsTable.id,
      count: sql<number>`cast(count(*) as int)`
    })
    .from(definitionsTable)
    .leftJoin(termsTable, eq(termsTable.id, definitionsTable.termId))
    .where(q ? sql`${termsTable.term} ilike ${'%' + q + '%'}` : undefined)
    .orderBy(asc(termsTable.term))
    .groupBy(termsTable.term, termsTable.id)

  // Group terms by first character
  const groups: Record<string, typeof terms> = {}
  for (const t of terms) {
    const firstChar = t.term?.[0]?.toUpperCase() || "#"
    const key = /[A-Z]/.test(firstChar) ? firstChar : "#"
    if (!groups[key]) groups[key] = []
    groups[key].push(t)
  }

  // Sort groups: # first, then A-Z
  const sorted = Object.entries(groups).sort(([a], [b]) => {
    if (a === "#") return -1
    if (b === "#") return 1
    return a.localeCompare(b)
  })

  return (
    <main className={styles.page}>
      <LetterNav letters={sorted.map(([letter]) => letter)} />
      <h1 className={styles.heading}>Browse Terms</h1>
      <div className={styles.sections}>
        {sorted.map(([letter, items]) => (
          <section key={letter} id={`letter-${letter}`} className={styles.letterGroup}>
            <h2 className={styles.letterHeader}>{letter}</h2>
            <div className={styles.cardGrid}>
              {items.map(({ term, count, id }) => (
                <Link key={id} href={`/terms/${id}`} className={styles.card}>
                  {term} - {count}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}