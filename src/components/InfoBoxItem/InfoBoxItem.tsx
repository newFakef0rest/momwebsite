import { motion, MotionValue, useTransform } from "framer-motion";
import styles from "./InfoBoxItem.module.scss";

type InfoBoxItemProps = {
  left: string;
  progress: MotionValue<number>;
  direction: string;
};

export const InfoBoxItem = ({
  left,
  progress,
  direction,
}: InfoBoxItemProps) => {
  const dir = direction === "left" ? -1 : 1;

  const x = useTransform(progress, [0, 1], [-150 * dir, 150 * dir]);

  return (
    <motion.div className={styles.infobox} style={{ left, x }}>
      <h2>
        Jeans that doesn't compromise on style, sustainability or quality. Jeans
        that doesn't compromise on style, sustainability or quality. Jeans that
        doesn't compromise on style, sustainability or quality.
      </h2>
    </motion.div>
  );
};
