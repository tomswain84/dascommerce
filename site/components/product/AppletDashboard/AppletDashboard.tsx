/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  title: string
  description: string
  image: {
    src: string
    alt?: string
    rounded?: boolean
  }
}
const AppletDashboard: VFC<Props> = ({ title, description, image }) => {
  return (
    <section className="bg-gray-darker dark-section section-pad">
      <div className="container-boxed">
        <div id="appletDashboard" className="row align-items-center justify-content-between">
          <div className="col-12 col-xl-8 col-xxl-6">
            <h2 className="text-red">
              <span className="animated-cursor cursor-light">
                {title}
              </span>
            </h2>
            <p className="mt-3" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="col-12 col-xl-4 col-xxl-6">
            <img className={`img-fluid blend-plus-lighter ${image.rounded ? 'rounded' : ''}`} src={image.src} alt={image.alt || "Applet Dashboard"} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AppletDashboard