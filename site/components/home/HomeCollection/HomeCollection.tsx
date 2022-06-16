/* eslint-disable @next/next/no-img-element */
import CollectionCard from "@components/collection/CollectionCard"
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

const HomeCollection: VFC = () => {
  const collections = [
    {
      name: 'SMART RGB',
      filter: 'smartrgb',
      image: '/images/cat-mechanical_keyboards-smart_rgb.png'
    },
    {
      name: 'FOR PC',
      filter: 'forpc',
      image: '/images/cat-mechanical_keyboards-for_pc.png'
    },
    {
      name: 'FOR MAC',
      filter: 'formac',
      image: '/images/cat-mechanical_keyboards-for_mac.png'
    },
    {
      name: 'FOR LINUX',
      filter: 'forlinux',
      image: '/images/cat-mechanical_keyboards-for_linux.png'
    },
    {
      name: 'BACKLIT',
      filter: 'backlit',
      image: '/images/cat-mechanical_keyboards-backlit.png'
    },
    {
      name: 'REFURBISHED',
      filter: 'refurbished',
      image: '/images/cat-mechanical_keyboards-refurbished.png'
    }
  ]
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-2">
            {
              collections.map((collection, index) => (
                <CollectionCard key={index} collection={collection} />
              ))
            }
          </div>
        </div>
      </section >
    </>
  )
}
export default HomeCollection
