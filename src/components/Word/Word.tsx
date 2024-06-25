import { motion, type MotionValue, useTransform } from "framer-motion";
import styles from "./Word.module.scss";

type WordProps = {
  word: string;
  range: number[];
  progress: MotionValue<number>;
};

export const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.word__shadow}>{word} </span>
      <motion.span style={{ opacity }}>{word} </motion.span>
    </span>
  );
};
