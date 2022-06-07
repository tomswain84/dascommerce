import type { VFC } from "react"

interface Props {
  title: string
  description: string
  video: {
    src: string
  }
}
const ProductVideo: VFC<Props> = ({ title, description, video }) => {
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-12">
            <figure className="heading text-center mb-5">
              <figcaption>
                <h2>
                  <small dangerouslySetInnerHTML={{ __html: title }} />
                  <br /><span className="animated-cursor cursor-dark">{description}</span>
                </h2>
              </figcaption>
            </figure>
            <div className="video ratio ratio-16x9">
              <iframe src={video.src} title="YouTube video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductVideo
