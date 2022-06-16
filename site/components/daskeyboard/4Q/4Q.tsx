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

export async function getStaticProps() {
  return {
    props: {
      title: 'Das Keyboard 4Q',
      bodyId: '4q',
      bodyClass: 'product-page keyboards q-series',
    },
  }
}

const D4Q: VFC = () => {
  return (
    <>
      {/* <PageTitle
        title="DAS KEYBOARD 4Q"
        type="product"
        product={{
          slug: 'daskeyboard-4q',
          price: 115,
          canBuy: true,
          canDownload: true
        }}
      /> */}

      <ProductHero
        heading="THE SMART RGB"
        title='MECHANICAL KEYBOARD'
        hasPrice
        price={115}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/4q/4q_side.jpg'
        }}
      />

      <AppletDashboard
        title="THE INFORMATION YOU NEED - ON YOUR KEYBOARD"
        description="The Das Keyboard 4Q is the smart RGB Cherry MX version of the iconic industry-standard Das Keyboard 4 Professional. It is the ultimate productivity tool that keeps programmers focused on writing software and operating at the highest level of concentration. No more unwanted interruptions. Instead of relying on snooze-able, momentary alerts from different devices, the Das Keyboard 4Q ambiently tracks the most important information directly on its RGB keys. Users can configure it for their needs. For example, if a website is down or you have been assigned a new task, or if the software build fails, the Das Keyboard 4Q will change color and let you know."
        image={{
          src: "/images/product-images/product-details/4q/dk4q_intro.jpg"
        }}
      />

      <ProductVideo
        theme="light"
        title="DAS KEYBOARD Q SOFTWARE"
        description="MAKE YOUR KEYBOARD SMART"
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
        image={{
          src: '/images/product-images/product-details/4q/4q_compatibility.jpg',
          alt: '4Q Compatibility'
        }}
        compatible={{
          mac: true,
          windows: true,
          linux: false
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
            title: 'DURABLE ALUMINUM PANEL',
            heading: 'BUILT TO LAST FOR YEARS',
            description: 'Das Keyboard 4Q sports an anodized black aluminum top panel. Made with first-class electronics this top panel will be serving you for years to come.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4q/dk4q-aluminum-top-panel.png',
            }
          },
          {
            type: 'content',
            title: 'KEEP YOUR GAMING SPACE CLEAN',
            heading: 'EXTRA LONG BRAIDED CABLE',
            description: 'The 4Q sports a 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean.',
            image: {
              position: 'center',
              src: '/images/product-images/product-details/4q/long-dog-with-long-cable.png',
            }
          },
          {
            type: 'content',
            title: 'USB CONVENIENCE AT YOUR FINGERTIPS',
            heading: 'TWO-PORT USB HUB',
            description: 'Das Keyboard 4Q has a convenient two-port USB Hub for transferring files and connecting devices. No more reaching to the back of your computer.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4q/dk4q-usb-ports.jpg',
            }
          },
          {
            type: 'content',
            title: 'QUICK ACCESS FOR AUDIO PLAYBACK AND VOLUME',
            heading: 'DEDICATED MEDIA CONTROLS',
            description: 'Direct controls to quickly set sound level, play or pause songs, and adjust volume while gaming or working.',
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
            heading: 'SPECIFICATIONS'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  title: 'PRODUCT INFORMATION',
                  items: [
                    'Lasered keycaps US, and ABS lased ROW',
                    'Extra long 6.5ft (201cm) USB cable with single type A USB connector',
                    'NKRO over USB for faster gaming, programming, or anything that makes you a formidable opponent in work or play',
                    'Two-port USB 2.0 hub',
                    'Anodized aluminum top panel',
                    'Firmware updatable',
                    'Cherry MX RGB electronics',
                    'Footbar to raise keyboard also functions as a ruler (you’ll thank us later)',
                  ]
                },
                {
                  type: 'list',
                  title: 'SYSTEM REQUIREMENTS',
                  items: [
                    'Windows 10 or Ubuntu',
                    'One 2.0 USB port (Optional 3.0 USB port for Enhanced Brightness Mode), Optional 2nd 2.0 USB port hub',
                    'Internet connection for software and cloud features',
                  ]
                },
                {
                  type: 'list',
                  title: 'WARRANTY INFORMATION',
                  items: [
                    '1-Year Limited Hardware Warranty',
                  ]
                },
                {
                  type: 'list',
                  title: 'PACKAGE CONTENT',
                  items: [
                    'Das Keyboard 4Q',
                    'Footbar ruler',
                    'Getting started guide',
                  ]
                },
                {
                  type: 'button',
                  title: 'USER MANUAL',
                  button: {
                    text: 'View the 4Q User Manual',
                    href: 'https://docs.google.com/document/d/113RqlXeGU22Wx8xhvaGl6w--tYiXIrimflQeGH7x9EQ/edit',
                  }
                }
              ],
              [
                {
                  type: 'list',
                  title: 'PHYSICAL SPECIFICATIONS',
                  items: [
                    '<strong>Height</strong>: 0.80 in (2 cm)',
                    '<strong>Width</strong>: 6.8 in (17.3 cm)',
                    '<strong>Length</strong>: 18 in (45.7 cm)',
                    '<strong>Weight</strong>: 2.9 lbs (1.3 kg)',
                    '<strong>Cable</strong>: 6.5 ft (2m)',
                  ]
                },
                {
                  type: 'list',
                  title: 'CHERRY MX RGB SWITCHES',
                  items: [
                    '<strong>Gold Cross Point Contacts</strong>: 2',
                    '<strong>Lifetime</strong>: 50 million actuations',
                    '<strong>Total Travel Distance</strong>: 4mm',
                    '<strong>Pre-travel Distance</strong>: 2mm',
                    '<strong>Cherry MX Brown',
                    '<strong>Feel</strong>: Soft tactile',
                    '<strong>Actuation force</strong>: 45g',
                    '<strong>Tactile Force</strong>: 55g',
                  ]
                },
                {
                  type: 'list',
                  title: 'AVAILABLE LAYOUTS',
                  items: [
                    '104 US',
                    '105 UK',
                    '105 DE',
                    '105 NO',
                  ]
                },
                {
                  type: 'button',
                  title: 'SOFTWARE',
                  button: {
                    text: 'Download DAS Keyboard Q Software',
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