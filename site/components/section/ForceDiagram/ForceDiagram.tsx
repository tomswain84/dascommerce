/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

const ForceDiagram: VFC<{}> = () => {
  return (
    <figure className="text-center text-md-start">
      <img className="img-fluid" src="/images/diagram-switch-brown.png" alt="Force diagram soft (Brown)" />
      <h2 className="mt-3">Force diagram soft (Brown)</h2>
    </figure>
  )
}
export default ForceDiagram
