/* eslint-disable @next/next/no-img-element */
import { useCallback, useState, VFC } from "react"
import { useRouter } from "next/router"
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
import { convertProductVariantId } from "@lib/convert-ids"

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = products.map(product => ({
    params: {
      slug: product.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

interface ProductWithVariants extends Product {
  variants?: Array<ProductTypes['product']['variants'][0] & {
    name: string
    listPrice: number
  }>
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  let product = (products as ProductWithVariants[]).find(product => product.slug === params?.slug)
  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }
  const { product: shopifyProduct } = await commerce.getProduct({
    variables: {
      slug: product.handle,
    }
  })
  if (shopifyProduct) {
    product.price = shopifyProduct.price.value
    product.variants = (shopifyProduct as unknown as ProductWithVariants).variants
  }
  return {
    props: {
      title: `Das Keyboard ${product?.name}`,
      bodyId: product?.name?.toLowerCase(),
      bodyClass: `commerce keyboards`,
      product
    },
  }
}

interface Props {
  title: string
  bodyId: string
  bodyClass: string
  product: ProductWithVariants
}
const ProductCommerce: VFC<Props> = ({ product }) => {
  // const switchTypes = [
  //   {
  //     name: "Clicky",
  //     label: 'Cherry MX Blue',
  //     value: 'clicky',
  //     image: '/images/commerce_options-switch_type-clicky.png'
  //   },
  //   {
  //     name: 'Soft Tactile',
  //     label: 'Cherry MX Brown',
  //     value: 'tactile',
  //     image: '/images/commerce_options-switch_type-soft_tactile.png'
  //   },
  //   {
  //     name: 'Smooth Linear',
  //     label: 'Cherry MX Red',
  //     value: 'linear',
  //     image: '/images/commerce_options-switch_type-smooth_linear.png'
  //   }
  // ]

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
  const variantPrice = selectedVariant?.listPrice || product.price
  const hasSwitchType = product.variants && product.variants.find(variant => !!variant.options.find(opt => opt.displayName === 'switch type'))

  const selectedVariantId = selectedVariant ? convertProductVariantId(selectedVariant.id) : ''
  const atcLink = `https://shop.daskeyboard.com/cart/add?id=${selectedVariantId}&quantity=${quantity}`

  return (
    <>
      <PageTitle
        title={`Das Keyboard ${product.name}`}
        type="product"
        product={{
          slug: product.slug,
          price: product.price,
          currency: product.currency,
        }}
        showStartingAt
      />
      <main className="content-wrap">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col-md-6 col-lg-8 pb-5 pb-md-0">
                <div className="row">
                  <div className="col text-center text-md-start">
                    <Link className="btn btn-outline-primary text-gray-dark ms-md-2" href={`/products/daskeyboard/${product.slug}`} title="Back to Product Details">
                      <i><FontAwesomeIcon icon="backward-step" className="me-2" /></i>
                      Back to Product Details
                    </Link>
                  </div>
                </div>
                <img
                  src={product.image} alt={stripHTML(product.name)}
                  style={{
                    width: '100%',
                    height: 500,
                    objectFit: 'cover',
                    objectPosition: 'right'
                  }}
                />
              </div>
              <div id="sidebar" className="col-md-6 col-lg-4">
                <div className="sidebar-content">
                  <h2>Das Keyboard {product.name}</h2>
                  <div className="mt-1 mb-4">
                    <span className="star-rating text-red small">
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <FontAwesomeIcon icon='star' size='sm' />
                      <span className="text-gray-dark ms-2 small">101 Reviews</span>
                    </span>
                  </div>

                  <div className="d-flex flex-column my-3">
                    <small>4 interest-free payments of {product.currency}{Number(product.price / 4).toFixed(2)} with <strong>Klarna</strong></small>
                    <a className="text-red fw-bold mt-1" href="#"><small>Learn More</small></a>
                  </div>

                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon='heart' className="me-2" />
                    Add to wishlist
                  </button>

                  {/* <div className="product-price">
                    <h3>
                      Starting At:
                      <span className="text-red ms-2">{product.currency}{product.price}</span>
                    </h3>
                  </div> */}


                  {/* <!-- Placement v2 --> */}
                  {/* <klarna-placement
                    data-key="credit-promotion-auto-size"
                    data-locale="en-US"
                    data-purchase-amount=""
                  ></klarna-placement> */}
                  {/* <!-- end Placement --> */}

                  {/* <img className="img-fluid my-4" src="/images/temp-klarma.png" alt="Temp Klarma" /> */}

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
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="cartCTA mt-5">
                    <h3 className="sidebar-title">
                      Order Total:
                      <span className="text-red ms-2">{product.currency}{variantPrice * quantity}</span>
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
                <BestSelling />
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