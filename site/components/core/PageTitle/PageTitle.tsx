import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import type { VFC } from 'react'
import { Product } from '@interfaces/product'
import Link from '../Link'

interface Props {
  title: string,
  type: 'product' | 'category' | 'page',
  product?: Partial<Product> & {
    canBuy?: boolean,
    canDownload?: boolean,
    downloadText?: string,
  },
  showStartingAt?: boolean,
  isRefurbished?: boolean,
  onClickTitle?: () => void
}
const defaultProps = {
  title: '',
  type: 'page',
  product: {
    canBuy: true,
    canDownload: false,
    downloadText: 'Software',
  },
  showStartingAt: false,
  isRefurbished: false
}
const PageTitle: VFC<Props> = (props) => {
  const { title, type, product, showStartingAt } = props
  let { canBuy, canDownload } = product || defaultProps.product
  const downloadText = product?.downloadText || defaultProps.product.downloadText
  const isRefurbished = props.isRefurbished || defaultProps.isRefurbished
  const isProduct = type === 'product'
  const isCategory = type === 'category'
  let buyUrl = ''
  if (canBuy) buyUrl = `/products/commerce/${isRefurbished ? 'refurbished-' : ''}${product?.slug}`
  // if (canBuy) buyUrl = `https://shop.daskeyboard.com/cart/add?id=${props?.product?.variantId}`
  const onClickTitle = () => {
    if (props.onClickTitle) props.onClickTitle()
  }
  return (
    <section id="pageTitle" className="bg-gray-darker text-white">
      <div className="container-boxed">
        <div className="row">
          <div className="col text-center d-sm-flex align-items-center justify-content-between">
            <div className='text-start'>
              <h1
                className={showStartingAt ? 'text-red' : 'text-white'}
                style={{ cursor: props.onClickTitle ? 'pointer' : 'initial' }}
                onClick={onClickTitle}
              >
                {stripHTML(title, true)}
                {isProduct && product && (
                  <>
                    {isRefurbished ? (
                      <>
                        <span className="price text-secondary text-decoration-line-through small d-block d-md-inline ms-4">
                          {product.currency}{product.price}
                        </span>
                        <span className="price text-red small d-block d-md-inline ms-2">
                          {product.currency}{product.refurbished?.price}
                        </span>
                      </>
                    ) : (
                      <span className="price text-red small d-block d-md-inline ms-2">
                        {product.currency}{product.price}
                      </span>
                    )}
                  </>
                )}
                {isRefurbished && (
                  <p className='mb-0'>(Certified Refurbished)</p>
                )}
              </h1>
              {isProduct && product && showStartingAt && (
                <h4 className='fs-6 mt-n3 mb-4'>
                  STARTING AT
                  {isRefurbished ? (
                    <>
                      <span className="text-secondary text-decoration-line-through ms-2">{product.currency}{product.price}</span>
                      <span className="text-white ms-1">{product.currency}{product.refurbished?.price}</span>
                    </>
                  ) : (
                    <span className="ms-1">{product.currency}{product.price}</span>
                  )}
                </h4>
              )}
            </div>
            {isProduct && product && (
              <div id="productCTA" className="mb-4 mb-sm-0 d-sm-flex align-items-center justify-content-end d-none">
                {canBuy && (
                  // <a id="buyNow" className="btn btn-blue" href={buyUrl} title="Buy Now" target="_blank" rel="noreferrer">Buy Now</a>
                  <Link href={buyUrl} title="Buy Now" className='btn btn-blue'>Buy Now</Link>
                )}
                {canDownload && (
                  <a id="dlQsoftware" className="btn btn-outline-primary ms-3" href="https://www.daskeyboard.io/" target="_blank" title="Download Software" rel="noreferrer">
                    <span className="d-none d-lg-inline me-1">Download</span>
                    {downloadText}
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