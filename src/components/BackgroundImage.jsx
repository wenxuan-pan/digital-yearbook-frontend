import React from "react"
import { Outlet } from "react-router-dom"

const BackgroundImage = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/src/assets/app-hero.jpg")',
        backgroundSize: "cover",
        color: "white",
        height: "100vh",
        backgroundColor: "#d9d9d9",
        backgroundBlendMode: "multiply"
      }}
      className="p-5 text-center bg-image"
    >
      <Outlet />
    </section>
  )
}

export default BackgroundImage
