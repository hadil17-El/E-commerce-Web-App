"use client";
 import styles from "./Account.module.css";
 import { useState } from "react";
 import Image from "next/image";

 const Account = () => {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "**********",
    })

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated data:", formData);
        //qui in futuro puoi collegare API per salvare i dati
    };
    return (
        <>
        <section className={styles.account}>
            <div className={styles.left}>
            <Image src="/account.jpg" alt="" width={500} height={700} className={styles.image} />
            </div>
            <div className={styles.right}>
            <h2 className={styles.title}>Welcome back, {formData.firstName}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.row}>
                        <input className={styles.input} type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        placeholder="First Name"
                        />
                        <input className={styles.input} type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name"  />    
                    </div>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input  className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"  />
                    <button type="submit" className={styles.saveBtn}>Sahve Changes</button>
                </form>
            </div>
        
            </section></>
    )
 }

 export default Account;