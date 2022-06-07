import ProductHeader from "@components/product/ProductHeader"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductExtra from "@components/section/ProductExtra"
import ProductFaqs from "@components/section/ProductFaqs"
import ProductFeature from "@components/section/ProductFeature"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductHero from "@components/section/ProductHero"
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import type { VFC } from "react"

const Prime13: VFC = () => {
  return (
    <>
      <hr />
      <ProductHeader
        title="DAS KEYBOARD PRIME 13"
        price={129}
        currency={'$'}
        canBuy={true}
      />
      <hr />
      <ProductHero
        heading="MINIMALIST DESIGN,"
        title="WHITE BACKLIST CHERRY MX"
        hasPrice={true}
        price={129}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-angled-side-view.jpg'
        }}
      />
      <hr />
      <Banner
        content={{
          textAlign: "left",
          title: "CONNECT YOUR SOUL TO THE MACHINE",
          description: "Focus on your work: no-nonsense features to get the job done"
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-mecahnical-keybaord-front-view.jpg'
        }}
      />
      <hr />
      <Banner
        content={{
          textAlign: "center",
          title: `<span class="text-red">MINIMALIST DESIGN</span>`,
          description: "Start with pure lines sculpted in aluminum, add clean white backlit keys with a modern font face, and you get an incredibly efficient tool that helps get the job done."
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-side-view.jpg'
        }}
      />
      <hr />
      <Banner
        content={{
          textAlign: "center",
          title: `<span class="text-red">TYPE ANYWHERE, EVEN IN YOUR CAVE.</span>`,
          description: "The Das Keyboard Prime 13 wields white LED backlit keys with 7 levels of brightness. Plenty-enough settings even for desks located in challengingly-dark environments."
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-backligth-animated.gif'
        }}
      />
      <hr />
      <ProductExtra
        heading="USB Connectivity"
        extras={[
          {
            title: 'IMPROVED CABLE MANAGEMENT',
            description: 'With the extra-long braided cable and its rectangular shape, the Prime 13 keeps you knolling more then ever.',
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-braided-usb.jpg'
            }
          },
          {
            title: 'CONNECT ANY DEVICE WITH A USB PASS-THROUGH',
            description: `Conveniently plug a mouse, thumb drive, headset, or phone directly into the keyboard's USB pass-through.`,
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-usb-port-side-view.jpg'
            }
          }
        ]}
      />
      <hr />
      <ProductExtra
        heading="EVERY DETAIL MATTERS"
        extras={[
          {
            title: 'LASER ENGRAVED ALUMINUM LABEL',
            description: 'Forget stickers. Find excellence down to the laser-engraved aluminum label under the keyboard.',
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-backlabel.jpg'
            }
          },
          {
            title: 'SIDELIT MEDIA CONTROLS',
            description: 'We rotated the LED switches to be front facing so that even the media controls icons located on the side of the keycaps are backlit. The best way to explain this is to create this new word, sidelit.',
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-sidelit.jpg'
            }
          }
        ]}
      />
      <hr />
      <TechnicalSpecifications />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherryBrown />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <ProductFeatureGroup rows={[]} />
      <hr />
      <ProductFeature
        heading="KEEP YOUR SPACE CLEAN"
        title="EXTRA LONG BRAIDED CABLE"
        description="The Prime 13 sports a 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean."
        image={{ src: '', position: 'left' }}
      />
      <hr />
      <ProductFaqs />
      <hr />
    </>
  )
}
export default Prime13