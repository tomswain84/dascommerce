import type { VFC } from "react"
import SwitchCherryBlue from "../SwitchCherryBlue"
import SwitchCherryBrown from "../SwitchCherryBrown"

const SwitchCherryBoth: VFC = () => {
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-12 col-sm-6">
            <SwitchCherryBrown />
          </div>
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
            <SwitchCherryBlue />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SwitchCherryBoth