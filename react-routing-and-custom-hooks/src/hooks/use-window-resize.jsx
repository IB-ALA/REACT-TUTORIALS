import { useLayoutEffect, useState } from "react";

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleRsize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  // runs before elements are rendered in the browser
  useLayoutEffect(() => {
    handleRsize();

    window.addEventListener("resize", handleRsize);

    return () => {
      window.removeEventListener("resize", handleRsize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;
