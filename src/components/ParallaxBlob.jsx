import { useEffect, useState } from "react"

export default function ParallaxBlob({
  color = "bg-lila",
  top = "top-20",
  left = "left-20",
  size = "w-96 h-96",
  speed = 0.2
}){

  const [position,setPosition] = useState({x:0,y:0})
  const [scrollOffset,setScrollOffset] = useState(0)

  useEffect(()=>{

    let frame
    let time = 0

    const animate = () => {

      time += 0.01

      const x = Math.sin(time) * 40
      const y = Math.cos(time * 1.3) * 40

      setPosition({x,y})

      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(frame)

  },[])

  useEffect(()=>{

    const handleScroll = () => {
      setScrollOffset(window.scrollY * speed)
    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)

  },[speed])

  return(

    <div
      className={`absolute ${top} ${left} ${size} ${color} opacity-20 rounded-full blur-3xl -z-10`}
      style={{
        transform:`translate(${position.x}px, ${position.y + scrollOffset}px)`
      }}
    />

  )
}