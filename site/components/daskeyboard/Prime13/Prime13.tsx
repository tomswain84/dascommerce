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
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

const Prime13: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { say } = useTrans();
  return (
    <>
      <ProductHero
        heading={say('prime13_slider_1_title')}
        title={say('prine13-professional_slider_1_subtitle')}
        hasPrice={true}
        price={isRefurbished ? product.refurbished.price : product.price}
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
          title: `<span class="text-red">${say('p13-section-topanel-title')}</span>`,
          titleSmall: true,
          description: say('p13-section-topanel-paragraph')
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
          title: `<span class="text-red">${say('p13-lighting-subtitle')}</span>`,
          description: say('p13-lighting-paragraph'),
        }}
        image={{
          fluid: false,
          position: 'bottom',
          src: '/images/product-images/product-details/prime-13/prime13-backligth-animated.gif',
          blend: true
        }}
      />

      <ProductExtra
        heading={say('p13-usb-title')}
        extras={[
          {
            title: say('p13-usb-subtitle-1'),
            description: say('p13-usb-paragraph-1'),
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-braided-usb.jpg'
            }
          },
          {
            title: say('p13-usb-subtitle-2'),
            description: say('p13-usb-paragraph-2'),
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-usb-port-side-view.jpg'
            }
          }
        ]}
      />

      <ProductExtra
        heading={say('p13-details-title')}
        background="white"
        extras={[
          {
            title: say('p13-details-subtitle-1'),
            description: say('p13-details-paragraph-1'),
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-backlabel.jpg'
            }
          },
          {
            title: say('p13-details-subtitle-2'),
            description: say('p13-details-paragraph-2'),
            image: {
              src: '/images/product-images/product-details/prime-13/prime13-mechanical-keyboard-sidelit.jpg'
            }
          }
        ]}
      />

      <TechnicalSpecifications
        productSlug="prime-13"
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
          heading: say("p13-energy-heading"),
          title: say("p13-energy-title"),
          description: say('p13-energy-sub'),
          image: {
            position: "left",
            src: "/images/product-images/product-details/prime-13/earth.jpg",
          },
          extras: [
            {
              title: say('p13-energy-subtitle'),
              description: say('p13-energy-paragraph'),
            },
            {
              title: say('p13-energy-subtitle2'),
              description: say('p13-energy-paragraph2'),
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
            question: say('p13-faq-q1'),
            answer: say('p13-faq-a1')
          },
          {
            question: say('p13-faq-q2'),
            answer: say('p13-faq-a2')
          },
          {
            question: say('p13-faq-q3'),
            answer: say('p13-faq-a3')
          },
          {
            question: say('p13-faq-q5'),
            answer: say('p13-faq-a5')
          },
        ]}
      />
    </>
  )
}
export default Prime13