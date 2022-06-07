/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  id?: string
  title: string
  description: string
  hasScreenBase?: boolean
  background: 'white' | 'light' | 'dark'
  video?: {
    src: string,
    poster: string
  }
  image?: {
    src: string
  }
}
const ProductScreen: VFC<Props> = ({ id, title, description, hasScreenBase, background, video, image }) => {
  let backgroundClass, textColorClass = 'text-black'
  switch (background) {
    case 'white':
      backgroundClass = 'bg-white'
      break
    case 'dark':
      backgroundClass = 'bg-gray-darker dark-section breakout-bottom'
      textColorClass = 'text-white'
      break
    case 'light':
      backgroundClass = 'bg-gray-lighter pb-0'
      break
    default:
      break
  }
  return (
    <>
      <section id={id || ''} className={`section-pad ${backgroundClass}`}>
        <div className="container-boxed">
          <div className="row">
            <div className="col-12">
              <figure className="heading text-center mb-5">
                <figcaption>
                  <h2>
                    <small>{title}</small>
                    <br />{description}
                  </h2>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col video-col text-center">

              {/* Mobile Only */}

              <span className="video-shine d-none d-md-block"></span>
              {video && (
                <video
                  className="d-block mx-auto w-100 d-none d-md-block"
                  autoPlay loop muted
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              )}
              {image && (
                <>
                  <img
                    className="video-mockup img-fluid d-md-none"
                    src={image.src}
                    alt={title}
                  />
                  <img src={image.src} alt={title} className="img-fluid rounded section-featured" />
                </>
              )}
              {hasScreenBase && (
                <img
                  className="/video-base d-none d-md-block mx-auto position-relative"
                  src="/images/img-home-video_base.png"
                  alt="Video Base"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProductScreen
