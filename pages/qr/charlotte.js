import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import qr from '../../public/contact/qr_charlotte.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peak Power Team</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <div className={styles.whiteStripe}>
          <div className={styles.product}>
            
              <div className={`${styles.container} ${styles.person_qr}`}>
              <div className={styles.col}>
                <div className={styles.logo}>
                    <Image 
                      src={qr}
                      priority={true}
                      loading='eager'
                      layout='responsive'
                    />
                </div>
              </div>

              <h1 className={styles.title}>
                Charlotte Wegener
              </h1>
              <h4>vp operations</h4>

              <p className={styles.description}>
                <br/>
                <a href="tel:+49 (0) 178 809 27 11">+49 (0) 178 809 27 11</a>
                <br/>
                <a href="mailto:charlotte.wegener@peakpower.io">charlotte.wegener@peakpower.io</a>
              </p>

            </div>
          </div>
      </div>
      <div className={styles.blackStripe}>
        <p className={styles.footer}>
        <a href="https://www.linkedin.com/in/charlottewegener">linkedin</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="#">vcard</a>
        <span>&nbsp;|&nbsp;</span>
        <Link href="/qr/timo">
        <a>qr</a>
        </Link>
        </p>
      </div>

    </main>
    </div>

  )
}

