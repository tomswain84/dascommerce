/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import ProductHeader from "@components/product/ProductHeader"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import FeatureList from "@components/section/FeatureList"
import ProductApplets from "@components/section/ProductApplets"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductHero from "@components/section/ProductHero"
import ProductPerformance from "@components/section/ProductPerformance"
import ProductScreen from "@components/section/ProductScreen"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
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
      <section className="bg-gray-darker dark-section section-pad">
        <div className="container-boxed">
          <div id="appletDashboard" className="row align-items-center justify-content-between">
            <div className="col-12 col-xl-8 col-xxl-6">
              <h2 className="text-red">Win at work and win in the endgame</h2>
              <p className="mt-3"> A smart RGB keyboard for those that want to win at work, and at gaming. Q Software transforms the X50Q into an essential productivity tool that streamlines information gathering, keeping professionals focused and operating at the highest level of concentration. Instead of relying on alerts from different devices, the Das Keyboard X50Q displays them directly on its RGB keys. For example, if your website is down, you have been assigned a new task on Basecamp or Trello, or if your favorite Twitch user is online, the Das Keyboard X50Q will display a notification by changing the color of its keys. Built-in features include macros to play recorded keystroke sequences and multiple built-in RGB profiles.</p>
            </div>
            <div className="col-12 col-xl-4 col-xxl-6">
              <img className="img-fluid blend-plus-lighter" src="/images/product-images/product-details/x50q/dkx50q_intro.png" alt="Applet Dashboard" />
            </div>
          </div>
        </div>
      </section>

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

      <FeatureList />
      <FeatureList />
      <hr />
      <RelatedProducts />
    </>
  )
}
export default X50Q
