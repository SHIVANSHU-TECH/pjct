"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import menu from "public/menu.png";
import { AiOutlineMenu } from 'react-icons/ai';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "notes",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Events",
    url: "/events",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "opportunities",
    url: "/internships",
  },
];

const Navbar = () => {
  const session = useSession();
  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        IPSC
      </Link>
      <DarkModeToggle />
      <div className={menuOpen ? "open": " "}>
      <div className={styles.links}>
        
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
        
      </div>
     </div>
      < AiOutlineMenu  className={styles.menu} onClick={()=>{
        setMenuOpen(!menuOpen);
      }
      } />
    </div>
  );
};

export default Navbar;