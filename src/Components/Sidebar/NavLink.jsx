"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ href, children }) {
  const Path = usePathname();
  const isActive = Path == href;

  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}
export default NavLink;
