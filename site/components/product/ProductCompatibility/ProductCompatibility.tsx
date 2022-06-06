/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

const ProductCompatibility: VFC<{}> = () => {
  return (
    <section id="compatibility" className="bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <img className="img-fluid breakout-left" src="/images/product-images/product-details/5qs/DK5Q_Qbutton_view.jpg" alt="DK5QS Q Button View" />
          </div>
          <div className="col-md d-flex align-items-center justify-content-center">
            <div className="row text-center p-3 p-md-0">
              <div className="col-12 pb-5">
                <h2>Operating System Compatibility</h2>
              </div>
              <div className="col">
                <img className="img-fluid" src="/images/compatibility-mac.png" alt="Compatible with Mac OS" />
                <h6 className="mt-3">Mac OS</h6>
              </div>
              <div className="col">
                <img className="img-fluid" src="/images/compatibility-windows.png" alt="Compatible with Windows" />
                <h6 className="mt-3">Windows</h6>
              </div>
              <div className="col">
                <img className="img-fluid" src="/images/compatibility-linux.png" alt="Compatible with Linux" />
                <h6 className="mt-3">Linux</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductCompatibility
