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
    <div className="text-center">
      <h2 className="text-red" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="fw-bold fs-3 animated-cursor cursor-dark">{description}</p>
      <iframe className="rounded" src={video.src} height={500} width='100%' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  )
}
export default ProductVideo
