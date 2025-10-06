"use client"
import Link from "next/link";
import { useCart } from "@/app/components/CartContext";
import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { FaArrowLeft } from "react-icons/fa"; 

import Image from "next/image";
type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}
const Shop = () => {
    const [products, setProducts]= useState<Product[]>([]);
    const { addToCart } = useCart();
    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data))
    }, [])
    return (
        <>
        <section className={styles.shop}>
     
   
            <h1 className={styles.heading}>Shop All Products</h1>
            <img src="./woman-face.jpg"  className= {styles.woman} alt="woman-face"  />
            <div className={styles.grid}>
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((p) => (
                        <div key={p.id} className={styles.card}>
                            <Image src={p.image} alt={p.name} className={styles.image}  width={300} height={300} />
                            <h3>{p.name}</h3>
                            <p>${p.price}</p>
                            <button onClick={() => addToCart(p)} >Add to Cart</button>
                        </div>
                    ))
                )}
                
            </div>
        </section>
        </>
    )
}
export default Shop;