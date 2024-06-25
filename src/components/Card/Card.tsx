import { motion, useTransform } from "framer-motion";
import type { scrollProp } from "../../types.ts";
import styles from "./Card.module.scss";

type CardProps = {
  className?: string;
  title: string;
  image: string;
  price: string;
  type: string;
};

export const Card = ({
  className,
  title,
  image,
  price,
  type,
  scrollYProgress,
}: CardProps & scrollProp) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card__imagebox}>
        <motion.img style={{ scale }} src={image} alt={title} />
      </div>
      <div className={styles.card__infobox}>
        <div className={styles.card__typebox}>
          <h5>{title}</h5>
          <span>{type}</span>
        </div>
        <div className={styles.card__pricebox}>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
