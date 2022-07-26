/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const HeroBanner: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <section id="hero" className="bg-gray-darker text-white pb-sm-5 d-flex flex-column pt-5">
        <Link href="/products/daskeyboard/4-ultimate" className="text-decoration-none">
          <div className="container-boxed">
            <div className="row">
              <div className="col-md-9 col-xl-6">
                <figure className="heading mt-lg-0">
                  <figcaption className="text-white">
                    <h1 dangerouslySetInnerHTML={{
                      __html: `
                      <small>${say('home_slider_1_title')}</small>
                      <br />${say('home_slider_1_subtitle')}
                    `}}
                    />
                  </figcaption>
                  <p className="mt-3 mt-xl-4 text-white" dangerouslySetInnerHTML={$html('home_slider_1_description')} />
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
