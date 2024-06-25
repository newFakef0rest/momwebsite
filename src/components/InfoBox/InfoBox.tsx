import type { scrollProp } from "../../types.ts";
import { InfoBoxItem } from "../InfoBoxItem/InfoBoxItem.tsx";
import styles from "./InfoBox.module.scss";

export const InfoBox = ({ scrollYProgress }: scrollProp) => {
  return (
    <div className={styles.infobox}>
      <div className={styles.infobox__item}>
        <InfoBoxItem
          left={"-75%"}
          progress={scrollYProgress}
          direction={"left"}
        />
        <InfoBoxItem
          left={"-30%"}
          progress={scrollYProgress}
          direction={"right"}
        />
        <InfoBoxItem
          left={"-55%"}
          progress={scrollYProgress}
          direction={"left"}
        />
      </div>
      {/* <motion.div */}
      {/*   className={styles.infobox__item} */}
      {/*   ref={textRef} */}
      {/*   style={{ right: "100%", x }} */}
      {/* > */}
      {/*   <h2> */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*   </h2> */}
      {/*   <h2> */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*   </h2> */}
      {/*   <h2> */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*     Jeans that doesn't compromise on style, sustainability or quality. */}
      {/*   </h2> */}
      {/* </motion.div> */}
    </div>
  );
};
