import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/BI.svg";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-5 px-10 bg-cyan-900">
      <Image src={Logo} width={60} height={60} alt="" />
      <nav className="flex gap-2 text-emerald-500 ">
        <Link
          href="https://www.linkedin.com"
          className="hover:text-emerald-300 transition-all"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href="../../contato"
          className="hover:text-emerald-300 transition-all"
        >
          Portfólio
        </Link>
        <Link href="/" className="hover:text-emerald-300 transition-all">
          Contato
        </Link>
      </nav>
    </header>
  );
}
