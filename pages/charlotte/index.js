import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import logo from '../../public/logo.png'

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

            <div className={`${styles.container} ${styles.person}`}>
              <h1 className={styles.title}>
                Charlotte Wegener
              </h1>
              <h4>vp operations</h4>

              <p className={styles.description}>
                
                <br/>
                <a href="tel:+49 (0) 179 1493447">+49 (0) 179 1493447</a>
                <br/>
                <a href="mailto:charlotte.wegener@peakpower.io">charlotte.wegener@peakpower.io</a>
              </p>

            </div>
          </div>
      </div>
      <div className={styles.blackStripe}>
        <p className={styles.footer}>
        <a href="https://www.linkedin.com/in/charlottewegener/">linkedin</a>
        <span>&nbsp;|&nbsp;</span>
        <Link href="/contact/charlotte.vcf">
        <a>vcard</a>
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link href="/qr/charlotte">
        <a>qr</a>
        </Link>
        </p>
      </div>

    </main>
    </div>
  )
}

