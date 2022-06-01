import CollectionCard from "@components/collection/CollectionCard"
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
      <h2>A MECHANICAL KEYBOARD</h2>
      <h4>FOR EVERY BADASS.</h4>
      <button>SHOP ALL KEYBOARDS</button>
      {/* collection list */}
      <div className="row">
        {
          collections.map((collection, index) => (
            <div className="col-6 mt-4" key={index} >
              <CollectionCard collection={collection} />
            </div>
          ))
        }
      </div>
    </>
  )
}
export default HomeCollection
