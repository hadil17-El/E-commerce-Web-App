"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCart } from "@/app/components/CartContext";
import "swiper/css";
import { title } from "process";


  const solutions = [
    {
      img:"/brighten.jpg",
      title: "BRIGHTEN",
      text:(
        <>
                  Target dullness and dark spots with <em>THD Vitamin C + Turmeric.</em>
        </>
      ),
    },
      {
      img:"/renew.jpg",
      title: "RENEW",
      text:(
        <>
          Smooth fine lines + wrinkles with retinol alternative{" "}
          <em>Bakuchiol.</em>
        </>
      ),
    },
      {
      img:"/hydrate.jpg",
      title: "HYDRATE",
      text:(
        <>
          Replenish skin with nature's hydrator, <em>Tremella Mushroom.</em>
        </>
      ),
    },
      {
      img:"/clearify.jpg",
      title: "CLARIFY",
      text:(
        <>
 Clear blemishes and balance oily, acne-prone skin with{" "}
          <em>Blue Tansy.</em>        </>
      ),
    },

  ]

type Slide = {
  title: string;
  discount: string;
  description: string;
  button: string;
  image: string;
};
const slides: Slide[] = [
  {
    title: "THE BALANCING COLLECTION SALE",
    discount: "50% OFF",
    description: "Savings this good only happen once in a blue moon. No code needed.",
    button: "SHOP NOW",
    image: "/product1.jpg",
  },
  {

        title: "THE BALANCING COLLECTION SALE",
    discount: "40% OFF",
    description: "Savings this good only happen once in a blue moon. No code needed.",
    button: "SHOP NOW",
    image: "/product1.jpg",
  },
  {
        title: "THE BALANCING COLLECTION SALE",
    discount: "30% OFF",
    description: "Savings this good only happen once in a blue moon. No code needed.",
    button: "SHOP NOW",
    image: "/product2.jpg",
  },
  {
        title: "THE BALANCING COLLECTION SALE",
    discount: "30% OFF",
    description: "Savings this good only happen once in a blue moon. No code needed.",
    button: "SHOP NOW",
    image: "/product3.jpg",
  },
  {
    title: "THE RENEWAL COLLECTION SALE",
    discount: "25% OFF",
    description: "Glow brighter with our vitamin-rich renewal oils. No code needed.",
    button: "SHOP NOW",
    image: "/product4.jpg",
  },
  {

        title: "THE HYDRATION COLLECTION SALE",
    discount: "32% OFF",
    description:  "Hydration that lasts all day long. Available now without a code.",
    button: "SHOP NOW",
    image: "/product5.jpg",
  },
   
]
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

