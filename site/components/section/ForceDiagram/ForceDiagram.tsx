/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface DiagramProps {
  title: string
  image: {
    src: string
    alt?: string
  }
}
const Diagram: VFC<DiagramProps> = ({ title, image }) => {
  return (
    <figure>
      <img className="img-fluid" src={image.src} alt={image.alt || title} />
      <h2 className="mt-3">{title}</h2>
    </figure>
  )
}
const ForceDiagramBrown = () => {
  return (
    <Diagram
      title="Force diagram soft (Brown)"
      image={{
        src: '/images/diagram-switch-brown.png'
      }}
    />
  )
}
const ForceDiagramBlue = () => {
  return (
    <Diagram
      title="Force diagram clicky (Blue)"
      image={{
        src: '/images/diagram-switch-blue.png'
      }}
    />
  )
}

interface Props {
  type: 'blue' | 'brown' | 'both'
}
const ForceDiagram: VFC<Props> = ({ type }) => {
  return (
    <>
      {type === 'brown' && <ForceDiagramBrown />}
      {type === 'blue' && <ForceDiagramBlue />}
      {type === 'both' && (
        <section className="bg-gray-darker dark-section section-pad">
          <div className="container-boxed">
            <div className="row text-center">
              <div className="col-12 col-sm-6">
                <ForceDiagramBrown />
              </div>
              <div className="col-12 col-sm-6">
                <ForceDiagramBlue />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default ForceDiagram
