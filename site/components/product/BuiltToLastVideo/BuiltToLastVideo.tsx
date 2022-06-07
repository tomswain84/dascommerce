import ProductVideo from "@components/section/ProductVideo"
import type { VFC } from "react"

const BuiltToLastVideo: VFC = () => {
  return (
    <section id="video" className="pt-5 mt-5 bg-white">
      <div className="container-boxed pb-5 pt-xl-5 mt-sm-5">
        <div className="row mb-md-4">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <figure className="heading text-center mt-5">
              <figcaption>
                <h1>Built <span className="text-red">To Last</span>. </h1>
              </figcaption>
              <p>The perfect blend of technology and art.</p>
            </figure>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray-darker">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="ratio ratio-16x9 d-block mx-auto mb-4 mb-md-5 mw-100">
              <iframe src="https://www.youtube.com/embed/9byG-aS4Hf0?rel=0" title="YouTube video" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BuiltToLastVideo