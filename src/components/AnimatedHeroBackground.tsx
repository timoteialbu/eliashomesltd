import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedHeroBackground = () => {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight * 0.8; // 80vh
      const tileSize = 50;
      const cols = Math.ceil(screenWidth / tileSize);
      const rows = Math.ceil(screenHeight / tileSize);
      setGrid({ cols, rows });
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="bg-primary absolute"
            style={{
              width: 50,
              height: 50,
              top: `${Math.floor(i / grid.cols) * 50}px`,
              left: `${(i % grid.cols) * 50}px`,
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeroBackground;
