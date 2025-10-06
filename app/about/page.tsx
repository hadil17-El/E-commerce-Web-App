"use client";
import styles from "./About.module.css";
import Image from "next/image";

const AboutUs = () => {
    return (
        <>
        <section className={styles.about}>
            <div className={styles.overlay}>
                <h2>About Us</h2>
                <p>
                    At <strong>HERBIVORE</strong>, we believe in the power of plants to transform your skin.Our products are 100% vegan, cruelty-free, and clinically proven to deliver visible results while respecting the planet
                </p>
                <p>
                    Founded with a mission to combine nature and science,we create skincare that is safe, effective, and environmentally conscious.
                </p>
                <button className={styles.btn}>Explore Our Shop</button>
            </div>
    
        </section>
        </>
    )
}
export default AboutUs;