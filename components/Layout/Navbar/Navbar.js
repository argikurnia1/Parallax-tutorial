import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  const [parallax, setParallax] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setParallax(true);
      } else {
        setParallax(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] bg-[#F2FDFA]  ${
        parallax ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto flex flex-row-reverse md:flex-row justify-between items-center py-[1rem] md:py-[1.5rem] padding-responsive__horizontal">
        {/* Logo */}
        <div className="flex text-[1.5rem] md:text-[3rem]">
          <Link href="#">
            <a>Logo</a>
          </Link>
        </div>
        <ul className="flex">
          <ul className="hidden md:flex gap-[2rem]">
            <NavItem href="#about-us">About Us</NavItem>
            <NavItem href="#clients">Clients</NavItem>
            <NavItem href="#products">Products</NavItem>
            <NavItem href="#contact-us">Contact Us</NavItem>
          </ul>
          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden cursor-pointer">
            <Image
              src="/navbar/icon/hamburger.svg"
              width={40}
              height={40}
              alt="hamburger"
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
