import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const AppletsCTA: VFC<{}> = () => {
  const { say } = useTrans()
  return (
    <section className="bg-gray-darker dark-section section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center">
            <i className="text-gray-light d-block fs-1" >
              <FontAwesomeIcon icon='code' />
            </i>
            <h2 className="text-white my-5"><span className="animated-cursor cursor-light">{say("rest-api-title")}</span></h2>
            <a className="btn btn-primary" href="https://www.daskeyboard.io/" target="_blank" title={say("show-the-code")} rel="noreferrer">{say("show-the-code")}</a>
          </div>
        </div>
      </div>
    </section>

  )
}
export default AppletsCTA
