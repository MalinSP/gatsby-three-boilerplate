import { Canvas } from "@react-three/fiber"
import React from "react"
import "reset-css"
import "../css/main.css"

export default function Home() {
  return (
    <>
      <div className="canvas-container">
        <Canvas></Canvas>
      </div>
    </>
  )
}
