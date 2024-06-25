import type { scrollProp } from "../../types.ts";
import { Word } from "../Word/Word.tsx";
import styles from "./Paragraph.module.scss";

type ParagraphProps = {
  text: string;
};

export const Paragraph = ({
  text,
  scrollYProgress,
}: ParagraphProps & scrollProp) => {
  const words: string[] = text.split(" ");

  return (
    <p className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        // const newStart = i / words.length;
        // const testMiddle = i + 1 / words.length;
        // const newEnd = testMiddle + 1 / words.length;
        //
        // console.log([newStart, newEnd]);

        if (word.length != 0) {
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        }
      })}
    </p>
  );
};
