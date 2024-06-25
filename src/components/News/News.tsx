import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { Paragraph } from "../Paragraph/Paragraph.tsx";
import styles from "./News.module.scss";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n" +
  "            deleniti eligendi fugiat molestias tempora velit, voluptatum. A, ab\n" +
  "            accusantium adipisci aliquam architecto aut beatae blanditiis\n";

export const News = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "start 0"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div ref={textRef} className={styles.news}>
      <div className="row">
        <div className={styles.news__infobox}>
          <Paragraph text={text} scrollYProgress={scrollYProgress} />
          <a href={"#"} className={styles.news__policy}>
            Read our privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};
