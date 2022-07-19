/* eslint-disable @next/next/no-img-element */
import useTrans from "lang/useTrans"
import type { VFC } from "react"

interface Props {
  title?: string
  image: {
    src: string
    alt?: string
  }
  compatible?: {
    mac: boolean
    windows: boolean
    linux: boolean
  }
}
const ProductCompatibility: VFC<Props> = (props) => {
  const { say } = useTrans()
  const title = props.title || say('cross-platform-software')
  const compatible = props.compatible || { mac: true, windows: true, linux: true }
  return (
    <section id="compatibility" className="bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <img className="img-fluid breakout-left" src={props.image.src} alt={props.image.alt || props.title} />
          </div>
          <div className="col-md d-flex align-items-center justify-content-center">
            <div className="row text-center p-3 p-md-0">
              <div className="col-12 pb-5">
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
              </div>
              {compatible.mac && (
                <div className="col">
                  <img className="img-fluid" src="/images/compatibility-mac.png" alt="Compatible with Mac OS" />
                  <h6 className="mt-3">macOS Mode</h6>
                </div>
              )}
              {compatible.windows && (
                <div className="col">
                  <img className="img-fluid" src="/images/compatibility-windows.png" alt="Compatible with Windows" />
                  <h6 className="mt-3">Windows</h6>
                </div>
              )}
              {compatible.linux && (
                <div className="col">
                  <img className="img-fluid" src="/images/compatibility-linux.png" alt="Compatible with Linux" />
                  <h6 className="mt-3">Ubuntu</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductCompatibility
