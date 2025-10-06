"use client";
import styles from "./Bestellers.module.css";
import { useCart }from "@/app/components/CartContext";
import Image from  "next/image";
type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}

const bestellerProducts: Product[] = [
   {
    id: 1,
    name: "LAPIS Balancing Facial Oil",
    price: 88.0,
    image: "/p1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "NOVA Vitamin C + Turmeric Serum",
    price: 48.0,
    image: "/p2.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p3.jpg",
    rating: 4.8,
  },
    {
    id: 4,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p4.jpg",
    rating: 4.8,
  },
    {
    id: 5,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p5.jpg",
    rating: 4.8,
  },
    {
    id: 6,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p6.jpg",
    rating: 4.8,
  },
    {
    id: 7,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p7.jpg",
    rating: 4.8,
  },
    {
    id: 8,
    name: "TREMELLA Hydration Gel Cream",
    price: 58.0,
    image: "/p8.jpg",
    rating: 4.8,
  },
]
function renderStars(rating: number) {
    const stars =  [];
    for(let i= 1; i<= 5; i++) {
        stars.push(<span key={i}>{i <= rating ? "★" : "☆"}</span>)
    }
    return stars;
}
const Bestellers = () => {
    const {addToCart} = useCart();
    return (
        <>
        <section className={styles.bestellers}>
            <h2 className={styles.title}>
                 Our Bestsellers
            </h2>
            <div className={styles.grid}>
                {bestellerProducts.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <Image src={product.image} width={300} height={300} alt={product.name} className={styles.image} />
                        <h3>{product.name}</h3>
                        <div className={styles.rating}>{renderStars(product.rating)}</div>
                        <p className={styles.price}>${product.price.toFixed(2)}</p>
                        <button className={styles.btn} onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                ))}
            </div>
            <div className={styles.cta}>
                    <a href="/shop" className={styles.link}>
                    See All Products → </a>
            </div>
        </section>
        </>
    )
}
export default Bestellers;