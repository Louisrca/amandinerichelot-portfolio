"use client";

import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [cursorColor, setCursorColor] = useState("black");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (element) {
        const computedStyle = getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor || "rgb(255, 255, 255)";
        const invertedColor = invertColor(bgColor);

        setCursorColor(invertedColor);
      }
    };

    const onResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const invertColor = (rgb: string) => {
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return "black";

    const [r, g, b] = rgbValues.map(Number);
    const invertedR = 255 - r;
    const invertedG = 255 - g;
    const invertedB = 255 - b;

    return `rgb(${invertedR}, ${invertedG}, ${invertedB})`;
  };

  if (screenSize.width < 1024 || screenSize.height < 758) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        zIndex: 9999,
        backgroundColor: cursorColor,
        position: "fixed",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    ></div>
  );
}
