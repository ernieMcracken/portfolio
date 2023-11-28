import { useEffect } from "react";

export function useMousePosition(threshold, actionOnEnter, actionOnLeave) {
  let prevPosition = 0;

  useEffect(() => {
    console.log("run effect");
    function handleMouseMove(e) {
      if (e.clientY < threshold && prevPosition >= threshold) {
        console.log(e.clientY, prevPosition);
        actionOnEnter();
      } else if (e.clientY > threshold && prevPosition <= threshold) {
        actionOnLeave();
      }

      prevPosition = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [threshold, actionOnEnter, actionOnLeave]);
}
