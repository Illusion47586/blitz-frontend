import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width <= 468;
  const isPerfect = width <= 846;
  return {
    width,
    height,
    isMobile,
    isPerfect,
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
