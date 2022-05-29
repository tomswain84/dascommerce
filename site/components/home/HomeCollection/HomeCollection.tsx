import CollectionCard from "@components/collection/CollectionCard"
import type { VFC } from "react"

const HomeCollection: VFC = () => {
  return (
    <>
      <h2>A MECHANICAL KEYBOARD</h2>
      <h4>FOR EVERY BADASS.</h4>
      <button>SHOP ALL KEYBOARDS</button>
      {/* collection list */}
      <div className="row">
        {
          [1, 2, 3, 4, 5, 6].map(i => (
            <div className="col-6 mt-4" key={i} >
              <CollectionCard name={`Collection #${i}`} />
            </div>
          ))
        }
      </div>
    </>
  )
}
export default HomeCollection