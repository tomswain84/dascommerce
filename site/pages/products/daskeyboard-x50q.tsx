import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import ProductHeader from "@components/product/ProductHeader"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import FeatureList from "@components/section/FeatureList"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductPerformance from "@components/section/ProductPerformance"
import ProductScreen from "@components/section/ProductScreen"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchGammaZulu from "@components/section/SwitchGammaZulu"
import type { VFC } from "react"

const X50Q: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD X50Q"
        price={115}
        canBuy
        canDownload
      />
      <hr />
      <ProductHero
        heading="WORK & GAMING"
        title="RGB KEYBOARD"
        hasPrice
        price={115}
        isCherry={false}
        image={{
          src: '/images/product-images/product-details/x50q/X50_4_side.jpg'
        }}
      />
      <hr />
      <Banner
        textAlign="left"
        title={`<span class="text-red">WIN AT WORK AND WIN IN THE ENDGAME</span>`}
        background='dark'
        padding={20}
        description='A smart RGB keyboard for those that want to win at work, and at gaming. Q Software transforms the X50Q into an essential productivity tool that streamlines information gathering, keeping professionals focused and operating at the highest level of concentration. Instead of relying on alerts from different devices, the Das Keyboard X50Q displays them directly on its RGB keys. For example, if your website is down, you have been assigned a new task on Basecamp or Trello, or if your favorite Twitch user is online, the Das Keyboard X50Q will display a notification by changing the color of its keys. Built-in features include macros to play recorded keystroke sequences and multiple built-in RGB profiles.'
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/x50q/dkx50q_intro.png',
          blend: true
        }}
      />
      <hr />
      <ProductVideo
        title='DAS KEYBOARD Q SOFWARE'
        description='MAKE YOUR KEYBOARD SMART'
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />
      <hr />
      <DragDropAppletConfigure />
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
      <hr />
      <QMessagePreview />
      <hr />
      <CustomizeKeyboard />
      <hr />
      <ProductApplets />
      <hr />
      <AppletsCTA />
      <hr />
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
      <hr />
      <ProductPerformance />
      <div className="row bg-gray-darker p-5 text-white">
        <h2 className="text-center">INTENSE RGB COLORS IN BROAD DAYLIGHT</h2>
        <div className="d-flex flex-column">
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">16.8 MILLION ULTRA BRIGHT COLORS</span>`}
            titleExtra='AT WORK OR IN YOUR CAVE, THE X50Q RGB SHINES EVERYWHERE'
            description='Due to its enhanced brightness mode(*) and its modern switch design, the X50Q delivers intense colors that are not washed out by daylight - a problem that most RGB keyboards suffer from.'
            image={{
              position: 'left',
              src: '/images/gama-zulu-color-switch.jpg'
            }}
          />
          <hr />
          <h2 className="text-center">PREMIUM MATERIALS THROUGHOUT</h2>
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">FRICTION FREE</span>`}
            titleExtra='SOFT TOUCH PALM REST'
            description='Das Keyboard X50Q includes a frictionless detachable palm rest that helps typists rest their palms comfortably.'
            image={{
              position: 'left',
              src: '/images/product-images/product-details/x50q/soft-touch-palm-blurred.jpg',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">BUILT TO LAST FOR YEARS</span>`}
            titleExtra='DURABLE ALUMINUM PANEL'
            description={`
              Das Keyboard X50Q sports a slick anodized black aluminum top panel. Its hex-screws allow users to easily customize it.(*)
              <br/><br/>
              <p class="small text-gray-light">(*) Available in the future</p>
            `}
            image={{
              position: 'right',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-aluminum-panel.jpg',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">ONE-CLICK ACTION</span>`}
            titleExtra='MACRO FUNCTIONS'
            description='Allows you to program customizable keys to perform a series of actions with one click. For example, you can set a specific pattern of keystrokes to create a specific sequence that helps you attack a space alien or to mine for materials. They can also come in handy for combinations without having to try to remember what all of the hotkeys are.'
            image={{
              position: 'left',
              src: '/images/product-images/product-details/x50q/macro.png',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">PREVENT INTERRUPTIONS</span>`}
            titleExtra='GAMING MODE'
            description='The X50Q has a toggle that locks the Windows key from triggering the start menu, preventing the game from being pushed to the background and enables the Function keys and the Numpad keys to be used for macro functions.'
            image={{
              position: 'right',
              src: '/images/product-images/product-details/x50q/gaming-mode.png',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">SIMPLE CONTROL AT YOUR FINGERTIPS</span>`}
            titleExtra='QUICK ACCESS MEDIA CONTROLS'
            description='Das Keyboard X50Q provides direct controls to quickly set sound level, play or pause songs, and adjust RGB brightness while gaming or working.'
            image={{
              position: 'left',
              src: '/images/product-images/product-details/x50q/das-keyboard-x50-audio-control.jpg',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">REGISTER ALL KEY PRESSES</span>`}
            titleExtra='FULL N-KEY ROLLOVER'
            description='With 100% anti-ghosting with full n-key rollover, no matter how many keys you press simultaneously, all of them will be reliably registered. Whether you type super fast or your gameplay finger dexterity is amazing, the X50Q NKRO is able to deliver the spanking your opponent deserve.'
            image={{
              position: 'right',
              src: '/images/product-images/product-details/x50q/x50-rgb-mechanical-keyboard-side-view-cropped.jpg',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">PROTECT THE ENVIRONMENT</span>`}
            titleExtra='ENERGY-SAVING SLEEP FUNCTION'
            description='A small details that makes a big difference: The X50Q has a function control to put the computer to sleep instantly. It saves energy and helps the environment.'
            image={{
              position: 'left',
              src: '/images/product-images/product-details/x50q/earth.jpg',
              blend: true
            }}
          />
          <hr />
          <Banner
            textAlign="center"
            background="dark"
            padding={20}
            title={`<span class="text-red">KEEP YOUR DESK TIDY</span>`}
            titleExtra='EXTRA LONG BRAIDED CABLE'
            description='The X50Q sports an extra-long 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean.'
            image={{
              position: 'center',
              src: '/images/product-images/product-details/x50q/long-dog-with-long-cable.png',
              blend: true
            }}
          />
          <hr />
          <SwitchGammaZulu />
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            padding={20}
            title={`<span class="text-red">KEYPRESS PRECISION</span>`}
            titleExtra='WASD KEYCAPS INCLUDED'
            description='Accurate key presses are mandatory. The included gaming textured WASD keycap upgrade kit will give you a huge tactical advantage. Precision and style on your path to total domination. Key puller included as well.'
            image={{
              position: 'right',
              src: '/images/product-images/product-details/x50q/wasd-shapes-rgb.png',
              blend: true
            }}
          />
          <hr />
        </div>
      </div>
      <hr />
      <FeatureList />
      <FeatureList />
      <hr />
      <RelatedProducts />
    </>
  )
}
export default X50Q