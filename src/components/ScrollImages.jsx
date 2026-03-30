import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/img/Orange Hair with Headphones.png";
import img2 from "../assets/img/Surreal Floral Fusion.png";

export default function ScrollImages() {
  const images = [img1, img2];
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Cambia la imagen según scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const newIndex = Math.floor(scroll / 300) % images.length;
      setIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Actualiza offset según posición del cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById("scroll-images-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Offset en sentido opuesto al cursor
      const deltaX = (centerX - e.clientX) / 15; // ajusta intensidad
      const deltaY = (centerY - e.clientY) / 15;

      setOffset({ x: deltaX, y: deltaY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="scroll-images-container"
      className="absolute right-20 top-[15%] -translate-y-1/2 w-[320px] h-[520px] overflow-hidden"
    >
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt=""
          className="absolute w-full rounded-2xl"
          initial={{ opacity: 0, left: "-100%" }}
          animate={{
            left: i === index ? 0 : "-100%",
            opacity: i === index ? 1 : 0,
            x: i === index ? offset.x : 0,
            y: i === index ? offset.y : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        />
      ))}
    </div>
  );
}