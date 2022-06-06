/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

const ProductPerformance: VFC<{}> = () => {
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <img className="img-fluid" src="/images/product-images/product-details/x50q/X50_3_angle_right.jpg" alt="Keyboard Right Angle" />
          </div>
          <div className="col-md">
            <h2 className="text-red">Performance Meets Design</h2>
            <p className="mb-5">Whether on your desk at work or at home, the X50Q looks stunning and delivers fast precision keystrokes that help you get the job done.</p>
            <div className="row">
              <div className="col">
                <figure className="text-center">
                  <img className="img-fluid mb-3" src="/images/gamma-zulu-badge.png" alt="Gamma Zulu 100M Lifecycle" />
                  <figcaption className="small">World's longest lasting switches</figcaption>
                </figure>
              </div>
              <div className="col">
                <figure className="text-center">
                  <img className="img-fluid mb-3" src="/images/color-badge.png" alt="Enhanced 16.8M Per Key RGB" />
                  <figcaption className="small">2x ultra enhanced brightness</figcaption>
                </figure>
              </div>
              <div className="col">
                <figure className="text-center">
                  <img className="img-fluid mb-3" src="/images/aluminum-badge.png" alt="Aluminum 26.982" />
                  <figcaption className="small">Anodized aluminum top panel</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductPerformance
