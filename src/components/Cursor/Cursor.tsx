"use client";

import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);

  const [cursorColor, setCursorColor] = useState("black");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Utilisation de `elementFromPoint` pour détecter l'élément sous le curseur
      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (element) {
        const computedStyle = getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor || "rgb(255, 255, 255)";
        const invertedColor = invertColor(bgColor);

        // Mettre à jour la couleur du curseur
        setCursorColor(invertedColor);
      }
    };

    const onResize = () => {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);
    };

    window.addEventListener("resize", onResize);

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  console.log("🚀 ~ Cursor ~ screenWidth:", screenWidth);
  console.log("🚀 ~ Cursor ~ screenHeight:", screenHeight);

  // Fonction pour inverser une couleur RGB
  const invertColor = (rgb: string) => {
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return "black";

    const [r, g, b] = rgbValues.map(Number);
    const invertedR = 255 - r;
    const invertedG = 255 - g;
    const invertedB = 255 - b;

    return `rgb(${invertedR}, ${invertedG}, ${invertedB})`;
  };
  if (screenWidth < 1024) return null;

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
