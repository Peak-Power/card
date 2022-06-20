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
                Luis del Rio Francos
              </h1>
              <h4>co-founder</h4>

              <p className={styles.description}>
                
                <br/>
                <a href="tel:+49 (0) 157 925 989 60">+49 (0) 157 925 989 60</a>
                <br/>
                <a href="tel:+33 767 96 02 49">+33 767 96 02 49</a>
                <br/>
                <a href="mailto:luis@peakpower.io">luis@peakpower.io</a>
              </p>

            </div>
          </div>
      </div>
      <div className={styles.blackStripe}>
        <p className={styles.footer}>
        <a href="https://www.linkedin.com/in/luis-del-rio-francos/">linkedin</a>
        <span>&nbsp;|&nbsp;</span>
        <Link href="/contact/luis.vcf">
        <a>vcard</a>
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link href="/qr/luis">
        <a>qr</a>
        </Link>
        </p>
      </div>

    </main>
    </div>
  )
}

