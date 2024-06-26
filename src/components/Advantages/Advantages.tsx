import { motion, useTransform } from "framer-motion";
import AdvantagesImage from "../../assets/img/advantages.jpg";
import type { scrollProp } from "../../types.ts";
import styles from "./Advantages.module.scss";

export const Advantages = ({ scrollYProgress }: scrollProp) => {
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [window.innerWidth > 1000 ? -5 : 0, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [window.innerWidth > 1000 ? 0.8 : 1, 1],
  );

  return (
    <motion.div style={{ scale, rotate }} className={styles.advantages}>
      <div className={`row ${styles.advantages__row}`}>
        <div className={styles.advantages__difference}>
          <div
            className={`${styles.advantages__pros} ${styles.advantages__item}`}
          >
            <h3 className={styles.advantages__title}>Yes</h3>
            <ul className={styles.advantages__ul}>
              <li>
                <span>+ 56% Recycled denim</span>
              </li>
              <li>
                <span>+ saves 76% CO2</span>
              </li>
              <li>
                <span>+ 100% recyclable</span>
              </li>
              <li>
                <span>+ saves 6639 liter water</span>
              </li>
              <li>
                <span>+ 100% Made in EU</span>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.advantages__cons} ${styles.advantages__item}`}
          >
            <h3 className={styles.advantages__title}>No</h3>
            <ul className={styles.advantages__ul}>
              <li>
                <span>- Toxic Chemicals</span>
              </li>
              <li>
                <span>- Plastic fibers or coating</span>
              </li>
              <li>
                <span>- Extra labels</span>
              </li>
              <li>
                <span>- Unethical labour</span>
              </li>
              <li>
                <span>- Compromises</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.advantages__image}>
          <img src={AdvantagesImage} />
        </div>
      </div>
    </motion.div>
  );
};
