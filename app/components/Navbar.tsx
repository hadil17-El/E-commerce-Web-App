"use client";
import Link from "next/link";

import styles from "./Navbar.module.css";
import {FaBars, FaTimes, FaShoppingCart, FaUser, FaSearch} from "react-icons/fa";
import React, { useState } from "react";
export const Navbar: React.FC  = () => {

   const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

    const currencies = ["USD", "EUR", "GBP"];
   
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                  {/*<img src="/skin.png"className={styles.skin} alt=" " />*/}
                  HERBIVORE
                </div>
                <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/shop">SHOP</a>
                    </li>
                    <li>
                        <a href="/bestellers">BESTELLERS</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT US</a>
                    </li>
                </ul>
                
        {/* Right Icons */}
        <div className={styles.icons}>
            
                <Link href="/account">
                     <span className= {styles.account}><FaUser /></span>
                
                </Link>
                 <span className={styles.ricerca}><FaSearch /></span>
                 <Link href="/cart">
                 <span className={styles.cart}><FaShoppingCart /></span>
                 </Link>

        </div>
        {/**Mobile menu button */}
                <button
                 className={styles.menutoggle} onClick={() =>setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                     {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    )
}