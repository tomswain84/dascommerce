/* eslint-disable @next/next/no-img-element */
import { useState, VFC } from "react"
import { useRouter } from "next/router"
import products from '@data/products.json'
import { GetStaticPaths, GetStaticProps } from "next"
import ProductCard from "@components/product/ProductCard"
import { Product } from "@interfaces/product"
import stripHTML from "@lib/strip-html"
import PageTitle from "@components/core/PageTitle"
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      />
      <main className="content-wrap">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col-md-6 col-lg-8 pb-5 pb-md-0">
                <div className="row mb-5">
                  <div className="col text-center text-md-start">
                    <Link className="btn btn-outline-primary text-gray-dark ms-md-2" href={`/products/${product.slug}`} title="Back to Product Details">
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
                  <span className="star-rating text-red small">
                    <i className="fa-solid fa-star small"></i>
                    <i className="fa-solid fa-star small"></i>
                    <i className="fa-solid fa-star small"></i>
                    <i className="fa-solid fa-star small"></i>
                    <i className="fa-solid fa-star small"></i>
                    <span className="text-gray-dark ms-2 small">101 Reviews</span>
                  </span>

                  <div className="product-price">
                    <h3>
                      Starting At:
                      <span className="text-red ms-2">{product.currency}{product.price}</span>
                    </h3>
                  </div>


                  {/* <!-- Placement v2 --> */}
                  {/* <klarna-placement
                    data-key="credit-promotion-auto-size"
                    data-locale="en-US"
                    data-purchase-amount=""
                  ></klarna-placement> */}
                  {/* <!-- end Placement --> */}

                  <img className="img-fluid my-4" src="/images/temp-klarma.png" alt="Temp Klarma" />

                  <div className="option-switches mb-5">
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
                    <h3 className="sidebar-title">Order Total: <span className="text-red">(order total goes here)</span></h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default ProductCommerce