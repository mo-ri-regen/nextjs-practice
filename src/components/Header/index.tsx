import styles from './Header.module.css'
import Link from 'next/link'

export const Header = () =>{
  return(
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
      <div className={styles.list}>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
        
      </div>
    </div>
  );
}