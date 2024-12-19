import { useState } from "react"

export default function Header ({score, bestScore}) {

  return (
    <div className="header">
    <h3> Memory Game </h3>
    <span className="scores">
    <p>Score: {score} </p>
    <p>Best score: {bestScore} </p>
    </span>
    </div>
  )
}