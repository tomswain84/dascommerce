import type { VFC } from "react"
import SwitchCherryBlue from "../SwitchCherryBlue"
import SwitchCherryBrown from "../SwitchCherryBrown"

interface Props {
  brown?: {
    description: string
  }
  blue?: {
    description: string
  }
}
const SwitchCherryBoth: VFC<Props> = ({ brown, blue }) => {
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-12 col-sm-6">
            <SwitchCherryBrown description={brown ? brown.description : ''} />
          </div>
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
            <SwitchCherryBlue description={blue ? blue.description : ''} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SwitchCherryBoth