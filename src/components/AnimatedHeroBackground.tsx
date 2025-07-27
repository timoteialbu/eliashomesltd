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

  const subwayTile = `data:image/svg+xml;utf8,<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="46" height="21" fill="%23ffffff" /><rect x="2" y="27" width="46" height="21" fill="%23ffffff" /></svg>`;

  const diamondTile = (color: string) =>
    `data:image/svg+xml;utf8,<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M25 2 L48 25 L25 48 L2 25 Z" fill="${color.replace("#", "%23")}" /></svg>`;

  const colors = [
    "#FFFFFF",
    "#E0E0E0",
    "#C0C0C0",
    "#A0A0A0",
    "#808080",
    "#606060",
    "#404040",
    "#202020",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        {Array.from({ length: grid.cols * grid.rows }).map((_, i) => {
          const row = Math.floor(i / grid.cols);
          const col = i % grid.cols;
          const isSubway = row < grid.rows / 2;
          const pattern = isSubway
            ? subwayTile
            : diamondTile(
                colors[
                  Math.floor(
                    ((row - grid.rows / 2) / (grid.rows / 2)) * colors.length,
                  )
                ],
              );

          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="absolute"
              style={{
                width: 50,
                height: 50,
                top: `${row * 50}px`,
                left: `${col * 50}px`,
                backgroundImage: `url("${pattern}")`,
                backgroundRepeat: "no-repeat",
                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedHeroBackground;
