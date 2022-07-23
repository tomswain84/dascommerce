/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState, VFC } from "react"
import products from '@data/products.json'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { Product } from "@interfaces/product"
import stripHTML from "@lib/strip-html"
import PageTitle from "@components/core/PageTitle"
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BestSelling from "@components/product/BestSelling"
import FrequentlyBoughtTogether from "@components/product/FrequentlyBoughtTogether"
import commerce from "@lib/api/commerce"
import { ProductTypes } from "@commerce/types/product"
import { convertProductId, convertProductVariantId } from "@lib/convert-ids"

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async ({ locales }) => {
  const paths: Array<{ params: { slug: string }, locale: string }> = []
  products.forEach(product => {
    if (locales) {
      for (const locale of locales) {
        paths.push({
          params: {
            slug: product.slug,
          },
          locale
        })
        paths.push({
          params: {
            slug: `refurbished-${product.slug}`,
          },
          locale
        })
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

interface ProductWithShopifyData extends Product {
  variants?: Array<ProductTypes['product']['variants'][0] & {
    name: string
    price: number
  }>
  images?: Array<{
    url: string
    altText: string
    width: number
    height: number
  }>
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  let product = (products as ProductWithShopifyData[]).find(product => product.slug === params?.slug || product.slug === params?.slug?.replace(/^refurbished-/, ''))
  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }
  const isRefurbished = !!params?.slug && typeof params.slug === 'string' && /^refurbished-/g.test(params.slug)
  const { product: shopifyProduct } = await commerce.getProduct({
    variables: {
      slug: isRefurbished ? product.refurbished.handle : product.handle,
    }
  })
  if (shopifyProduct) {
    if (isRefurbished) {
      product.refurbished.price = shopifyProduct.price.value
    }
    else {
      product.price = shopifyProduct.price.value
    }
    product.variants = (shopifyProduct as unknown as ProductWithShopifyData).variants
    product.variantId = parseInt(convertProductVariantId(shopifyProduct.variants[0].id))
    product.images = (shopifyProduct as unknown as ProductWithShopifyData).images
    const shopifyId = convertProductId(shopifyProduct.id)
    if (shopifyId) {
      product.shopifyId = parseInt(shopifyId)
    }
  }
  return {
    props: {
      title: `Das Keyboard ${product?.name}`,
      bodyId: product?.name?.toLowerCase(),
      bodyClass: `commerce keyboards`,
      product,
      isRefurbished,
    },
  }
}

interface Props {
  title: string
  bodyId: string
  bodyClass: string
  product: ProductWithShopifyData,
  isRefurbished: boolean
}
const ProductCommerce: VFC<Props> = ({ product, isRefurbished }) => {
  const [quantity, setQuantity] = useState(1)
  const incrQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])
  const decrQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }, [quantity])

  const [selectedVariant, setSelectedVariant] = useState(product.variants ? product.variants[0] : null)
  const variantPrice = selectedVariant?.price || (isRefurbished ? product.refurbished.price : product.price)
  const hasSwitchType = product.variants && product.variants.find(variant => !!variant.options.find(opt => opt.displayName === 'switch type'))

  const selectedVariantId = selectedVariant ? convertProductVariantId(selectedVariant.id) : ''
  const atcLink = `https://shop.daskeyboard.com/cart/add?id=${selectedVariantId}&quantity=${quantity}`

  const mainImage = product.images?.[0]?.url || product.image

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://na-library.klarnaservices.com/lib.js'
    script.setAttribute('data-client-id', 'acfb1e1e-8879-5051-bc94-5c9a72e324fc')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const orderTotal = (variantPrice * quantity).toFixed(2)

  return (
    <>
      <PageTitle
        title={`Das Keyboard ${product.name}`}
        type="product"
        product={{
          slug: product.slug,
          price: product.price,
          refurbished: product.refurbished,
          currency: product.currency,
        }}
        showStartingAt
        isRefurbished={isRefurbished}
      />
      <main className="content-wrap">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col-md-6 col-lg-8 pb-md-0">
                <div className="row">
                  <div className="col text-center text-md-start">
                    <Link className="btn btn-outline-primary text-gray-dark ms-md-2" href={`/products/daskeyboard/${product.slug}`} title="Back to Product Details">
                      <i><FontAwesomeIcon icon="backward-step" className="me-2" /></i>
                      Back to Product Details
                    </Link>
                  </div>
                </div>
                <img
                  src={mainImage} alt={stripHTML(product.name)}
                  style={{
                    width: '100%',
                    height: 700,
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
                {isRefurbished && (
                  <p className="alert alert-warning mt-3 fw-bold small fst-italic">
                    All Certified Refurbished orders are non-refundable. Certified Refurbished products are pre-owned, certified to be free of defects, and come with a 30-day limited hardware warranty. If the product is defective or does not work, a replacement will be sent. Please refer to our guarantee page at <Link href='/guarantee' className="text-black">www.daskeyboard.com/guarantee</Link>
                  </p>
                )}
              </div>
              <div id="sidebar" className="col-md-6 col-lg-4">
                <div className="sidebar-content">
                  <h2>
                    Das Keyboard {product.name} &nbsp;
                    {isRefurbished && (<>(Certified Refurbished)</>)}
                  </h2>
                  <div className="mt-1 mb-4">
                    <span className="star-rating text-red small">
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <span className="text-gray-dark ms-2 small">{Math.ceil(Math.random() * 100)} Reviews</span>
                    </span>
                  </div>

                  <div className="d-flex flex-column my-3 pe-5">
                    {/* <!-- Placement v2 --> */}
                    <klarna-placement
                      data-key="credit-promotion-auto-size"
                      data-locale="en-US"
                      data-purchase-amount={parseFloat(orderTotal) * 100}
                    />
                    {/* <!-- end Placement --> */}
                    {/* <small>4 interest-free payments of {product.currency}{Number(product.price / 4).toFixed(2)} with <strong>Klarna</strong></small>
                    <a className="text-red fw-bold mt-1" href="#"><small>Learn More</small></a> */}
                  </div>

                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon='heart' className="me-2" />
                    Add to wishlist
                  </button>

                  {hasSwitchType && (
                    <div className="option-switches mt-5">
                      <h3 className="sidebar-title">Select Switch Type</h3>
                      {product.variants && product.variants.map(variant => (
                        <div key={variant.id} className="form-check my-3 ps-0">
                          <input
                            className="form-check-input visually-hidden"
                            type="radio" name="flexRadioDefault"
                            id={`switch-${variant.id}`}
                            checked={!!selectedVariant && selectedVariant.id === variant.id}
                            onChange={() => setSelectedVariant(variant)}
                          />
                          <label className="switch-select form-check-label d-flex align-items-center" htmlFor={`switch-${variant.id}`}>
                            {/* <img className="select-image me-3" src={''} alt={variant.name} /> */}
                            <span className="label-wrap">
                              <span className="oswald">{variant.name.split('-')[0].trim()}</span>
                              {variant.name.includes('-') && (
                                <>
                                  <span className="mx-1">-</span>
                                  <small>{variant.name.split('-')[1].trim()}</small>
                                </>
                              )}
                              <strong className="ms-auto">{variant.price}</strong>
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="cartCTA mt-5">
                    <h3 className="sidebar-title">
                      Order Total:
                      <span className="text-red ms-2">{product.currency}{orderTotal}</span>
                    </h3>
                    <div className="d-flex">
                      <div className="d-flex bg-black text-white px-3 py-2 rounded-1 fs-sm fw-bold align-items-center" role='button'>
                        <FontAwesomeIcon icon='step-backward' onClick={decrQuantity} />
                        <span className="mx-3 user-select-none">{quantity}</span>
                        <FontAwesomeIcon icon='step-forward' onClick={incrQuantity} />
                      </div>
                      <a
                        className="btn btn-blue rounded-2 ms-2 w-100"
                        href={atcLink}
                        target='_self' rel='noreferrer'
                      >
                        Add To Cart
                        <FontAwesomeIcon icon='cart-arrow-down' className="ms-2" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <BestSelling isCommerce />
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <FrequentlyBoughtTogether product={product} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default ProductCommerce