import BuiltToLastVideo from "@components/product/BuiltToLastVideo"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import KeyboardFont from "@components/product/KeyboardFont"
import NKeyRollover from "@components/product/NKeyRollover"
import ProductHeader from "@components/product/ProductHeader"
import Banner from "@components/section/Banner"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHeroBlack from "@components/section/ProductHeroBlack"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import type { VFC } from "react"

const D4Professional: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 4 PROFESSIONAL"
        price={169}
        canBuy
      />
      <hr />
      <ProductHeroBlack
        heading="UBER QUALITY,"
        title={`UBER<br/>DESIGN.`}
        isCherry
        image={{
          src: '/images/product-images/product-details/4-professional/dk4pro_intro.png'
        }}
      />
      <hr />
      <Banner
        title={`<span class="text-red">DAS KEYBOARD 4 PROFESSIONAL MECHANICAL KEYBOARD</span>`}
        titleExtra="AN EXPERIENCE LIKE NO OTHER"
        description={`
          The Das Keyboard 4 mechanical keyboard experience is like no other. From the initial idea to every fine detail when crafting this machine, the experience we deliver to customers is what drives our team.
          <br/><br/>
          The combination of tactile feel, the psycho-acoustic experience and incredible craftsmanship all deliver an unmatched typing experience that only Das Keyboard 4 offers. With a Das Keyboard 4, you’ll type faster and longer. It feels so good, you won’t want to stop.
          <br/><br/>
          Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.
        `}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-professional/DK-4-pro-side-transparent.png'
        }}
      />
      <hr />
      <Banner
        background="dark"
        title={`QUALITY <span class="text-red">YOU CAN FEEL</span>`}
        description='Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.'
        image={{
          position: 'left',
          src: '/images/img-home-values.png'
        }}
      />
      <hr />
      <BuiltToLastVideo />
      <hr />
      <CherryMXSwitches />
      <hr />
      <div className="row">
        <div className="col-md-6"><SwitchCherry /></div>
        <div className="col-md-6"><SwitchCherry /></div>
      </div>
      <hr />
      <div className="row bg-gray-darker p-4 text-white">
        <div className="col-md-6"><ForceDiagram /></div>
        <div className="col-md-6"><ForceDiagram /></div>
      </div>
      <hr />
      <Banner
        sectionId=""
        textAlign="left"
        background="light"
        title={`<span class="text-red">OVERSIZED VOLUME KNOB</span>`}
        titleExtra='AND DEDICATED MEDIA CONTROLS'
        description={`With its large volume knob, Das Keyboard 4 allows users to quickly adjust volume while on a Skype call, in a Google hangout, or streaming online music. The Das Keyboard 4 also provides quick access to dedicated media controls such as mute, play, pause, next and previous track. A quick-access instant sleep button has been added to save energy while going to lunch or attending meetings.`}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/img-dk4-oversized_volume_knob.png'
        }}
      />
      <hr />
      <Banner
        sectionId=""
        textAlign="left"
        title={`USB 3.0 <span class="text-red">SUPERSPEED HUB</span>`}
        description='Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected.'
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/daskeyboar-4-professional-usb3-hub.jpg',
          rounded: true
        }}
      />
      <hr />
      <NKeyRollover supportMac={false} />
      <hr />
      <KeyboardFont />
      <hr />
      <FootbarRuler />
      <hr />
      <Banner
        sectionId=""
        textAlign="left"
        background="dark"
        title={`EVERY DETAIL <span class="text-red">MATTERS</span>`}
        description={`
          Featuring a stunning look, Das Keyboard 4 Professional has been completely redesigned with a sleek anodized aluminum top panel, a resonance-free bottom enclosure, a magnetically attached footbar, and a laser-engraved aluminum bottom label… all which make the design feel more badass and the typing feel more responsive.
          <br/><br/>
          There is no detail too tiny for us.
        `}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/img-every_detail_matters.jpg',
          rounded: true
        }}
      />
      <hr />
      <TechnicalSpecifications />
      <hr />
      <RelatedProducts />
    </>
  )
}
export default D4Professional