const products: Product[] = [
   { 
    id: 1,
    name: "LAPIS Balancing Facial Oil",
    price: 15.00,
    image: "/p1.jpg",
    rating: 5,
  },
  { id:2,
    name: "NOVA Turmeric + Niacinamide Bi-Phase Glow Facial Oil",
    price: 88.00,
    image: "/p2.jpg",
    rating: 2.5,
  },
   {
    id:3,
    name: "NOVA 15% Vitamin C + Turmeric Brightening Serum",
    price: 18.00,
    image: "/p3.jpg",
    rating: 3,
  },
   {id:4,
    name: "NOVA Turmeric + Niacinamide Bi-Phase Glow Facial Oil",
    price: 78.00,
    image: "/p3.jpg",
    rating: 3.5,
  },
   {id:5,
    name: "NOVA Turmeric + Niacinamide Bi-Phase Glow Facial Oil",
    price: 68.00,
    image: "/p4.jpg",
    rating: 4,
  },
   {id:6,
    name: "NOVA Turmeric + Niacinamide Bi-Phase Glow Facial Oil",
    price: 58.00,
    image: "/p5.jpg",
    rating: 4.5,
  },
   {id:7,
    name: "TREMELLA Silky Hydration Gel Cream",
    price: 48.00,
    image: "/p6.jpg",
    rating: 5,
  },
   {id:8,
    name: "NOVA Turmeric + Niacinamide Bi-Phase Glow Facial Oil",
    price: 38.00,
    image: "/p7.jpg",
    rating: 5.5,
  },
   {id:9,
    name: "TREMELLA Silky Hydration Gel Cream",
    price: 28.00,
    image: "/p8.jpg",
    rating: 6,
  },
];
function renderStars(rating: number){
  const stars = [];
  for(let i = 1; i<= 5;i++ ) {
    stars.push(
      <span key={i}>{i <= rating ? "★" : "☆"}</span>
    )
  }
  return stars;
}
 const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();
  useEffect (() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];
    return (
        <>
        <section className={styles.section1}>
            <div className={styles.background}>
<img src="/img1.jpg" className={styles.img1} alt="img1" />
            </div>
            <div className={styles.content}>
            <h1 className={styles.subtitle1}>NEW!</h1>
            <h1 className={styles.title1}>NOVA Glow Facial Oil</h1>
            <p className={styles.text1}>Introducing a new bi-phase oil that combines the power of an active serum with the nourishing moisture of plant-based oils.</p>
            <button className={styles.btn1}>Shop Now</button>
            </div>
        </section>
        <section className={styles.scrolling}>
      <div className={styles.scrollingContent}>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>
        <span>CRUELTY-FREE · CLINICALLY PROVEN · VEGAN · AWARD-WINNING · NON-TOXIC · PLANT-BASED · </span>

      </div>
    </section>
      <section className={styles.promo}>
        <div key={currentIndex + "-text"} className={`${styles.promoleft} ${styles.animateText}`}>
          <h4>{currentSlide.title}</h4>
          <h2>{currentSlide.discount}</h2>
          <p>{currentSlide.description}</p>
          <button>{currentSlide.button}</button>
        </div>
         <div key={currentIndex + "-image"} className={`${styles.promoright} ${styles.animateImage}`}>
          <img src={currentSlide.image} alt={currentSlide.title} />
        </div>
      </section>
      <section className= {styles.productslider}>
        <h2 className={styles.titleslider}>SUMMER SKIN ESSENTIALS</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 6000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4},
          }}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.card}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className={styles.rating}>{renderStars(product.rating)}</div>
                  <p className={styles.price}>{product.price}</p>
                  <button className={styles.btn2} onClick={() => addToCart(product)}>ADD TO CART</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
      <section className={styles.summer}>
        <div className={styles.text}>
          <h4 className={styles.subtitle2}>SHOP THE EDIT</h4>
          <h2 className={styles.titlesummer}>SUMMER IS SERVED</h2>
          <p className={styles.description2}>
              Lightweight, glow-giving formulas designed to hydrate, refresh, and
          soothe under the sun.
          </p>
          <button className={styles.btn3}>SHOP NOW</button>
        </div>
        <div className={styles.images}>
          <img src="/img-water.jpg" alt="hand in water" />
          <img src="/img-sand.jpg" alt="product on sand" />
        </div>
      </section>
      <section className={styles.editor}>
        <h2 className={styles.titleeditor}>EDITOR APPROVED SKIN + BODYCARE </h2>
        <div className={styles.logos}>
          <span className={styles.BYRDIE}>BYRDIE</span>
          <span className={styles.allure}>allure</span>
          <span className={styles.vogue}>VOGUE</span>
          <span className={styles.people}>People</span>
          <span className={styles.refinery29}>REFINERY29</span>
          <span className={styles.mindbodygreen}>mindbodygreen</span>
        </div>
      </section>
      <section className={styles.newsletter}>
        <div className={styles.overlay}>
          <h2>SIGN UP FOR 15% OFF</h2>
          <p>
            Get 15% off your first order plus access to new drops, products tips,
            and exclusive offers.
          </p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              />
              <button type="submit" className={styles.btn4}>
                SIGN UP
              </button>
          </form>
        </div>
      </section>
      <section className={styles.planet}>
        <h2 className={styles.heading}>PLANET-POWERED SOLUTIONS</h2>
        <div className={styles.grid}>
          {solutions.map((item, index) => (
            <div key={index} className={styles.cardP}>
              <img src={item.img} alt={item.title} className={styles.image2} />
              <h3 className={styles.titlesolution}>{item.title}</h3>
              <p className={styles.text2}>{item.text}</p>
              </div>
          ))}
        </div>
      </section>
        </>
    )
}

export default Home;