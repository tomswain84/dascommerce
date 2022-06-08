import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import type { VFC } from 'react'

interface Props {
  title: string,
  type: 'product' | 'category' | 'page',
  product?: {
    price: number,
    currency?: '$' | string,
    canBuy?: boolean,
    canDownload?: boolean,
    buyUrl?: string,
  }
}
const defaultProps = {
  title: '',
  type: 'page',
  product: {
    price: 0,
    currency: '$',
    canBuy: true,
    canDownload: false,
    buyUrl: '',
  }
}
const PageTitle: VFC<Props> = (props) => {
  const { title, type, product } = props
  let { price, currency, canBuy, canDownload, buyUrl } = product || defaultProps.product
  if (!currency) currency = defaultProps.product?.currency
  const isProduct = type === 'product'
  const isCategory = type === 'category'
  return (
    <section id="pageTitle" className="bg-gray-darker text-white">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center d-sm-flex align-items-center justify-content-between">
            <h1>
              {stripHTML(title, true)}
              {isProduct && product && price && currency && (
                <span className="price text-red small d-block d-md-inline ms-2">
                  {currency}{price}
                </span>
              )}
            </h1>
            {isProduct && product && (
              <div id="productCTA" className="mb-4 mb-sm-0 d-sm-flex align-items-center justify-content-end d-none">
                {canBuy && (
                  <a id="buyNow" className="btn btn-blue" href={buyUrl} title="Buy Now">Buy Now</a>
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