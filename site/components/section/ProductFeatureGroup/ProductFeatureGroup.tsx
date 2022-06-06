import type { VFC } from "react"
import { ProductFeatureProps } from "@components/section/ProductFeature/ProductFeature"
import ProductFeature from "../ProductFeature"
import SwitchGammaZulu from "../SwitchGammaZulu"

interface Heading {
  type: 'heading'
  heading: string
}
interface Content extends ProductFeatureProps {
  type: 'content'
}
interface Switch {
  type: 'switch'
}
interface Props {
  rows: Array<Heading | Content | Switch>
}
const ProductFeatureGroup: VFC<Props> = ({ rows }) => {
  return (
    <section id="premiumMaterials" className="bg-gray-darker dark-section section-pad">
      {/* premiumMaterials */}
      <div className="container">
        {rows.map((row, index) => (
          <div key={index}>
            {row.type === 'heading' && (
              <div className={`row mb-4 ${index > 0 ? 'mt-5' : ''}`}>
                <div className="col text-center">
                  <h2>{row.heading}</h2>
                </div>
              </div>
            )}
            {row.type === 'content' && (
              <ProductFeature {...row} />
            )}
            {row.type === 'switch' && <SwitchGammaZulu />}
          </div>
        ))}
      </div>
    </section>
  )
}
export default ProductFeatureGroup
