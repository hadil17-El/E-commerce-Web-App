"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
};
type CartItem = Product & {quantity: number};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;

};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
//recupera dal LocalStorage al mount
    useEffect(() =>{
        const saved = localStorage.getItem("cart");
        if (saved) setCart(JSON.parse(saved));
    }, []);
//salve nel localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addToCart = (product: Product) => {
        setCart((prev) => {
        const item = prev.find(p => p.id === product.id);
        if(item) {
            return prev.map(p=>
                p.id === product.id ? {...p, quantity:p.quantity + 1} : p);

                } 
        return [...prev, {...product, quantity: 1}];   
        });
    } ;

    const removeFromCart = (id: number) => {
        setCart((prev)=> prev.filter((p)=> p.id !== id));
    };
    const increaseQuantity = (id: number) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id ? {...p, quantity: p.quantity + 1} : p
            )
        )
    }
    const decreaseQuantity = (id: number) => {
        setCart(prev=>
            prev.map(p=>
                p.id === id ? { ...p, quantity: p.quantity - 1} : p
            )
            .filter(p=> p.quantity > 0)
        )
    }
    const clearCart = () => setCart([]);
    return (
        <CartContext.Provider value= {{cart, addToCart, removeFromCart,increaseQuantity,decreaseQuantity,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart deve essere usato dentro CartProvider");
    return context;
}