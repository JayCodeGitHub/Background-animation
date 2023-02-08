import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-white">
      <ul className="flex gap-8 p-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
