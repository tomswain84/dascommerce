/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading: string
  background?: 'light' | 'white'
  extras: Array<{
    title: string
    description: string
    image: {
      src: string
    }
  }>
}
const ProductExtra: VFC<Props> = ({ heading, background, extras }) => {
  const backgroundClass = background === 'white' ? 'bg-white' : 'bg-gray-lighter'
  return (
    <section className={`section-pad ${backgroundClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 pb-5">
            <h2 className="text-center" dangerouslySetInnerHTML={{ __html: heading }} />
          </div>
          {extras.map((extra, index) => (
            <div className="col-12 col-lg-6" key={index}>
              <img className="img-fluid rounded border w-100" src={extra.image.src} alt={extra.title} />
              <h3 className="text-red mt-4" dangerouslySetInnerHTML={{ __html: extra.title }} />
              <p dangerouslySetInnerHTML={{ __html: extra.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProductExtra
