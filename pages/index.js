import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'

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
            
            <div className={styles.container}>
              <div className={styles.col}>
                <div className={styles.logo}>
                    <Image 
                      src={logo}
                      priority={true}
                      loading='eager'
                    />
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <h1 className={styles.title}>
                Contact us:
              </h1>
              <br/>

              <p className={styles.description}>
                <a href="mailto:info@peakpower.io">info@peakpower.io</a>
              </p>
            </div>
          </div>
      </div>
    </main>
    </div>

  )
}
