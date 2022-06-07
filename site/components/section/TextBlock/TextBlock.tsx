import type { VFC } from "react"

interface Props {
  title: string
  description: string
}
const TextBlock: VFC<Props> = ({ title, description }) => {
  return (
    <section className="bg-gray-lighter section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
            <figure className="heading text-center mt-5">
              <figcaption>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
              </figcaption>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TextBlock
