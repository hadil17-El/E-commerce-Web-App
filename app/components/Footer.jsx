import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

 const Footer = () => {
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>HERBIVORE</h2>
                    <p className={styles.tagline}>PLANT powered, clinically effective</p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div>
                        <h3 className={styles.heading}>SHOP</h3>
                        <ul>
                            <li><a href="#">Shop All</a></li>
                             <li><a href="#">Bestsellers</a></li>
                              <li><a href="#">Skincare</a></li>
                               <li><a href="#">Bath + Body</a></li>
                                <li><a href="#">Sets + Bundles</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.heading}>ABOUT </h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog: Naturally Speaking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>CUSTOMER SERVICE</h3>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Affiliates</a></li>

                        </ul>
                        </div>

                        <div>
                            <h3 className={styles.heading}>ACCOUNT</h3>
                            <ul>
                                <li><a href="/account">My Account</a></li>
                            </ul>
                        </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© 2025 HERBIVORE BOTANICALS, LLC. ALL RIGHTS RESERVED.</p>
                <div className={styles.links}>
                    <a href="#">PRIVACY POLICY</a>
                    <span>.</span>
                    <a href="#">TERMS OF SERVICE</a>
                    <span>.</span>
                    <a href="#">ACCESSIBILITY</a>
                </div>
            </div>

        </footer>
        
        </>
    )
}
export  default  Footer;