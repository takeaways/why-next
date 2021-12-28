import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={router.pathname !== "/about" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          color: white;
        }
        a {
          text-decoration: none;
          color: white;
          padding: 5px;
          font-size: 20px;
          font-weight: 700;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
