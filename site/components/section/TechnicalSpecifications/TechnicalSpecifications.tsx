import type { VFC } from "react"
import TechSpecs from "@components/product/TechSpecs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import products from "@data/products.json"
import { Product } from "@interfaces/product"

interface Props {
  userManual?: string
  productSlug: string
}
const TechnicalSpecifications: VFC<Props> = ({ userManual: _userManual, productSlug }) => {
  const userManual = _userManual || 'https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit'
  const product = products.find(prod => prod.slug === productSlug) as Product
  return (
    <section className="bg-gray-lighter section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
            <figure className="heading text-center mb-5">
              <figcaption>
                <h1>Technical <span className="text-red">Specifications</span>. </h1>
              </figcaption>
            </figure>
            <a className="btn btn-primary me-3" href={userManual} target="_blank" title="User Manual" rel="noreferrer">
              View User Manual
              <FontAwesomeIcon icon="file" className="ms-2" />
            </a>
            {/* <!-- Modal Trigger - Tech Specs --> */}
            <a className="btn btn-outline-primary text-gray-darker" href="#" title="Tech Specs" data-bs-toggle="modal" data-bs-target="#techSpecs">
              View Tech Specs
              <i><FontAwesomeIcon icon="list" className="ms-2" /></i>
            </a>
          </div>
          {/* <?php include '../products/product-details/product-specs/specs-daskeyboard-4-professional.php';?><!-- /keyboardSpects --> */}
          {product && (
            <TechSpecs product={product} />
          )}
        </div>
      </div>
    </section>
  )
}
export default TechnicalSpecifications
