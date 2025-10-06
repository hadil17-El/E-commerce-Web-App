"use client";
import {useCart } from "@/app/components/CartContext";
import styles from "./Cart.module.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Link from "next/link";
const CartPage = () => {
    const { cart,increaseQuantity,decreaseQuantity ,removeFromCart ,clearCart} = useCart();
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;
    
    return(
        <section className={styles.cart}>
            <h1 className={styles.title}>Your Cart</h1>
            {
                cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                       <tbody>
  {cart.map((item, index) => (
    <tr key={`${item.id}-${index}`}>
      <td>
        <img src={item.image} alt={item.name} className={styles.image} />
        {item.name}
      </td>
      <td>
        <button onClick={() => decreaseQuantity(item.id)} className={styles.iconBtn}>
          <FaMinus />
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)} className={styles.iconBtn}>
          <FaPlus />
        </button>
      </td>
      <td>£{item.price.toFixed(2)}</td>
      <td>£{(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
          <FaTrash />
        </button>
      </td>
    </tr>
  ))}
</tbody>

                    </table>
                    <div className={styles.summary}>
                        <p>Subtotal: £{subtotal.toFixed(2)}</p>
                        <p>Shipping: £{shipping.toFixed(2)}</p>
                        <h3>Total: £{total.toFixed(2)}</h3>
                         <Link href="/checkout">
                            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                        </Link>
                        <button onClick={clearCart} className={styles.clearBtn}>Clear Cart</button>
                    </div>
                    </>
                )
            }
    </section>
    ) 

}
export default CartPage;