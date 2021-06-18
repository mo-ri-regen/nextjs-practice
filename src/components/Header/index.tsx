import styles from "./Header.module.css";
import Link from "next/link";

export const Header = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Learn Next.js!</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </p>
      <div className={styles.list}>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={"/jsonserver"}>
            <a>jsonserver</a>
          </Link>
        </li>
        <li>
          <Link href={"/signin"}>
            <a>signin</a>
          </Link>
        </li>
      </div>
    </div>
  );
};
