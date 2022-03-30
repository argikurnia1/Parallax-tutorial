import Link from "next/link";

const NavItem = ({ children, href, fontSize, textColor, onClose }) => {
  return (
    <li>
      <Link href={href}>
        <a
          onClick={onClose}
          className={`relative flex md:lp-navbar__a font-Titillium-Web font-semibold ${textColor} ${fontSize}`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
