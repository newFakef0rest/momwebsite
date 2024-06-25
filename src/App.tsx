import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { Category } from "./components/Category/Category.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { InfoBox } from "./components/InfoBox/InfoBox.tsx";
import { News } from "./components/News/News.tsx";
import Offer from "./components/Offer/Offer.tsx";
import { Paralax } from "./components/Paralax/Paralax.tsx";
import { Products } from "./components/Products/Products.tsx";

function App() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Offer />
      <Paralax />
      {/* A div for a moving text box */}
      <div ref={textRef}>
        <InfoBox scrollYProgress={scrollYProgress} />
      </div>
      <Category scrollYProgress={scrollYProgress} />
      <News />
      <Products />
      {/* <Forbs /> */}
      <Footer />
    </>
  );
}

export default App;
