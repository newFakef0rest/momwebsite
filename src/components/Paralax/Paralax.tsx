import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Advantages } from "../Advantages/Advantages.tsx";
import { Banner } from "../Banner/Banner.tsx";

export const Paralax = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="paralax">
      <Banner scrollYProgress={scrollYProgress} />
      <Advantages scrollYProgress={scrollYProgress} />
    </div>
  );
};
