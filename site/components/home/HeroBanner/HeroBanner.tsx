/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import type { VFC } from "react"

const HeroBanner: VFC = () => {
  return (
    <>
      <section id="hero" className="bg-gray-darker text-white pb-sm-5 d-flex flex-column pt-5">
        <Link href="/products/daskeyboard/4-ultimate" className="text-decoration-none">
          <div className="container-boxed">
            <div className="row">
              <div className="col-md-9 col-xl-6">
                <figure className="heading mt-lg-0">
                  <figcaption className="text-white">
                    <h1>
                      <small>The Ultimate</small>
                      <br />Mechanical Keyboard
                    </h1>
                  </figcaption>
                  <p className="mt-3 mt-xl-4 text-white">Das Keyboard offers badass geeks the ultimate experience with high-performance mechanical keyboards with superior durability, construction, and design.</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="container-fluid home-hero-image p-0">
            <div className="row g-0">
              <img className="intro img-fluid" src="images/img-hero-home.png" alt="home banner" />
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}
export default HeroBanner
