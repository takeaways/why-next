import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
