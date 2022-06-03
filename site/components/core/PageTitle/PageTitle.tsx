import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import type { VFC } from 'react'

interface Props {
  title: string,
  type: 'product' | 'category' | 'page',
  product?: {
    price: number,
    currency: '$' | string,
    canBuy?: boolean,
    canDownload?: boolean,
    buyUrl?: string,
  }
}
const defaultProps: Props = {
  title: '',
  type: 'page',
  product: {
    price: 0,
    currency: '$',
    canBuy: true,
    canDownload: false,
  }
}
const PageTitle: VFC<Props> = (props = defaultProps) => {
  const { title, type, product } = props
  const isProduct = type === 'product' && typeof product == 'object'
  const isCategory = type === 'category'
  return (
    <section id="pageTitle" className="bg-gray-darker text-white">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center d-sm-flex align-items-center justify-content-between">
            <h1>
              {stripHTML(title, true)}
              {isProduct && product.price && product.currency && (
                <span className="price text-red small d-block d-md-inline">
                  {product.currency}{product.price}
                </span>
              )}
            </h1>
            {isProduct && (
              <div id="productCTA" className="mb-4 mb-sm-0 d-sm-flex align-items-center justify-content-end d-none">
                {product.canBuy && (
                  <a id="buyNow" className="btn btn-blue" href={product.buyUrl} title="Buy Now">Buy Now</a>
                )}
                {product.canDownload && (
                  <a id="dlQsoftware" className="btn btn-outline-primary ms-3" href="https://www.daskeyboard.io/" target="_blank" title="Download Software" rel="noreferrer">
                    <span className="d-none d-lg-inline">Download</span>
                    Software
                    <FontAwesomeIcon icon='download' className='ms-2' />
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