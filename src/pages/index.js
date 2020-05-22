import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

export default function Contact() {
  var sal = require("sal.js")
  const scrollAnimations = sal()

  scrollAnimations.disable()
  return (
    <h1 data-sal="fade">
      A place for{" "}
      <span id="typed" class="typed">
        mu
      </span>
      <span class="typed-cursor">|</span>
    </h1>
  )
  sal()
}
