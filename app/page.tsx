import { SearchSection } from "./search-section"
import { HydrateClient, trpc } from "@/trpc/server"
import Link from "next/link"
import { OAuthURL } from "@/lib/apis/google"
import { Icon } from "@iconify/react"
import styles from "./mycss.module.css"

export default async function Home() {
  await trpc.search.definitions.prefetch({ query: "", limit: 4 })

  return (
    <HydrateClient>
      <main>
        {/* Welcome Banner */}
        <section className={styles.welcomeBanner}>
          <h1 className={styles.welcomeHeading}>Welcome to the MatSci YAMZ</h1>
          <p className={styles.welcomeText}>
            The collaborative dictionary for materials science metadata.
            Designed for researchers and professionals, YAMZ provides a shared
            space to define, discuss, and refine key terms used across the
            materials science community. By contributing definitions, commenting,
            and voting, you help build a living, community-driven vocabulary that
            promotes clarity, interoperability, and shared understanding in
            materials research.
          </p>
        </section>

        {/* Get Started Banner */}
        <section className={styles.getStartedBanner}>
          <div className={styles.getStartedContent}>
            <h2 className={styles.getStartedHeading}>Get Started</h2>
            <p className={styles.getStartedText}>
              Ready to explore the language of materials science? Use the search
              bar to discover terms, browse definitions, and see how the
              community describes key concepts in materials metadata. You can
              also contribute by refining existing entries or adding new terms to
              expand the shared vocabulary.
            </p>
            <Link href={OAuthURL}>
              <button className={styles.loginButton}>Login</button>
            </Link>
          </div>
          <div className={styles.getStartedSearch}>
            <SearchSection hideResults />
          </div>
        </section>

        {/* Cards Section */}

        {/* Card 1 - Contribute */}
        <section className={styles.cardsSection}>
          <Link href="/add" className={`${styles.card} ${styles.cardShadowLeft}`}>
           <span className={styles.cardIconBlue}>
            <Icon icon="lets-icons:upload" width={60} height={60}/>
            </span>
            <div className={styles.cardTitle}>Contribute a Definition</div>
            <p className={styles.cardDescription}>
              Explore the growing dictionary of materials science metadata:
              <br /><br />
              Search for definitions across materials, properties, and processes.
              <br /><br />
              See how experts describe and organize key scientific concepts.
              <br /><br />
              Compare community contributions and discover related terms.
              <br /><br />
              Learn from real-world examples and evolving terminology in the field.
            </p>
          </Link>
          
          {/* Card 2 - View All Terms */}
          <Link href="/terms" className={`${styles.card} ${styles.cardShadowCenter}`}>
          <span className={styles.cardIconDark}>
            <Icon icon="ri:book-fill" width={60} height={60}/>
           </span> 
            <div className={styles.cardTitle}>View All Terms</div>
            <p className={styles.cardDescription}>
              Explore the growing dictionary of materials science metadata:
              <br /><br />
              Search for definitions across materials, properties, and processes.
              <br /><br />
              See how experts describe and organize key scientific concepts.
              <br />
              Compare community contributions and discover related terms.
              <br /><br />
              Learn from real-world examples and evolving terminology in the field.
              <br /><br />
              Engage with the community by critiquing definitions, appraising or
              debating terms, and contributing to consensus on materials science
              metadata.
            </p>
          </Link>
           
          {/* Card 3 - Join the Discussion */} 
          <Link href="/terms" className={`${styles.card} ${styles.cardShadowRight}`}>
            <span className={styles.cardIconGreen}>
            <Icon icon="tdesign:cooperate-filled" width={51} height={51}/>
            </span>
            <div className={styles.cardTitle}>Join the Discussion</div>
            <p className={styles.cardDescription}>
              Support the growth of the materials science metadata community by:
              <br /><br />
              Reviewing and critiquing existing definitions for clarity and precision.
              <br /><br />
              Appraising and discussing differing viewpoints to strengthen shared understanding.
              <br /><br />
              Providing references or datasets that enrich term accuracy and context.
              <br /><br />
              Collaborating toward consensus to advance standardization in materials science metadata.
            </p>
          </Link>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutInner}>

            {/* Intro */}
            <span className={styles.aboutEyebrow}>About Us</span>
            <h2 className={styles.aboutWhoHeading}>Who We Are</h2>
            <p className={styles.aboutBody}>
              MatSci YAMZ is a community-driven initiative from Drexel University&apos;s Metadata
              Research Center that standardizes the complex language of materials science to
              accelerate global discovery. By integrating expert crowdsourcing with human-in-the-loop
              AI, the platform provides a collaborative &ldquo;Metadata Zoo&rdquo; where researchers define,
              discuss, and vote on terminology in real time. This ensures that scientific data adheres
              to FAIR principles — making it Findable, Accessible, Interoperable, and Reusable for
              both human researchers and machine-learning applications.
            </p>

            <hr className={styles.aboutDivider} />

            {/* Mission Statement */}
            <h3 className={styles.aboutSubheading}>Mission Statement</h3>
            <p className={styles.aboutBody}>
              The mission of MatSci-YAMZ is to strengthen the semantic infrastructure across
              materials science by providing a collaborative, AI-supported space for defining and
              refining disciplinary terminology. The MatSci-YAMZ hybrid model integrates
              crowdsourcing and human-in-the-loop AI, and enables researchers to collaboratively
              build and vote on persistent controlled vocabulary terms. MatSci-YAMZ supports
              semantic transparency and advances metadata standards development, interdisciplinary
              communication, and AI-ready research.
            </p>

            <hr className={styles.aboutDivider} />

            {/* Team */}
            <h3 className={styles.aboutSubheading}>Our Team</h3>
            <div className={styles.aboutPerson}>
              <img src="https://drexel.edu/~/media/Images/cci/Faculty/Greenberg_Small.ashx?h=188&w=124&hash=0D28C7AE5AE230487F8321021C6263F290601CA5" alt="Jane Greenberg" className={styles.aboutPhoto} />
              <p className={styles.aboutBody}>
                Jane Greenberg is the Alice B. Kroeger Professor and Director of the{" "}
                <Link href="https://drexel.edu/cci/research/metadata-research-center/" className={styles.aboutLink}>
                  Metadata Research Center
                </Link>{" "}
                at the College of Computing &amp; Informatics, Drexel University. Her research
                activities focus on metadata, knowledge organization/semantics, linked data, data
                science, and information economics. She serves on the advisory board of the Dublin
                Core Metadata Initiative (DCMI) and the steering committee for the NSF Northeast
                Big Data Innovation Hub (NEBDIH).
              </p>
            </div>

            <div className={styles.aboutPersonReverse}>
              <p className={styles.aboutBody}>
                Robert Sammarco and Jane Greenberg presented &ldquo;Human-in-the-Loop and AI: Crowdsourcing
                Metadata Vocabulary for Materials Science&rdquo; at the Metadata and Semantics Research
                Conference held in Thessaloniki, Greece, December 15&ndash;19. They presented findings on a
                recent proof of concept study which investigated the functionality of the{" "}
                <Link href="/terms" className={styles.aboutLink}>MatSci-YAMZ</Link> application.
              </p>
              <img src="https://drexel.edu/~/media/Images/cci/PhDStudents/McClellan_Scott_sitecore.ashx?h=167&w=110&hash=259783F2DD86B998AF4A45E9449D4882B7DE8078" alt="Team member" className={styles.aboutPhoto} />
            </div>

          </div>
        </section>
      </main>
    </HydrateClient>
  )
}