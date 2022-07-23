/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import ProductCompatibility from "@components/product/ProductCompatibility"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import AppletDashboard from "@components/product/AppletDashboard"
import SpecificationList from "@components/section/SpecificationList"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductPerformance from "@components/section/ProductPerformance"
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

const D5QS: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { say, $html } = useTrans()
  return (
    <>
      <ProductHero
        heading="THE SMART RGB"
        title='MECHANICAL KEYBOARD'
        hasPrice
        price={isRefurbished ? product.refurbished.price : product.price}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/5qs/5qs_side.jpg',
          breakoutSrc: '/images/product-images/product-details/5qs/5qs_side-m.jpg',
        }}
      />

      <AppletDashboard
        title={say('5QS-headline-2')}
        description={`
          ${say('5QSdescription')}
          <br/><br/>
          ${say('5QScompatibility')}
        `}
        image={{
          src: "/images/product-images/product-details/5qs/dk5q_intro.png"
        }}
      />

      <SpecificationList
        id="keyFeatures"
        background="dark"
        rows={[
          {
            type: 'heading',
            heading: say('key-features')
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  items: [
                    say('5qs-key-features-1'),
                    say('5qs-key-features-2'),
                    say('5qs-key-features-3'),
                    say('5qs-key-features-4'),
                    say('5qs-key-features-5'),
                    say('5qs-key-features-6'),
                    say('5qs-key-features-7'),
                    say('5qs-key-features-8'),
                    say('5qs-key-features-9'),
                    say('5qs-key-features-10'),
                  ]
                }
              ]
            ]
          }
        ]}
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
        title={say('das-keyboard-5qs-oses')}
        image={{
          src: '/images/product-images/product-details/5qs/DK5Q_Qbutton_view.jpg',
          alt: 'DK5QS Q Button View'
        }}
        compatible={{
          mac: true,
          windows: true,
          linux: true
        }}
      />

      <ProductPerformance
        title={say('5Q-section-topanel-title')}
        description={say('5Q-section-topanel-text')}
        image={{
          src: '/images/product-images/product-details/5qs/commerce-image.jpg'
        }}
        features={{
          gamma: true,
          RGB: true,
          API: true
        }}
      />

      {/* <Materials /> */}

      {/* <section className="bg-white section-pad">
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
      </section> */}

      <ProductFeatureGroup
        rows={[
          {
            type: 'heading',
            heading: say('rgb-lighting-title')
          },
          {
            type: 'content',
            heading: say('2x-brighter-title'),
            title: say('2x-brighter-subtitle'),
            description: say('2x-brighter-paragraph-5qs'),
            descriptionHint: say('required-USB-3'),
            image: {
              position: 'left',
              src: '/images/gama-zulu-color-switch.jpg',
            }
          },
          {
            type: 'switch',
            heading: say('gzs-section-title'),
            title: say('gzs-section-subtitle'),
            description: say('x50-switches-paragraph')
          },
          {
            type: 'heading',
            heading: say('5q-premium-material-title'),
            description: say('5q-premium-material-subtitle')
          },
          {
            type: 'content',
            heading: say('5q-aluminum-top-panel-title'),
            title: say('5q-aluminum-top-panel-subtitle'),
            description: $html('5qs-aluminum-top-panel-paragraph').__html,
            image: {
              position: 'left',
              src: '/images/product-images/product-details/5qs/aluminum-top.jpg',
            }
          },
          {
            type: 'content',
            heading: say('detachable-wrist-rest'),
            title: say('comfortable-typing'),
            description: $html('5qs-palmrest-paragraph').__html,
            image: {
              position: 'right',
              src: '/images/product-images/product-details/5qs/das-keyboard-5q-wristpad.jpg',
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
            heading: say('5q-specifications-title')
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-1'),
                  items: [
                    say('5q-specifications-1'),
                    say('5q-specifications-2'),
                    say('5q-specifications-3'),
                    say('5q-specifications-4'),
                    say('5q-specifications-5'),
                    say('5q-specifications-6'),
                    say('5q-specifications-7'),
                  ]
                },
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-2'),
                  items: [
                    say('5qs-specifications-8'),
                    say('5qs-specifications-9'),
                    say('5qs-specifications-10'),
                  ]
                },
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-3'),
                  items: [
                    say('5q-specifications-11'),
                  ]
                },
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-4'),
                  items: [
                    say('5QS_brand'),
                    say('detachable-wrist-rest'),
                  ]
                },
                {
                  type: 'button',
                  title: say('user_manual'),
                  button: {
                    text: 'View the 5QS User Manual',
                    href: 'https://docs.google.com/document/d/113RqlXeGU22Wx8xhvaGl6w--tYiXIrimflQeGH7x9EQ/edit',
                  }
                }
              ],
              [
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-5'),
                  items: [
                    say('5q-specifications-16'),
                    say('5q-specifications-17'),
                    say('5q-specifications-18'),
                    say('5q-specifications-19'),
                    say('5q-specifications-20'),
                  ]
                },
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-6'),
                  items: [
                    say('5q-specifications-21'),
                    say('5q-specifications-22'),
                    say('5q-specifications-23'),
                    say('5q-specifications-24'),
                    say('5q-specifications-25'),
                    say('5q-specifications-26'),
                  ]
                },
                {
                  type: 'list',
                  title: say('5q-specifications-subtitle-7'),
                  items: [
                    say('5q-specifications-27'),
                    say('5q-specifications-28'),
                    say('5q-specifications-29'),
                    say('5q-specifications-30'),
                  ]
                },
                {
                  type: 'button',
                  title: say('5q-specifications-subtitle-8'),
                  button: {
                    text: say('download-daskeyboard-software-5q'),
                    href: 'https://www.daskeyboard.io/',
                  }
                }
              ]
            ]
          },
          {
            type: 'heading',
            heading: say('5q-accessories-title')
          },
          {
            type: 'feature',
            columns: [[
              {
                type: 'list',
                items: [
                  say('5qs-accessories-1'),
                  say('5qs-accessories-2'),
                  say('5qs-accessories-3'),
                ]
              }
            ]]
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
export default D5QS