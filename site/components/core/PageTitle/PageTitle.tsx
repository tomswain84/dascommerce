import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import type { VFC } from 'react'
import { Product } from '@interfaces/product'

interface Props {
  title: string,
  type: 'product' | 'category' | 'page',
  product?: Product & {
    canBuy?: boolean,
    canDownload?: boolean,
  }
}
const defaultProps = {
  title: '',
  type: 'page',
  product: {
    canBuy: true,
    canDownload: false,
  }
}
const PageTitle: VFC<Props> = (props) => {
  const { title, type, product } = props
  let { canBuy, canDownload } = product || defaultProps.product
  const isProduct = type === 'product'
  const isCategory = type === 'category'
  let buyUrl = ''
  // if (canBuy) buyUrl = `/products/commerce/${product?.slug}`
  if (canBuy) buyUrl = `https://shop.daskeyboard.com/cart/add?id=${props?.product?.variantId}`
  return (
    <section id="pageTitle" className="bg-gray-darker text-white">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center d-sm-flex align-items-center justify-content-between">
            <h1>
              {stripHTML(title, true)}
              {isProduct && product && (
                <span className="price text-red small d-block d-md-inline ms-2">
                  {product.currency}{product.price}
                </span>
              )}
            </h1>
            {isProduct && product && (
              <div id="productCTA" className="mb-4 mb-sm-0 d-sm-flex align-items-center justify-content-end d-none">
                {canBuy && (
                  <a id="buyNow" className="btn btn-blue" href={buyUrl} title="Buy Now" target="_blank" rel="noreferrer">Buy Now</a>
                )}
                {canDownload && (
                  <a id="dlQsoftware" className="btn btn-outline-primary ms-3" href="https://www.daskeyboard.io/" target="_blank" title="Download Software" rel="noreferrer">
                    <span className="d-none d-lg-inline me-1">Download</span>
                    Software
                    <i>
                      <FontAwesomeIcon icon='download' className='ms-2' />
                    </i>
                  </a>
                )}
              </div>
            )}
            {isCategory && (
              <div id="headerCTA" className="pb-3 py-md-4">
                <a className="btn btn-primary me-sm-1" href="/products" title="Shop By Category">
                  <span className="d-none d-sm-inline">Shop </span>By Category
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageTitle