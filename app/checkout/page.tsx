"use client";
import {useState} from "react";
import {useCart } from "../components/CartContext";
import styles from "./Checkout.module.css"

const Checkout  = () => {
    const { cart, clearCart } = useCart();
    const [submitted, setSubmitted] = useState(false);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        clearCart();
    };

    if (submitted) {
        return (
            <section className={styles.confirmation}>
                <h1>Grazie per il tuo ordine!</h1>
                <p>Riceveria una mail di conferma con i dettagli.</p>
            </section>
        )
    }
return (
    <section className={styles.checkout}>
     
        {
            cart.length === 0 ? (
                <p>Il tuo carrello è vuoto.</p>
            ) : (
                <div className={styles.container}>
                    {/*Form dati utente*/}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h2 className={styles.h2}>Dati di Spedizione</h2>
                        <input type="text" placeholder="Nome completo" required />
                        <input type="text" placeholder="Email" required />
                        <input type="text" placeholder="Indirizzo" required />
                        <input type="text" placeholder="Citta" required />
                        <input type="text" placeholder="CAP" required />
                        <input type="text" placeholder="Paese" required />
                        <button type="submit" className={styles.submitBtn}>Conferma Ordine</button>
                    </form>

                    {/*Riepilogo ordine*/}
                    <div className={styles.summary}>
                        <h2 className={styles.h2}>Riepilogo Ordine</h2>
                        <ul>
                            {cart.map((item, index) => (
                                <li  key={`${item.id}-${index}`}>
                                    {item.name}*{item.quantity} - £
                                    {(item.price * item.quantity).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <p>Subtotal: £{subtotal.toFixed(2)}</p>
                          <p>Shipping: £{shipping.toFixed(2)}</p>
                        <h3>Total: £{total.toFixed(2)}</h3>
                    </div>
                </div>
            )
        }
    </section>
)

}
export default Checkout;
