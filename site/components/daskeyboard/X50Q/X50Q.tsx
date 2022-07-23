/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import SpecificationList from "@components/section/SpecificationList"
import ProductApplets from "@components/section/ProductApplets"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductHero from "@components/section/ProductHero"
import ProductPerformance from "@components/section/ProductPerformance"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import AppletDashboard from "@components/product/AppletDashboard"
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

const X50Q: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { say, $html } = useTrans()
  return (
    <>
      <ProductHero
        heading="WORK & GAMING"
        title="RGB KEYBOARD"
        hasPrice
        price={isRefurbished ? product.refurbished.price : product.price}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/x50q/X50_4_side.jpg',
          breakoutSrc: '/images/product-images/product-details/x50q/X50_4_side-m.jpg'
        }}
      />

      <AppletDashboard
        title={say('x50_animation_title-new')}
        description={say('x50description')}
        image={{
          src: "/images/product-images/product-details/x50q/dkx50q_intro.png"
        }}
      />

      <ProductVideo
        theme="light"
        title='DAS KEYBOARD Q SOFWARE'
        description={say("Q-Software-configuration")}
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />

      <DragDropAppletConfigure />

      <QMessagePreview />

      <CustomizeKeyboard />

      <ProductApplets />

      <AppletsCTA />

      <section
        className="bg-gray-dark dark-section section-pad bg-image"
        style={{ backgroundImage: `url('/images/product-images/product-details/x50q/DK_X50Q_Space1.jpg')` }}
      >
        <div className="container-boxed">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="text-white my-5">
                <span className="animated-cursor cursor-light" dangerouslySetInnerHTML={$html('X50Q-dashboard')} />
              </h2>
              <p dangerouslySetInnerHTML={$html('marketplace-subtitle-new2')} />
            </div>
          </div>
        </div>
      </section>

      <ProductPerformance
        title={say('x50-section-topanel-title')}
        description={say('x50-section-topanel-text')}
        image={{
          src: '/images/product-images/product-details/x50q/x50q-performance-meet-design.jpeg'
        }}
        features={{
          gamma: true,
          RGB: true,
          aluminum: true
        }}
      />

      <ProductFeatureGroup
        rows={[
          {
            type: 'heading',
            heading: say('rgb-lighting-title')
          },
          {
            type: 'content',
            heading: say('rgb-lighting-subtitle'),
            title: say('rgb-lighting-subtitle-2'),
            description: say('rgb-lighting-paragraph'),
            image: {
              src: '/images/gama-zulu-color-switch.jpg',
              position: 'left'
            }
          },
          {
            type: 'heading',
            heading: say('x50-durable-premium-title')
          },
          {
            type: 'content',
            heading: say('x50-soft-touch-palm-rest-subtitle'),
            title: say('x50-soft-touch-palm-rest-title'),
            description: say('x50-soft-touch-palm-rest-paragraph'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/soft-touch-palm-blurred.jpg'
            }
          },
          {
            type: 'content',
            heading: say('x50-aluminum-top-panel-subtitle'),
            title: say('x50-aluminum-top-panel-title'),
            description: say('x50-aluminum-top-panel-paragraph'),
            descriptionHint: '(*) Available in the future',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-aluminum-panel.jpg'
            }
          },
          {
            type: 'content',
            heading: say('macro-section-subtitle'),
            title: say('macro-section-title'),
            description: say('macro-section-content'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/macro.png'
            }
          },
          {
            type: 'content',
            heading: say('gaming-section-subtitle'),
            title: say('gaming-section-title'),
            description: say('gaming-section-content'),
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/gaming-mode.png'
            }
          },
          {
            type: 'content',
            heading: say('x50-quick-audio-access-subtitle'),
            title: say('x50-quick-audio-access-title'),
            description: say('x50-quick-audio-access-paragraph'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-audio-control.jpg'
            }
          },
          {
            type: 'content',
            heading: say('x50-n-key-subtitle'),
            title: say('x50-n-key-title'),
            description: say('x50-n-key-paragraph'),
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/x50-rgb-mechanical-keyboard-side-view-cropped.jpg'
            }
          },
          {
            type: 'content',
            heading: say('x50-energy-subtitle'),
            title: say('x50-energy-title'),
            description: say('x50-energy-paragraph'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/earth.jpg'
            }
          },
          {
            type: 'content',
            heading: say('x50-long-cable-subtitle'),
            title: say('x50-long-cable-title'),
            description: say('x50-long-cable-paragraph'),
            image: {
              position: 'center',
              src: '/images/product-images/product-details/x50q/long-dog-with-long-cable.png',
            }
          },
          {
            type: 'switch',
            heading: say('gzs-section-subtitle'),
            title: say('gzs-section-title'),
            description: say('x50-switches-paragraph')
          },
          {
            type: 'content',
            heading: say('key_press_precision'),
            title: say('x50-WASD-keycaps-title'),
            description: `
              ${say('x50-WASD-keycaps-paragraph')}
              ${say('x50-WASD-keycaps-subparagraph')}
            `,
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/wasd-shapes-rgb.png',
            }
          },
        ]}
      />

      <SpecificationList
        id="keyboardSpects"
        background="darker"
        rows={[
          {
            type: 'heading',
            heading: say('x50-specifications-title')
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  title: say('x50-specifications-subtitle-1'),
                  items: [
                    say('x50-specifications-1'),
                    say('x50-specifications-2'),
                    say('x50-specifications-3'),
                    say('x50-specifications-4'),
                    say('x50-specifications-5'),
                    say('x50-specifications-6'),
                    say('x50-specifications-7'),
                    say('x50-specifications-8'),
                    say('x50-specifications-9'),
                    say('x50-specifications-10'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-2'),
                  items: [
                    say('x50-specifications-11'),
                    say('x50-specifications-12'),
                    say('x50-specifications-13'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-3'),
                  items: [
                    say('x50-specifications-14'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-4'),
                  items: [
                    say('x50-specifications-15'),
                    say('x50-specifications-16'),
                    say('x50-specifications-17'),
                    say('x50-specifications-18'),
                    say('x50-specifications-19'),
                  ]
                },
                {
                  title: say('user_manual'),
                  type: 'button',
                  button: {
                    text: 'View the X50Q User Manual',
                    href: 'https://docs.google.com/document/d/1I79ZG7MzYzkSWdniAYGYTSsBkf85drA7lVeI6Q03BTU/edit?usp=sharing',
                    blank: true,
                  }
                }
              ],
              [
                {
                  title: say('x50-specifications-subtitle-5'),
                  items: [
                    say('x50-specifications-20'),
                    say('x50-specifications-21'),
                    say('x50-specifications-22'),
                    say('x50-specifications-23'),
                    say('x50-specifications-24'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-6'),
                  items: [
                    say('x50-specifications-25'),
                    say('x50-specifications-26'),
                    say('x50-specifications-27'),
                    say('x50-specifications-28'),
                    say('x50-specifications-29'),
                    say('x50-specifications-30'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-7'),
                  items: [
                    say('x50-specifications-31'),
                    say('x50-specifications-32'),
                    say('x50-specifications-33'),
                    say('x50-specifications-34'),
                  ]
                },
                {
                  title: say('x50-specifications-subtitle-8'),
                  type: 'button',
                  button: {
                    text: say('download-daskeyboard-software'),
                    href: 'https://www.daskeyboard.io/',
                    description: say('x50-specifications-35'),
                  }
                }
              ]
            ]
          },
          {
            type: 'heading',
            heading: say('x50-accessories-title')
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  title: say('x50-accessories-title-1'),
                  items: [
                    say('x50-accessories-1'),
                    say('x50-accessories-2'),
                    say('x50-accessories-3'),
                  ]
                },
                {
                  title: say('x50-accessories-title-4'),
                  items: [
                    say('x50-accessories-4'),
                  ]
                }
              ]
            ]
          }
        ]} />

      <RelatedProducts
        title="Q Series"
        series="Q"
      />
    </>
  )
}
export default X50Q
