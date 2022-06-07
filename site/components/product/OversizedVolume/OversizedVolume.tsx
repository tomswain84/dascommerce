/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading?: string
  title?: string
  description?: string
  image?: {
    src: string
    alt?: string,
    blend?: boolean
  }
}
const OversizedVolume: VFC<Props> = ({ heading, title, description, image }) => {
  return (
    <section id="mediaControls" className="bg-gray-lighter">
      <div className="container-boxed">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img className={`mb-5 mb-md-0 pe-3 breakout img-fluid ${image?.blend ? 'blend-darken' : ''}`} src={image ? image.src : '/images/product-images/product-details/4-professional/img-dk4-oversized_volume_knob.png'} alt="Oversized Volume Knob" />
          </div>
          <div className="col-12 col-md-6">
            <figure className="heading mb-0">
              <figcaption>
                <h1 className="m-0 p-0 text-red">{heading || 'Oversized Volume Knob'}</h1>
                <h3 className="mt-0 p-0 oswald fw-bold">{title || 'and Dedicated Media Controls'}</h3>
              </figcaption>
              <p dangerouslySetInnerHTML={{ __html: description || `With its large volume knob, Das Keyboard 4 allows users to quickly adjust volume while on a Skype call, in a Google hangout, or streaming online music. The Das Keyboard 4 also provides quick access to dedicated media controls such as mute, play, pause, next and previous track. A quick-access instant sleep button has been added to save energy while going to lunch or attending meetings.` }} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OversizedVolume