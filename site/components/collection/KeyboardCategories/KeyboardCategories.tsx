import type { VFC } from "react"
import CollectionCard from "@components/collection/CollectionCard"

const KeyboardCategories: VFC = () => {
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
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-2">
      {
        collections.map((collection, index) => (
          <CollectionCard key={index} collection={collection} />
        ))
      }
    </div>
  )
}
export default KeyboardCategories