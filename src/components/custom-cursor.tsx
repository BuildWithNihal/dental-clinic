"use client";

import { useState, useEffect } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden lg:block"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      <div
        className="custom-cursor-dot hidden lg:block"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
    </>
  );
}
