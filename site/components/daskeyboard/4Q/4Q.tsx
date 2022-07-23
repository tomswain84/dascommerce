/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import ForceDiagram from "@components/section/ForceDiagram"
import Materials from "@components/section/Materials"
import ProductCompatibility from "@components/product/ProductCompatibility"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import AppletDashboard from "@components/product/AppletDashboard"
import SpecificationList from "@components/section/SpecificationList"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

export async function getStaticProps() {
  return {
    props: {
      title: 'Das Keyboard 4Q',
      bodyId: '4q',
      bodyClass: 'product-page keyboards q-series',
    },
  }
}

const D4Q: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { say, $html, formatPrice } = useTrans()
  return (
    <>
      <ProductHero
        heading="THE SMART RGB"
        title='MECHANICAL KEYBOARD'
        hasPrice
        price={isRefurbished ? product.refurbished.price : product.price}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/4q/4q_side.jpg'
        }}
      />

      <AppletDashboard
        title={say('4q_animation_title')}
        description={say('4Qdescription')}
        image={{
          src: "/images/product-images/product-details/4q/dk4q_intro.jpg"
        }}
      />

      <ProductVideo
        theme="light"
        title="DAS KEYBOARD Q SOFTWARE"
        description={say('Q-Software-configuration')}
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />

      <DragDropAppletConfigure />

      <QMessagePreview />

      <CustomizeKeyboard />

      <ProductApplets />

      <AppletsCTA />

      <ProductCompatibility
        title={say('das-keyboard-4q-oses')}
        image={{
          src: '/images/product-images/product-details/4q/4q_compatibility.jpg',
          alt: '4Q Compatibility'
        }}
        compatible={{
          mac: false,
          windows: true,
          linux: true
        }}
      />

      <Materials />

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

      <ProductFeatureGroup
        rows={[
          {
            type: 'content',
            title: say('4q-aluminum-top-panel-title'),
            heading: say('4q-aluminum-top-panel-subtitle'),
            description: say('4q-aluminum-top-panel-paragraph'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4q/dk4q-aluminum-top-panel.png',
            }
          },
          {
            type: 'content',
            heading: say('4q-long-cable-subtitle'),
            title: say('4q-long-cable-title'),
            description: say('4q-long-cable-text'),
            image: {
              position: 'center',
              src: '/images/product-images/product-details/4q/long-dog-with-long-cable.png',
            }
          },
          {
            type: 'content',
            title: say('4q-two-port-usb-subtitle'),
            heading: say('4q-two-port-usb-title'),
            description: say('4q-two-port-usb-text'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4q/dk4q-usb-ports.jpg',
            }
          },
          {
            type: 'content',
            title: say('4q-dedicated-media-controls-subtitle'),
            heading: say('4q-dedicated-media-controls-title'),
            description: say('4q-dedicated-media-controls-text'),
            image: {
              position: 'right',
              src: '/images/product-images/product-details/4q/dk4q-media-controls.jpg',
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
            heading: say('4q-specifications-title'),
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-1'),
                  items: [
                    say('4q-specifications-1'),
                    say('4q-specifications-2'),
                    say('4q-specifications-3'),
                    say('4q-specifications-4'),
                    say('4q-specifications-5'),
                    say('4q-specifications-6'),
                    say('4q-specifications-7'),
                    say('4q-specifications-8'),
                  ]
                },
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-2'),
                  items: [
                    say('4q-specifications-9'),
                    say('4q-specifications-10'),
                    say('4q-specifications-11'),
                  ]
                },
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-3'),
                  items: [
                    say('4q-specifications-12'),
                  ]
                },
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-4'),
                  items: [
                    say('4q-specifications-13'),
                    say('4q-specifications-14'),
                    say('4q-specifications-15'),
                  ]
                },
                {
                  type: 'button',
                  title: say('user_manual'),
                  button: {
                    text: 'View the 4Q User Manual',
                    href: 'https://docs.google.com/document/d/113RqlXeGU22Wx8xhvaGl6w--tYiXIrimflQeGH7x9EQ/edit',
                  }
                }
              ],
              [
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-5'),
                  items: [
                    say('4q-specifications-16'),
                    say('4q-specifications-17'),
                    say('4q-specifications-18'),
                    say('4q-specifications-19'),
                    say('4q-specifications-20'),
                  ]
                },
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-6'),
                  items: [
                    say('4q-specifications-21'),
                    say('4q-specifications-22'),
                    say('4q-specifications-23'),
                    say('4q-specifications-24'),
                    say('4q-specifications-25'),
                    say('4q-specifications-25-1'),
                    say('4q-specifications-25-2'),
                    say('4q-specifications-25-3'),
                  ]
                },
                {
                  type: 'list',
                  title: say('4q-specifications-subtitle-7'),
                  items: [
                    say('4q-specifications-27'),
                    say('4q-specifications-28'),
                    say('4q-specifications-29'),
                    say('4q-specifications-30'),
                  ]
                },
                {
                  type: 'button',
                  title: say('x50-specifications-subtitle-8'),
                  button: {
                    text: say('download-daskeyboard-software-5q'),
                    href: 'https://www.daskeyboard.io/'
                  }
                }
              ]
            ]
          }
        ]}
      />

      <RelatedProducts
        title="Q Series"
        series="Q"
      />
    </>
  )
}
export default D4Q