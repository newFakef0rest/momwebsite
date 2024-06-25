import { motion, useTransform } from "framer-motion";
import CategoryMen from "../../assets/img/CategoryMen.jpg";
import CategoryWomen from "../../assets/img/categoryWomen.jpg";
import type { scrollProp } from "../../types.ts";
import { Line } from "../Line/Line.tsx";
import styles from "./Category.module.scss";

export const Category = ({ scrollYProgress }: scrollProp) => {
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div className={styles.category}>
      <motion.div style={{ y }} className={styles.category__borders}>
        <Line className={styles.category__none} />
        <div className={`row ${styles.category__row}`}>
          <div className={`${styles.category__item} ${styles.category__women}`}>
            <div className={styles.category__imagebox}>
              <img src={CategoryWomen} />
            </div>
            <div className={styles.category__titlebox}>
              <h3>Women</h3>
              <button type={"button"}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className={`${styles.category__item} ${styles.category__men}`}>
            <div className={styles.category__imagebox}>
              <img src={CategoryMen} />
            </div>
            <div className={styles.category__titlebox}>
              <h3>Men</h3>
              <button type={"button"}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
