import type { VFC, FC } from "react"
import { Product } from "@components/product/ProductCard/ProductCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ListItem from "@components/core/ListItem"

interface Props {
  product: Product
}
const TechSpecs: VFC<Props> = ({ product }) => {
  const totalBlocks = product.specs?.length || 1
  return (
    <div className="modal fade content-container" id="techSpecs" tabIndex={-1} aria-labelledby="techSpecs" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-gray-darker">
          <div className="modal-header bg-gray-dark text-white border-bottom">
            <h5 className="modal-title" id="techSpecs">Tech Specs</h5>
            <a href="#" className="btn btn-outline-primary" data-bs-dismiss="modal">
              Close
              <i><FontAwesomeIcon icon="xmark" className="ms-2" /></i>
            </a>
          </div>
          <div className="modal-body bg-gray-darker text-white">
            <div className="row">
              <div className="col">
                <h2>Das Keyboard {product.name} </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {product.specs && product.specs.map((specs, index) => (
                  <div key={index}>
                    <h3 className="text-red mb-2">{specs.title}</h3>
                    <ul className="list-unstyled">
                      {specs.items.map((item, index) => (
                        <>
                          {typeof item === 'string' && (
                            <ListItem key={index}>
                              <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </ListItem>
                          )}
                          {Array.isArray(item) && (
                            <ul className="list-unstyled my-2">
                              {item.map((subItem, subIndex) => (
                                <ListItem key={subIndex}>
                                  <span dangerouslySetInnerHTML={{ __html: subItem }}></span>
                                </ListItem>
                              ))}
                            </ul>
                          )}
                        </>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer bg-gray-dark border-top">
          </div>
        </div>
      </div>
    </div>
  )
}
export default TechSpecs