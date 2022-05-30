import NKeyRollover from "@components/product/NKeyRollover"
import ProductHeader from "@components/product/ProductHeader"
import Banner from "@components/section/Banner"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHeroBlack from "@components/section/ProductHeroBlack"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import TextBlock from "@components/section/TextBlock"
import type { VFC } from "react"

const D4ProfessionalForMac: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 4 PROFESSIONAL FOR MAC"
        price={169}
        canBuy
      />
      <hr />
      <ProductHeroBlack
        heading="ENHANCE"
        title="YOUR MAC"
        isCherry={true}
        image={{
          src: '/images/product-images/product-details/4-professional-for-mac/dk4pro-mac_intro.png'
        }}
      />
      <hr />
      <Banner
        textAlign='center'
        title={`<span class="text-red">DAS KEYBOARD 4 PROFESSIONAL FOR MAC</span>`}
        titleExtra={`AN EXPERIENCE LIKE NO OTHER`}
        description={`The Das Keyboard 4 is an experience like no other. From the initial idea to every fine detail when crafting this machine, the experience we deliver to customers is what drives our team.<br/>The combination of tactile feel, the psycho-acoustic experience and incredible craftsmanship all deliver an unmatched typing experience that only Das Keyboard 4 offers. With a Das Keyboard 4 for Mac, you’ll type faster and longer. It feels so good, you won’t want to stop.<br/>Das Keyboard 4 Professional for Mac mechanical keyboard is specifically designed for Mac compatibility. It's made of the highest-quality materials and has a robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes. Give your Mac the keyboard it deserves.`}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-professional-for-mac/DK-4-pro-side-transparent.png'
        }}
      />
      <hr />
      <Banner
        textAlign='center'
        title={`QUALITY <span class="text-red">YOU CAN FEEL</span>`}
        description='Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.'
        image={{
          position: 'left',
          src: 'https://4eighty.com/sites/daskeyboard/images/img-home-values.png'
        }}
      />
      <hr />
      <ProductVideo
        title={`BUILD <span class="text-red">TO LAST</span>.`}
        description="The perfect blend of technology and art."
        video={{
          src: 'https://www.youtube.com/embed/9byG-aS4Hf0?rel=0'
        }}
      />
      <hr />
      <TextBlock
        title={`CHERRY <span class="text-red">MX SWITCHES</span>.`}
        description="Das Keyboard uses best-in-class, Cherry MX mechanical key switches that provide tactile and audio feedback so accurate it allows you to execute every keystroke with lightning-fast precision. Its high-performance, gold-plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust, increasing the lifespan of the switch. The Das Keyboard 4 Professional mechanical keyboard is available in both the Cherry MX brown and Cherry MX blue switches."
      />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherry />
        </div>
        <div className="col-md-6">
          <SwitchCherry />
        </div>
      </div>
      <hr />
      <div className="row bg-gray-darker text-white py-5">
        <div className="col-md-6">
          <ForceDiagram />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <Banner
        textAlign="left"
        background="light"
        padding={20}
        title={`<span class="text-red">OVERSIZED VOLUME KNOB</span>`}
        titleExtra='AND DEDICATED MEDIA CONTROLS'
        description={`
          With its large volume knob, Das Keyboard 4 for Mac allows users to quickly adjust volume while on a Skype call, in a Google hangout, or streaming online music. The Das Keyboard 4 for Mac also provides quick access to dedicated media controls such as mute, play, pause, next and previous track.
          <br/><br/>
          <strong>Energy-saving instant sleep button.</strong> Be kind to the earth by putting your computer to sleep with the quick-access instant sleep button. Not only will you save energy, but by putting your computer to sleep, you save time and can be up and running much faster than if you shut down and restart.
        `}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/img-dk4-oversized_volume_knob.png'
        }}
      />
      <hr />
      <Banner
        textAlign="left"
        title={`USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`}
        description='Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 for Mac has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected.'
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/daskeyboar-4-professional-for-mac-usb3-hub.jpg',
          rounded: true
        }}
      />
      <hr />
      <NKeyRollover />
      <hr />
      <Banner
        textAlign="left"
        background="light"
        padding={30}
        title={`MAC OS SPECIFIC <span class="text-red">KEY FUNCTIONS</span>.`}
        description='In addition to standard command and Alt/Option keys, Das Keyboard 4 Professional for Mac offers quick, convenient access to a number of other Mac specific key functions. The Das Keyboard 4 Professional for Mac makes it easy to toggle between screens, view your desktop along with other applications that you have open, and access your brightness controls all at the push of a button.'
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/mac-key-function.jpg',
          rounded: true
        }}
      />
      <hr />
      <FootbarRuler />
      <hr />
      <Banner
        textAlign="left"
        background="dark"
        padding={'30 20 30 20'}
        title={`EVERY DETAIL <span class="text-red">MATTERS</span>.`}
        description={`
          Featuring a stunning look, Das Keyboard 4 Professional for Mac has been designed with a slick anodized aluminum top panel, a resonance-free bottom enclosure, a magnetically attached footbar, and a laser-engraved aluminum bottom label… all which make the design feel more badass and the typing feel more responsive.
          <br/><br/>
          There is no detail too tiny for us.
        `}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/img-every_detail_matters.jpg',
          rounded: true
        }}
      />
      <hr />
      <Banner
        textAlign="left"
        title={`EXTRA LONG <span class="text-red">CABLE</span>.`}
        description='Das Keyboard 4 Professional for Mac sports a 2-meter (6.5ft) cable that goes through desk grommets to keep your workspace neat and tidy. Now equipped with only one USB cable to power the keyboard and USB hub at the same time.'
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/daskeyboard-4-usb-cable.jpg',
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
export default D4ProfessionalForMac