import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import ProductHeader from "@components/product/ProductHeader"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import FeatureList from "@components/section/FeatureList"
import OperatingSystem from "@components/section/OperatingSystem"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductPerformance from "@components/section/ProductPerformance"
import ProductScreen from "@components/section/ProductScreen"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchGammaZulu from "@components/section/SwitchGammaZulu"
import type { VFC } from "react"

const D5QS: VFC<{}> = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 5QS"
        price={199}
        canBuy
        canDownload
      />
      <hr />
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
      <hr />
      <Banner
        textAlign="left"
        background="dark"
        title={`<span class="text-red">THE INFORMATION YOU NEED - ON YOUR KEYBOARD</span>`}
        description={`
          The Das Keyboard 5QS is the second generation of the 5Q keyboard, the smart RGB mechanical keyboard that helps boost productivity by displaying information (e.g. weather, stock quotes, project progress, CPU usage, etc..) in color on the keyboard’s keys. Smart RGB mechanical keyboard with macros to play recorded keystroke sequences and multiple built-in RGB profiles. Built-in features include macros to play recorded keystroke sequences, multiple built-in RGB profiles and effects, and an RGB profile editor.
          <br/><br/>
          Compatible with Windows, Ubuntu, Linux Mint, and macOS mode is available.
        `}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/5qs/dk5q_intro.png',
          blend: true
        }}
      />
      <hr />
      <FeatureList />
      <hr />
      <ProductVideo
        title='DAS KEYBOARD Q SOFWARE'
        description='MAKE YOUR KEYBOARD SMART'
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />
      <hr />
      <div className="section-pad">
        <DragDropAppletConfigure />
      </div>
      <div className="mt-5">&nbsp;</div>
      <QMessagePreview />
      <hr />
      <CustomizeKeyboard />
      <hr />
      <ProductApplets />
      <hr />
      <AppletsCTA />
      <hr />
      <OperatingSystem />
      <hr />
      <ProductPerformance />
      <div className="row bg-gray-darker p-5 text-white">
        <h2 className="text-center">INTENSE RGB COLORS IN BROAD DAYLIGHT</h2>
        <div className="d-flex flex-column">
          <Banner
            textAlign="left"
            background="dark"
            title={`<span class="text-red">2X BRIGHTER: RGB+</span>`}
            titleExtra='BRILLIANT COLORS THAT ARE NOT WASHED OUT'
            description={`
              Due to its enhanced brightness mode(*) and its modern switch design, the 5QS delivers intense colors that are not washed out by daylight - a problem that most RGB keyboards suffer from.
              <p class="small text-gray-light">(*) requires an USB 3.0 connection.</p>
            `}
            image={{
              position: 'left',
              src: '/images/gama-zulu-color-switch.jpg'
            }}
          />
          <hr />
          <SwitchGammaZulu />
          <hr />
          <div className="text-center">
            <h2>PREMIUM MATERIALS THROUGHOUT</h2>
            <p>For a luxurious typing experience</p>
            <Banner
              textAlign="left"
              background="dark"
              title={`<span class="text-red">ALUMINUM TOP</span>`}
              titleExtra='BUILT TO LAST'
              description='Das Keyboard 5QS sports an anodized black aluminum top panel. Made with first-class electronics this top panel will be serving you for years to come.'
              image={{
                position: 'left',
                src: '/images/product-images/product-details/5qs/aluminum-top.jpg',
                blend: true
              }}
            />
          </div>
          <hr />
          <Banner
            textAlign="left"
            background="dark"
            title={`<span class="text-red">DETACHABLE WRIST REST</span>`}
            titleExtra='COMFORTABLE TYPING'
            description='Das Keyboard 5QS features a detachable wrist rest that’s attached magnetically and helps typists rest their palms comfortably.'
            image={{
              position: 'right',
              src: '/images/product-images/product-details/5qs/das-keyboard-5q-wristpad.jpg',
              blend: true
            }}
          />
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
export default D5QS