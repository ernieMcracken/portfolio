import { useEffect, useState } from "react";

export function useScrollDirection(delta) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let prevScroll = window.scrollY;

    function handleScroll() {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScroll) > delta) {
        console.log("trigger scroll");
        const direction = scrollY > prevScroll ? "down" : "up";
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        prevScroll = scrollY;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return scrollDirection;
}
