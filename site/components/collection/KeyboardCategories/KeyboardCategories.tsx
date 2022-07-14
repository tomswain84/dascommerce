import type { VFC } from "react"
import CollectionCard from "@components/collection/CollectionCard"
import useTrans from "lang/useTrans"

const KeyboardCategories: VFC = () => {
  const { say } = useTrans()
  const collections = [
    {
      name: say('smart_rgb'),
      filter: 'smartrgb',
      image: '/images/cat-mechanical_keyboards-smart_rgb.png'
    },
    {
      name: say('for_pc'),
      filter: 'forpc',
      image: '/images/cat-mechanical_keyboards-for_pc.png'
    },
    {
      name: say('for_mac'),
      filter: 'formac',
      image: '/images/cat-mechanical_keyboards-for_mac.png'
    },
    {
      name: say('for_linux'),
      filter: 'forlinux',
      image: '/images/cat-mechanical_keyboards-for_linux.png'
    },
    {
      name: say('mechanical_Keyboards_category-5'),
      filter: 'backlit',
      image: '/images/cat-mechanical_keyboards-backlit.png'
    },
    {
      name: say('refurbished'),
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