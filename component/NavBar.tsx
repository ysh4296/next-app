import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar: NextPage = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? "active" : "",
          ].join(" ")}
        >
          About Us
        </a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
