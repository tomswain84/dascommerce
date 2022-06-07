import type { VFC } from "react"

interface Props {
  theme: 'light' | 'dark'
  sectionId?: string
  title: string
  description: string
  className?: string
  margin?: {
    top?: number
    bottom?: number
  }
  video: {
    src: string
  }
}
const ProductVideo: VFC<Props> = ({ theme, sectionId, title, description, className, video, margin }) => {
  return (
    <>
      {theme === 'light' && (
        <section id={sectionId || ''} className="bg-white section-pad">
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
                  <iframe src={video.src} title="YouTube video" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {theme === 'dark' && (
        <section
          id={sectionId || 'video'}
          className={`pt-5 bg-white ${className || 'mt-5'}`}
          style={{
            marginTop: margin && margin.top ? `${margin.top}px !important` : 0,
            marginBottom: margin && margin.bottom ? `${margin.bottom}px !important` : 0,
          }}
        >
          <div className={`container-boxed pb-5`}>
            <div className="row mb-md-4">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <figure className="heading text-center">
                  <figcaption>
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                  </figcaption>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </figure>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-gray-darker">
            <div className="row">
              <div className="col-sm-8 offset-sm-2">
                <div className="ratio ratio-16x9 d-block mx-auto mb-4 mb-md-5 mw-100">
                  <iframe src={video.src} title="YouTube video" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default ProductVideo
