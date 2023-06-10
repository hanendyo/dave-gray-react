import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    const cleanUp = () => {
      window.removeEventListener("resize", handleSize);
    };
    return () => cleanUp();
  }, []);
  return windowSize;
};

export default useWindowSize;
