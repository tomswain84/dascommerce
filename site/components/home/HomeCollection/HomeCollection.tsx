import KeyboardCategories from "@components/collection/KeyboardCategories"
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

const HomeCollection: VFC = () => {
  return (
    <>
      <section id="categoryKeyboards" className="bg-white section-pad mt-5 mt-xl-0">
        <div className="container-boxed mt-xxl-5 pt-xxl-5">
          <div className="row mt-xxl-5">
            <div className="col-12">
              <figure className="heading text-center mb-0">
                <figcaption>
                  <h1>
                    <small>A Mechanical Keyboard</small>
                    <br />For Every Badass.
                  </h1>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 d-flex py-4">
              <Link className="btn btn-outline-primary text-gray-dark mx-auto" title="Shop All Keyboards" href="/products/category/mechanical-keyboards?filter=all">
                Shop All Keyboards
                <i>
                  <FontAwesomeIcon className="ms-2" icon='plus' />
                </i>
              </Link>
            </div>
          </div>
          <KeyboardCategories />
        </div>
      </section >
    </>
  )
}
export default HomeCollection
