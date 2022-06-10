/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
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
import type { VFC } from "react"
import AppletDashboard from "@components/product/AppletDashboard"

export async function getStaticProps() {
  return {
    props: {
      title: 'Das Keyboard X50Q',
      bodyId: 'x50q',
      bodyClass: 'product-page keyboards q-series has-parent',
    },
  }
}

const X50Q: VFC = () => {
  return (
    <>
      <PageTitle
        title="DAS KEYBOARD X50Q"
        type='product'
        product={{
          slug: 'daskeyboard-x50q',
          price: 115,
          currency: '$',
          canBuy: true,
          canDownload: true,
        }}
      />
      <ProductHero
        heading="WORK & GAMING"
        title="RGB KEYBOARD"
        hasPrice
        price={115}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/x50q/X50_4_side.jpg',
          breakoutSrc: '/images/product-images/product-details/x50q/X50_4_side-m.jpg'
        }}
      />

      <AppletDashboard
        title="Win at work and win in the endgame"
        description="A smart RGB keyboard for those that want to win at work, and at gaming. Q Software transforms the X50Q into an essential productivity tool that streamlines information gathering, keeping professionals focused and operating at the highest level of concentration. Instead of relying on alerts from different devices, the Das Keyboard X50Q displays them directly on its RGB keys. For example, if your website is down, you have been assigned a new task on Basecamp or Trello, or if your favorite Twitch user is online, the Das Keyboard X50Q will display a notification by changing the color of its keys. Built-in features include macros to play recorded keystroke sequences and multiple built-in RGB profiles."
        image={{
          src: "/images/product-images/product-details/x50q/dkx50q_intro.png"
        }}
      />

      <ProductVideo
        theme="light"
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

      <section
        className="bg-gray-dark dark-section section-pad bg-image"
        style={{ backgroundImage: `url('/images/product-images/product-details/x50q/DK_X50Q_Space1.jpg')` }}
      >
        <div className="container-boxed">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="text-white my-5">
                <span className="animated-cursor cursor-light">When Winning is Everything</span>
              </h2>
              <p>The most advanced technology for high performance gaming. Your weapon of choice. The X50Q will make you better at gaming and give you an adrenaline rush when your keyboard lights up.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductPerformance />

      <ProductFeatureGroup
        rows={[
          {
            type: 'heading',
            heading: 'Intense RGB colors in broad daylight'
          },
          {
            type: 'content',
            heading: '16.8 MILLION ULTRA BRIGHT COLORS',
            title: 'AT WORK OR IN YOUR CAVE, THE X50Q RGB SHINES EVERYWHERE',
            description: 'Due to its enhanced brightness mode(*) and its modern switch design, the X50Q delivers intense colors that are not washed out by daylight - a problem that most RGB keyboards suffer from.',
            image: {
              src: '/images/gama-zulu-color-switch.jpg',
              position: 'left'
            }
          },
          {
            type: 'heading',
            heading: 'Premium Materials Throughout'
          },
          {
            type: 'content',
            heading: 'FRICTION FREE',
            title: 'SOFT TOUCH PALM REST',
            description: 'Das Keyboard X50Q includes a frictionless detachable palm rest that helps typists rest their palms comfortably.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/soft-touch-palm-blurred.jpg'
            }
          },
          {
            type: 'content',
            heading: 'BUILT TO LAST FOR YEARS',
            title: 'DURABLE ALUMINUM PANEL',
            description: 'Das Keyboard X50Q sports a slick anodized black aluminum top panel. Its hex-screws allow users to easily customize it.(*)',
            descriptionHint: '(*) Available in the future',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-aluminum-panel.jpg'
            }
          },
          {
            type: 'content',
            heading: 'ONE-CLICK ACTION',
            title: 'MACRO FUNCTIONS',
            description: 'Allows you to program customizable keys to perform a series of actions with one click. For example, you can set a specific pattern of keystrokes to create a specific sequence that helps you attack a space alien or to mine for materials. They can also come in handy for combinations without having to try to remember what all of the hotkeys are.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/macro.png'
            }
          },
          {
            type: 'content',
            heading: 'PREVENT INTERRUPTIONS',
            title: 'GAMING MODE',
            description: 'The X50Q has a toggle that locks the Windows key from triggering the start menu, preventing the game from being pushed to the background and enables the Function keys and the Numpad keys to be used for macro functions.',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/gaming-mode.png'
            }
          },
          {
            type: 'content',
            heading: 'SIMPLE CONTROL AT YOUR FINGERTIPS',
            title: 'QUICK ACCESS MEDIA CONTROLS',
            description: 'Das Keyboard X50Q provides direct controls to quickly set sound level, play or pause songs, and adjust RGB brightness while gaming or working.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-audio-control.jpg'
            }
          },
          {
            type: 'content',
            heading: 'REGISTER ALL KEY PRESSES',
            title: 'FULL N-KEY ROLLOVER',
            description: 'With 100% anti-ghosting with full n-key rollover, no matter how many keys you press simultaneously, all of them will be reliably registered. Whether you type super fast or your gameplay finger dexterity is amazing, the X50Q NKRO is able to deliver the spanking your opponent deserve.',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/x50q/x50-rgb-mechanical-keyboard-side-view-cropped.jpg'
            }
          },
          {
            type: 'content',
            heading: 'PROTECT THE ENVIRONMENT',
            title: 'ENERGY-SAVING SLEEP FUNCTION',
            description: 'A small details that makes a big difference: The X50Q has a function control to put the computer to sleep instantly. It saves energy and helps the environment.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/x50q/earth.jpg'
            }
          },
          {
            type: 'content',
            heading: 'KEEP YOUR DESK TIDY',
            title: 'EXTRA LONG BRAIDED CABLE',
            description: 'The X50Q sports an extra-long 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean.',
            image: {
              position: 'center',
              src: '/images/product-images/product-details/x50q/long-dog-with-long-cable.png',
            }
          },
          {
            type: 'switch',
          },
          {
            type: 'content',
            heading: 'KEYPRESS PRECISION',
            title: 'WASD KEYCAPS INCLUDED',
            description: 'Accurate key presses are mandatory. The included gaming textured WASD keycap upgrade kit will give you a huge tactical advantage. Precision and style on your path to total domination. Key puller included as well.',
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
            heading: 'SPECIFICATIONS'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  title: 'PRODUCT INFORMATION',
                  items: [
                    '<strong>Backlighting</strong>: RGB',
                    '<strong>Connection Type</strong>: USB 2.0',
                    '<strong>Keycap Material</strong>: ABS',
                    '<strong>Aluminum top panel</strong>: Yes',
                    '<strong>USB Ports (Built-in)</strong>: No',
                    '<strong>Dedicated Media Controls</strong>: Volume Knob, Play/Pause, Track Forward/Backward',
                    '<strong>Easy Access Media Controls</strong>: Yes',
                    '<strong>Firmware Updatable</strong>: Yes',
                  ]
                },
                {
                  title: 'SYSTEM REQUIREMENTS',
                  items: [
                    'Windows 10',
                    'One 2.0 USB port',
                    'Internet connection for software download',
                    'This keyboard is compatible with Windows only.',
                  ]
                },
                {
                  title: 'WARRANTY INFORMATION',
                  items: [
                    '1-Year Limited Hardware Warranty'
                  ]
                },
                {
                  title: 'PACKAGE CONTENT',
                  items: [
                    'Keyboard',
                    'Palm rest',
                    'WASD two-tone keycaps',
                    'Keycap puller',
                    'User documentation',
                  ]
                },
                {
                  title: 'USER MANUAL',
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
                  title: 'PHYSICAL SPECIFICATIONS',
                  items: [
                    '<strong>Height</strong>: 1.28 in (3.2 cm)',
                    '<strong>Width</strong>: 6.63 in (16.8 cm)',
                    '<strong>Length</strong>: 18 in (45.7 cm)',
                    '<strong>Weight</strong>: 3.5 lbs (1.55 kg)',
                    '<strong>Cable</strong>: 6.5 ft (2 m)',
                  ]
                },
                {
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
                  title: 'AVAILABLE LAYOUTS',
                  items: [
                    '104 US',
                    '105 UK',
                    '105 DE',
                    '105 NO',
                  ]
                },
                {
                  title: 'SOFTWARE',
                  type: 'button',
                  button: {
                    text: 'Download Das Keyboard Q Software',
                    href: 'https://www.daskeyboard.io/',
                    description: 'Additional language keycaps are available as an add-on. (See accessories below.)',
                  }
                }
              ]
            ]
          },
          {
            type: 'heading',
            heading: 'ACCESSORIES'
          },
          {
            type: 'feature',
            columns: [
              [
                {
                  title: 'TRANSLUCENT KEYCAP SET',
                  items: [
                    'Without inscriptions for 104 and 105 key layouts.',
                    'With inscriptions for US, UK, German, French, Nordic, Spanish, and Russian.',
                    'With inscriptions for Dvorak Layout',
                  ]
                },
                {
                  title: 'BLACK, PROFESSIONAL FONT KEYCAP SET',
                  items: [
                    'With inscriptions, available only in US'
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
