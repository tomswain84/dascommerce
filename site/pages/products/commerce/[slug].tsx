/* eslint-disable @next/next/no-img-element */
import { useCallback, useState, VFC } from "react"
import { useRouter } from "next/router"
import products from '@data/products.json'
import { GetStaticPaths, GetStaticProps } from "next"
import { Product } from "@interfaces/product"
import stripHTML from "@lib/strip-html"
import PageTitle from "@components/core/PageTitle"
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BestSelling from "@components/product/BestSelling"
import FrequentlyBoughtTogether from "@components/product/FrequentlyBoughtTogether"

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

export async function getStaticProps(context: { params: { slug: string } }) {
  const product = products.find(product => product.slug === context.params.slug)
  return {
    props: {
      title: `Das Keyboard ${product?.name}`,
      bodyId: product?.name?.toLowerCase(),
      bodyClass: `commerce keyboards ${product?.series?.toLowerCase()}-series`,
    },
  }
}

const ProductCommerce: VFC = () => {
  const switchTypes = [
    {
      name: "Clicky",
      label: 'Cherry MX Blue',
      value: 'clicky',
      image: '/images/commerce_options-switch_type-clicky.png'
    },
    {
      name: 'Soft Tactile',
      label: 'Cherry MX Brown',
      value: 'tactile',
      image: '/images/commerce_options-switch_type-soft_tactile.png'
    },
    {
      name: 'Smooth Linear',
      label: 'Cherry MX Red',
      value: 'linear',
      image: '/images/commerce_options-switch_type-smooth_linear.png'
    }
  ]

  const [quantity, setQuantity] = useState(1)
  const incrQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])
  const decrQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }, [quantity])

  const [selectedType, setSelectedType] = useState(switchTypes[0].value)
  const router = useRouter()
  const { slug } = router.query
  const product = products.find(item => item.slug === slug) as Product
  if (!product) {
    return null
  }
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
                <div className="row mb-5">
                  <div className="col text-center text-md-start">
                    <Link className="btn btn-outline-primary text-gray-dark ms-md-2" href={`/products/daskeyboard/${product.slug}`} title="Back to Product Details">
                      <i><FontAwesomeIcon icon="backward-step" className="me-2" /></i>
                      Back to Product Details
                    </Link>
                  </div>
                </div>
                <img className="img-fluid" src={product.image} alt={stripHTML(product.name)} />
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

                  <div className="option-switches my-5">
                    <h3 className="sidebar-title">Select Switch Type</h3>
                    {switchTypes.map(type => (
                      <div key={type.value} className="form-check my-3 ps-0">
                        <input
                          className="form-check-input visually-hidden"
                          type="radio" name="flexRadioDefault"
                          id={`switch-${type.value}`}
                          checked={selectedType === type.value}
                          onChange={() => setSelectedType(type.value)}
                        />
                        <label className="switch-select form-check-label d-flex align-items-center" htmlFor={`switch-${type.value}`}>
                          <img className="select-image me-3" src={type.image} alt={type.name} />
                          <span className="label-wrap">
                            <span className="oswald me-2">{type.name}</span>
                            <small>{type.label}</small>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="cartCTA">
                    <h3 className="sidebar-title">
                      Order Total:
                      <span className="text-red ms-2">{product.currency}{product.price * quantity}</span>
                    </h3>
                    <div className="d-flex">
                      <div className="d-flex bg-black text-white px-3 py-2 rounded-1 fs-sm fw-bold align-items-center" role='button'>
                        <FontAwesomeIcon icon='step-backward' onClick={decrQuantity} />
                        <span className="mx-3 user-select-none">{quantity}</span>
                        <FontAwesomeIcon icon='step-forward' onClick={incrQuantity} />
                      </div>
                      <button className="btn btn-blue rounded-2 ms-2 w-100">
                        Add To Cart
                        <FontAwesomeIcon icon='cart-arrow-down' className="ms-2" />
                      </button>
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