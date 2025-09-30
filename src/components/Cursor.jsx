import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="w-8 h-8 rounded-full fixed pointer-events-none z-50"
      style={{
        boxShadow: "0 0 10px 5px #a349fdff, 0 0 15px 1px #c13ef9ff",
      }}
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
