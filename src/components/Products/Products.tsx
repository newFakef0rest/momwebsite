import { useScroll } from "framer-motion";
import { useRef } from "react";
import ProductsFirst from "../../assets/img/productsFirst.jpg";
import ProductsSecond from "../../assets/img/productsSecond.jpg";
import ProductsThird from "../../assets/img/productsThird.jpg";
import { Card } from "../Card/Card.tsx";
import styles from "./Products.module.scss";

export const Products = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  return (
    <div ref={container} className={styles.products}>
      <div className={`row ${styles.products__row}`}>
        <div
          className={`${styles.products__items} ${styles.products__titlebox}`}
        >
          <h4>Featured Products</h4>

          {/* <button type={"button"}> */}
          {/*   <i className="fa-solid fa-arrow-right"></i> */}
          {/* </button> */}
        </div>
        <Card
          title={"STRAIGHT"}
          image={ProductsFirst}
          className={styles.products__item}
          price={"€135,00"}
          type={"Straight fit"}
          scrollYProgress={scrollYProgress}
        />
        <Card
          title={"STRAIGHT"}
          image={ProductsSecond}
          className={styles.products__item}
          price={"€135,00"}
          type={"Straight fit"}
          scrollYProgress={scrollYProgress}
        />
        <Card
          title={"STRAIGHT"}
          image={ProductsThird}
          price={"€135,00"}
          type={"Straight fit"}
          scrollYProgress={scrollYProgress}
        />
      </div>
    </div>
  );
};
