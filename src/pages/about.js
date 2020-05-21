import React from "react"
//import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <section
      id="hero"
      className="h-100vh pattern-vertical-lines-md yellow-light bg-yellow flex justify-center items-center bg-fixed"
      tabindex="-1"
      style={{ outLine: `center` }}
    >
      <div>
        <h1 className="fs-l5 text-center lh-2 black">
          My beautiful Journey <br />
        </h1>
        <p className="text-center black opacity-50 fw-600 my-10">
          by Miruna Nedelcu.
        </p>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div className="text-center ">
          <div className="">
            <a
              href="#introduction"
              class="button-lg no-underline br-0 bg-black white fs-s3 ls-wider uppercase hover-opacity-100 focus-white hover-scale-up-1 ease-500"
            >
              <Link to="/">Home</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
