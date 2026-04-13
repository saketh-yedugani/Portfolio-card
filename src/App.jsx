import React from "react";
import Info from "./components/info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="card--container">
      <div className="card">
        <Info />
        <div className="card--content">
          <About />
          <Interests />
          </div>
        <Footer />
      </div>
    </div>
  )
}