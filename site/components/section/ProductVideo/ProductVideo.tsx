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
    <>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{description}</p>
      <iframe src={video.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </>
  )
}
export default ProductVideo
