import { useEffect, useState } from "react";

import img1 from "../assets/img/Orange Hair with Headphones.png";
import img2 from "../assets/img/Surreal Floral Fusion.png";

export default function ScrollImages() {

  const images = [img1, img2];
  const [index, setIndex] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const scroll = window.scrollY;
      const newIndex = Math.floor(scroll / 300) % images.length;
      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    const handleMove = (e) => {

      const img = document.createElement("img");

      img.src = images[index];
      img.style.position = "fixed";
      img.style.pointerEvents = "none";
      img.style.width = "70px";
      img.style.left = e.clientX + "px";
      img.style.top = e.clientY + "px";
      img.style.transform = "translate(-50%, -50%)";
      img.style.transition = "opacity 0.5s linear";

      document.body.appendChild(img);

      setTimeout(() => {
        img.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        img.remove();
      }, 500);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };

  }, [index]);

  return (
    <div className="absolute right-20 top-[15%] -translate-y-1/2 w-[320px] h-[520px] overflow-hidden">

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`absolute w-full transition-all duration-700 ${
            i === index
              ? "left-0 opacity-100"
              : "-left-full opacity-0"
          }`}
        />
      ))}

    </div>
  );
}