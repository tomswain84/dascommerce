import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const AppletsCTA: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <section className="bg-gray-darker dark-section section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center">
            <i className="text-gray-light d-block fs-1" >
              <FontAwesomeIcon icon='code' />
            </i>
            <h2 className="text-white my-5"><span className="animated-cursor cursor-light" dangerouslySetInnerHTML={$html('rest-api-title')} /></h2>
            <a className="btn btn-primary" href="https://www.daskeyboard.io/" target="_blank" title={say("show-the-code", true)} rel="noreferrer" dangerouslySetInnerHTML={$html('show-the-code')} />
          </div>
        </div>
      </div>
    </section>

  )
}
export default AppletsCTA
