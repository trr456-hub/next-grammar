/**기존 a태그 href 방식은 사라지고 Link 를 임포트하여 라우팅을 처리해야함 */
import Link from "next/link";
import { useRouter } from "next/router";

export default function navBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: brown;
        }
      `}</style>
    </nav>
  );
}
