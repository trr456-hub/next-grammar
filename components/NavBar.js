/**기존 a태그 href 방식은 사라지고 Link 를 임포트하여 라우팅을 처리해야함 */
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./NavBar.module.css";

export default function navBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        className={`${style.link} ${
          router.pathname === "/" ? style.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${style.link} ${
          router.pathname === "/about" ? style.active : ""
        }`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
