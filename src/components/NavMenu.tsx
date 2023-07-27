// components/Menu.js

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "styled-components";
// import styles from './Menu.module.css';

const NavMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const linkStyle = {
    color: theme.colors.text,
  };

  return (
    <div
      className="absolute right-0 top-0 z-50 flex h-full w-1/2 p-4"
      style={
        !open ? { background: "none" } : { background: theme.colors.background }
      }
    >
      <button onClick={handleOpen} className="">
        {open ? (
          <Image
            src="/svg/close.svg" // Just an example, replace with your close button image
            alt="Close menu"
            width={30}
            height={25}
            style={{ background: "none", position: "relative" }}
          />
        ) : (
          <Image
            src="/svg/hamburger.svg"
            alt="menu button"
            width={40}
            height={25}
            style={{ background: "none", position: "relative" }}
          />
        )}
      </button>

      {open && (
        <nav style={{ color: theme.colors.background }}>
          <ul>
            <li>
              <Link href="/dev" style={linkStyle}>
                Dev
              </Link>
            </li>
            <li>
              <Link href="/design" style={linkStyle}>
                Design
              </Link>
            </li>
            <li>
              <Link href="/art" style={linkStyle}>
                Art
              </Link>
            </li>
            <li>
              <Link href="/music" style={linkStyle}>
                Music
              </Link>
            </li>
            <li>
              <Link href="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" style={linkStyle}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" style={linkStyle}>
                Amaryllis
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMenu;
