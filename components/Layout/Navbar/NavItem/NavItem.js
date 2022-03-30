import Link from "next/link";

const NavItem = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={`relative flex md:lp-navbar__a font-Titillium-Web font-semibold text-[#033A39] text-[1.5rem]`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
