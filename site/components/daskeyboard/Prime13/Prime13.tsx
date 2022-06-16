import type { VFC } from "react"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductExtra from "@components/section/ProductExtra"
import ProductFaqs from "@components/section/ProductFaqs"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductHero from "@components/section/ProductHero"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import AppletDashboard from "@components/product/AppletDashboard"

const Prime13: VFC = () => {
  return (
    <>
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

      <AppletDashboard
        title="CONNECT YOUR SOUL TO THE MACHINE"
        description="Focus on your work: no-nonsense features to get the job done"
        image={{
          src: '/images/product-images/product-details/prime-13/prime13-mecahnical-keybaord-front-view.jpg',
          rounded: true
        }}
      />

      <Banner
        sectionPad
        containerBoxed={false}
        content={{
          textAlign: "center",
          title: `<span className="text-red">MINIMALIST DESIGN</span>`,
          titleSmall: true,
          description: "Start with pure lines sculpted in aluminum, add clean white backlit keys with a modern font face, and you get an incredibly efficient tool that helps get the job done."
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-side-view.jpg',
          fluid: false
        }}
      />

      <Banner
        sectionPad
        containerBoxed={false}
        content={{
          background: 'dark',
          textAlign: "center",
          title: `<span className="text-red">TYPE ANYWHERE, EVEN IN YOUR CAVE.</span>`,
          description: "The Das Keyboard Prime 13 wields white LED backlit keys with 7 levels of brightness. Plenty-enough settings even for desks located in challengingly-dark environments.",
        }}
        image={{
          fluid: false,
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-backligth-animated.gif',
          blend: true
        }}
      />

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

      <ProductExtra
        heading="EVERY DETAIL MATTERS"
        background="white"
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

      <TechnicalSpecifications
        productSlug="daskeyboard-prime-13"
        userManual="https://docs.google.com/document/d/1Djy89I0huhK3E3e81URyj8raA3AlMY9AjBVlWGgCgwc/edit?usp=sharing"
      />

      <section className="bg-white section-pad">
        <div className="container-boxed">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 mb-5 mb-md-0">
              <SwitchCherryBrown />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              <ForceDiagram type="brown" />
            </div>
          </div>
        </div>
      </section>

      <ProductFeatureGroup rows={[
        {
          type: "content",
          heading: "SAVE THE PLANET.",
          title: "YOUR PRIME 13 SAVES ENERGY",
          description: "The planet needs your help. Every bit counts. The Prime 13 has built-in energy saving features.",
          image: {
            position: "left",
            src: "/images/product-images/product-details/prime-13/earth.jpg",
          },
          extras: [
            {
              title: "SLEEP CONTROL FUNCTION",
              description: "Das Keyboard was one of the first to incorporate a computer sleep control to its keyboards. Having a computer sleep a few hours a day while you are away from your desk will make your power hungry 600-watt, eight-core, fire-breathing monster computer stop burning unnecessary energy when it is not needed.",
            },
            {
              title: "LED AUTO-DIM",
              description: "The Prime 13 backlighting automatically dims after 10 minutes of inactivity. Even keyboards like naps.",
            },
          ]
        },
        {
          type: 'content',
          heading: 'KEEP YOUR SPACE CLEAN',
          title: 'EXTRA LONG BRAIDED CABLE',
          description: 'The Prime 13 sports a 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean.',
          image: {
            position: 'center',
            src: '/images/product-images/product-details/prime-13/long-dog-with-long-cable.png'
          }
        }
      ]} />

      <ProductFaqs
        faqs={[
          {
            question: "DOES THE PRIME 13 COME WITH DEDICATED DRIVER SOFTWARE?",
            answer: "The Prime 13 does not need any special software or firmware. Just plug it in and start typing."
          },
          {
            question: "WHAT OPERATING SYSTEMS WILL THE PRIME 13 WORK WITH?",
            answer: "The Prime 13 is compatible with Windows, macOS, Linux operating systems, and Chrome OS."
          },
          {
            question: "WHICH LAYOUTS ARE AVAILABLE FOR THE PRIME 13?",
            answer: `The Prime 13 is currently available in US and UK layouts. DE and Nordic layouts will be coming soon. All European layouts are only available through our <a href="http://www.daskeyboard.com/where-to-buy/">international resellers</a>.`
          },
          {
            question: "DOES DAS KEYBOARD SHIP OUTSIDE THE UNITED STATES?",
            answer: `No, you can buy it from your local reseller. Please visit <a href="http://www.daskeyboard.com/where-to-buy/">http://www.daskeyboard.com/where-to-buy/</a>`
          },
        ]}
      />
    </>
  )
}
export default Prime13