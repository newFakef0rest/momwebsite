import { motion, useTransform } from "framer-motion";
import { Test } from "../../Test.tsx";
import type { scrollProp } from "../../types.ts";
import styles from "./Banner.module.scss";

export const Banner = ({ scrollYProgress }: scrollProp) => {
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, window.innerWidth > 1000 ? 0.8 : 1],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerWidth > 1000 ? -5 : 0],
  );

  console.log(window.innerWidth);

  return (
    <motion.div style={{ scale, rotate }} className={styles.banner}>
      <div className={`row ${styles.banner__row}`}>
        <div className={styles.banner__text}>
          <div className={styles.banner__text__info}>
            <span>beat the lockdown blues with</span>
            <h1>The world's most sustainable denim collection.</h1>
            <p>Let's ditch fast fashion and change the world.</p>
          </div>
          <div className={styles.banner__buttons}>
            <button type={"button"}>shop women</button>
            <button type={"button"}>shop men</button>
          </div>
        </div>
        <div className={styles.banner__image}>
          <Test />
        </div>
      </div>
    </motion.div>
  );
};
