import type { VFC } from "react"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import SpecificationList from "@components/section/SpecificationList"
import ProductCompatibility from "@components/product/ProductCompatibility"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductPerformance from "@components/section/ProductPerformance"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchGammaZulu from "@components/section/SwitchGammaZulu"
import PageTitle from "@components/core/PageTitle"
import AppletDashboard from "@components/product/AppletDashboard"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"

export async function getStaticProps() {
  return {
    props: {
      bodyId: '5qs',
      bodyClass: 'product-page keyboards q-series',
    },
  }
}

const D5QS: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="DAS Keyboard 5QS"
        type="product"
        product={{
          price: 199,
          canBuy: true,
          canDownload: true
        }}
      />

      <ProductHero
        heading='THE SMART RGB'
        title='MECHANICAL KEYBOARD'
        hasPrice
        price={199}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/5qs/5qs_side.jpg'
        }}
      />

      <AppletDashboard
        title="THE INFORMATION YOU NEED - ON YOUR KEYBOARD"
        description={`
          The Das Keyboard 5QS is the second generation of the 5Q keyboard, the smart RGB mechanical keyboard that helps boost productivity by displaying information (e.g. weather, stock quotes, project progress, CPU usage, etc..) in color on the keyboard’s keys. Smart RGB mechanical keyboard with macros to play recorded keystroke sequences and multiple built-in RGB profiles. Built-in features include macros to play recorded keystroke sequences, multiple built-in RGB profiles and effects, and an RGB profile editor.
          <br/> <br/>
          Compatible with Windows, Ubuntu, Linux Mint, and macOS mode is available.
        `}
        image="/images/product-images/product-details/5qs/dk5q_intro.png"
      />

      <SpecificationList
        id="keyFeatures"
        background="dark"
        rows={[
          {
            type: 'heading',
            heading: 'Key Features'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  title: '',
                  type: 'list',
                  items: [
                    'Das Keyboard Q technology built-in to enable smart RGB notifications',
                    'Ultra-bright RGB lighting',
                    'A built-in RGB profile editor with pre-configured profiles',
                    'A built-in macro editor to replay recorded keystrokes',
                    'Gaming mode with full-NKRO',
                    '100M cycle mechanical key switches',
                    'Detachable palm rest',
                    'Q volume knob changes volume & previews notifications',
                    'Anodized aluminum top panel',
                    'Windows & Ubuntu support. Built-in Mac mode.',
                  ]
                }
              ]
            ]
          }
        ]}
      />

      <ProductVideo
        title='DAS KEYBOARD Q SOFWARE'
        description='MAKE YOUR KEYBOARD SMART'
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />

      <DragDropAppletConfigure />

      <QMessagePreview />

      <CustomizeKeyboard />

      <ProductApplets />

      <AppletsCTA />

      <ProductCompatibility />

      <ProductPerformance />

      <ProductFeatureGroup
        rows={[
          {
            type: 'heading',
            heading: 'INTENSE RGB COLORS IN BROAD DAYLIGHT'
          },
          {
            type: 'content',
            heading: '2X BRIGHTER: RGB+',
            title: 'BRILLIANT COLORS THAT ARE NOT WASHED OUT',
            description: 'Due to its enhanced brightness mode(*) and its modern switch design, the 5QS delivers intense colors that are not washed out by daylight - a problem that most RGB keyboards suffer from.',
            descriptionHint: '(*) requires an USB 3.0 connection.',
            image: {
              src: '/images/gama-zulu-color-switch.jpg',
              position: 'left'
            }
          },
          {
            type: 'switch',
          },
          {
            type: 'heading',
            heading: 'PREMIUM MATERIALS THROUGHOUT',
            description: 'For a luxurious typing experience'
          },
          {
            type: 'content',
            heading: 'ALUMINUM TOP',
            title: 'BUILT TO LAST',
            description: 'Das Keyboard 5QS sports an anodized black aluminum top panel. Made with first-class electronics this top panel will be serving you for years to come.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/5qs/aluminum-top.jpg'
            }
          },
          {
            type: 'content',
            heading: 'DETACHABLE WRIST REST',
            title: 'COMFORTABLE TYPING',
            description: 'Das Keyboard 5QS features a detachable wrist rest that’s attached magnetically and helps typists rest their palms comfortably.',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/5qs/das-keyboard-5q-wristpad.jpg'
            }
          }
        ]}
      />

      <SpecificationList
        id="keyboardSpects"
        background="darker"
        rows={[
          {
            type: 'heading',
            heading: 'Specifications'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  title: 'PRODUCT INFORMATION',
                  items: [
                    'Double shot keycaps US, and ABS lasered ROW',
                    'Extra long 6.5ft (201cm) USB cable with single type A USB connector',
                    'NKRO over USB for faster gaming, programming, or anything that makes you a formidable opponent in work or play',
                    'Anodized aluminum top panel',
                    'Firmware updatable',
                    'RGB+ electronics',
                  ]
                },
                {
                  type: 'list',
                  title: 'SYSTEM REQUIREMENTS',
                  items: [
                    'Windows, macOS, or Ubuntu0',
                    'One 2.0 USB port',
                    'Internet connection for software and smart keyboard features',
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
                    'Das Keyboard 5QS',
                    'Detachable wrist rest',
                  ]
                },
                {
                  type: 'button',
                  title: 'USER MANUAL',
                  button: {
                    text: 'View the 5QS User Manual',
                    href: 'https://docs.google.com/document/d/13lIZ5_l8djOdUfzSVuKWgP7ZWmP67MNSbCIlrkJSHrI/edit'
                  }
                }
              ],
              [
                {
                  type: 'list',
                  title: 'PHYSICAL SPECIFICATIONS',
                  items: [
                    '<strong>Height</strong>: 1.42 in (3.6 cm)',
                    '<strong>Width</strong>: 6 in (15.2 cm)',
                    '<strong>Length</strong>: 18 in (45.7 cm)',
                    '<strong>Weight</strong>: 3.3 lbs (1.44 kg)',
                    '<strong>Cable</strong>: 6.5 ft (2m)',
                  ]
                },
                {
                  type: 'list',
                  title: 'GAMMA ZULU SWITCHES MADE BY OMRON FOR DAS KEYBOARD',
                  items: [
                    '<strong>Feel</strong>: Soft tactile',
                    '<strong>Gold Cross Point Contacts</strong>: 2',
                    '<strong>Durability</strong>: 100 million actuations',
                    '<strong>Actuation distance</strong>: 0.06 in (1.5 mm)',
                    '<strong>Actuation force</strong>: 1.6 oz (45 g)',
                    '<strong>Total travel distance</strong>: 0.14 in (3.5 mm)',
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
                    text: 'Download Das Keyboard Q Software',
                    href: 'https://www.daskeyboard.io/',
                    description: 'Additional language keycaps are available as an add-on. (See accessories below.)'
                  }
                }
              ]
            ]
          },
          {
            type: 'heading',
            heading: 'Accessories'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  type: 'list',
                  title: 'TRANSLUCENT KEYCAP SET',
                  items: [
                    'Without inscriptions for 104 and 105 key layouts.',
                    'With inscriptions for US, UK, German, French, Nordic, Spanish, and Russian.',
                    'With inscriptions for Dvorak Layout',
                  ]
                },
                {
                  type: 'list',
                  title: 'BLACK, PROFESSIONAL FONT KEYCAP SET',
                  items: [
                    'With inscriptions, available only in US',
                  ]
                },
              ]
            ]
          }
        ]}
      />

      <RelatedProducts title="Q Series" series="Q" />
    </>
  )
}
export default D5QS