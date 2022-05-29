import type { VFC } from "react"

const CollectionCard: VFC<{ name: string }> = ({ name }) => {
  return (
    <div className="card p-3">
      <h3>COLLECTION CARD</h3>
      <span className="card-title">DAS KEYBOARD</span>
      <span className="card-text">{ name }</span>
    </div>
  )
}
export default CollectionCard