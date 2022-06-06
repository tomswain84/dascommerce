/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

const Materials: VFC<{}> = () => {
  return (
    <section className="bg-white section-pad">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="text-red mb-4">Premium Materials</h2>
            <div className="row">
              <div className="col d-flex flex-wrap align-items-center justify-content-center">
                <figure className="text-center mx-3">
                  <img className="img-fluid mb-3" src="/images/product-images/product-details/4q/dk4q-badge-cherrymx.png" alt="Cherry MX RGB switches" />
                  <figcaption className="small">Cherry MX RGB switches</figcaption>
                </figure>
                <figure className="text-center mx-3">
                  <img className="img-fluid mb-3" src="/images/product-images/product-details/4q/dk4q-badge-aluminum.png" alt="Aluminum top case" />
                  <figcaption className="small">Aluminum top case</figcaption>
                </figure>
                <figure className="text-center mx-3">
                  <img className="img-fluid mb-3" src="/images/product-images/product-details/4q/dk4q-badge-usbports.png" alt="Two-port usb hub" />
                  <figcaption className="small">Two-port usb hub</figcaption>
                </figure>
                <figure className="text-center mx-3">
                  <img className="img-fluid mb-3" src="/images/product-images/product-details/4q/dk4q-badge-mediacontrols.png" alt="Dedicated media controls" />
                  <figcaption className="small">Dedicated media controls</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Materials
