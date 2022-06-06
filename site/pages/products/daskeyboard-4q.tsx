import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import ProductHeader from "@components/product/ProductHeader"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import FeatureList from "@components/section/SpecificationList"
import ForceDiagram from "@components/section/ForceDiagram"
import Materials from "@components/section/Materials"
import ProductCompatibility from "@components/product/ProductCompatibility"
import ProductApplets from "@components/section/ProductApplets"
import ProductHero from "@components/section/ProductHero"
import ProductScreen from "@components/section/ProductScreen"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchCherry from "@components/section/SwitchCherry"
import type { VFC } from "react"

const D4Q: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 4Q"
        price={115}
        canBuy
        canDownload
      />
      <hr />
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
      <hr />
      <Banner
        textAlign="left"
        background="dark"
        title={`<span class="text-red">THE INFORMATION YOU NEED - ON YOUR KEYBOARD</span>`}
        description="The Das Keyboard 4Q is the smart RGB Cherry MX version of the iconic industry-standard Das Keyboard 4 Professional. It is the ultimate productivity tool that keeps programmers focused on writing software and operating at the highest level of concentration. No more unwanted interruptions. Instead of relying on snooze-able, momentary alerts from different devices, the Das Keyboard 4Q ambiently tracks the most important information directly on its RGB keys. Users can configure it for their needs. For example, if a website is down or you have been assigned a new task, or if the software build fails, the Das Keyboard 4Q will change color and let you know."
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4q/dk4q_intro.jpg',
          blend: true
        }}
      />
      <hr />
      <ProductVideo
        title="DAS KEYBOARD Q SOFTWARE"
        description="MAKE YOUR KEYBOARD SMART"
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />
      <hr />
      <DragDropAppletConfigure />
      <hr />
      <QMessagePreview />
      <hr />
      <CustomizeKeyboard />
      <hr />
      <ProductApplets />
      <hr />
      <AppletsCTA />
      <hr />
      <ProductCompatibility />
      <hr />
      <Materials />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherry />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column bg-gray-darker">
        <Banner
          textAlign="left"
          background="dark"
          title={`<span class="text-red">DURABLE ALUMINUM PANEL</span>`}
          titleExtra="BUILT TO LAST FOR YEARS"
          description="Das Keyboard 4Q sports an anodized black aluminum top panel. Made with first-class electronics this top panel will be serving you for years to come."
          image={{
            position: 'left',
            src: '/images/product-images/product-details/4q/dk4q-aluminum-top-panel.png',
            blend: true,
          }}
        />
        <hr />
        <Banner
          textAlign="left"
          background="dark"
          title={`<span class="text-red">KEEP YOUR GAMING SPACE CLEAN</span>`}
          titleExtra="EXTRA LONG BRAIDED CABLE"
          description="The 4Q sports a 2-meter (6.5ft) braided USB cable that goes through desk grommets to keep the desk clean."
          image={{
            position: 'center',
            src: '/images/product-images/product-details/4q/long-dog-with-long-cable.png',
            blend: true,
          }}
        />
        <hr />
        <Banner
          textAlign="left"
          background="dark"
          title={`<span class="text-red">USB CONVENIENCE AT YOUR FINGERTIPS</span>`}
          titleExtra="TWO-PORT USB HUB"
          description="Das Keyboard 4Q has a convenient two-port USB Hub for transferring files and connecting devices. No more reaching to the back of your computer."
          image={{
            position: 'left',
            src: '/images/product-images/product-details/4q/dk4q-usb-ports.jpg',
            blend: true,
          }}
        />
        <hr />
        <Banner
          textAlign="left"
          background="dark"
          title={`<span class="text-red">QUICK ACCESS FOR AUDIO PLAYBACK AND VOLUME</span>`}
          titleExtra="DEDICATED MEDIA CONTROLS"
          description="Direct controls to quickly set sound level, play or pause songs, and adjust volume while gaming or working."
          image={{
            position: 'right',
            src: '/images/product-images/product-details/4q/dk4q-media-controls.jpg',
            blend: true,
          }}
        />
      </div>
      <hr />
      <FeatureList
        rows={[]}
      />
      <hr />
      <RelatedProducts
        title=""
        series="Q"
      />
    </>
  )
}
export default D4Q