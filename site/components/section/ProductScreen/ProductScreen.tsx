/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
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
const ProductScreen: VFC<Props> = ({ title, description, hasScreenBase, background, video, image }) => {
  let backgroundClass, textColorClass = 'text-black'
  switch (background) {
    case 'white':
      backgroundClass = 'bg-white'
      break
    case 'dark':
      backgroundClass = 'bg-gray-darker'
      textColorClass = 'text-white'
      break
    case 'light':
      backgroundClass = 'bg-gray-lighter'
      break
    default:
      break
  }
  return (
    <section className={`section-pad text-center ${video ? '' : 'breakout-bottom'} p-4 ${backgroundClass} ${textColorClass}`} id={video ? 'softwareVideo' : 'softwareImage'}>
      <h4 className="text-red">{title}</h4>
      <p className="fw-bold fs-4 animated-cursor cursor-light">{description}</p>
      <div className="col video-col">
        {video && (
          <video
            className="d-block mx-auto w-100 d-none d-md-block section-featured"
            autoPlay loop muted
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}
        {image && (
          <img src={image.src} alt={title} className="img-fluid rounded section-featured" />
        )}
        {hasScreenBase && (
          <img className="video-base d-none d-md-block mx-auto position-relative" src="/images/img-home-video_base.png" alt="Video Base" />
        )}
      </div>
    </section>
  )
}
export default ProductScreen
