"use client";

import { useEffect, useState } from "react";

export default function CursorAura() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 h-40 w-40 rounded-full bg-gradient-to-br from-white via-white to-pink-500 opacity-20 blur-3xl transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
      }}
    />
  );
}
