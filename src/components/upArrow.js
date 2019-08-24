import React from "react"
import "./upArrow.css"

function UpArrow() {
  // function UpArrow({ smoothScroll }) {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      id="up-arrow"
    >
      <i className="fas fa-arrow-circle-up" />
    </div>
  )
}

export default UpArrow
