import BuiltToLastVideo from "@components/product/BuiltToLastVideo"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import KeyboardFont from "@components/product/KeyboardFont"
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

const D4Ultimate: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 4 ULTIMATE"
        price={169}
        canBuy
      />
      <hr />
      <ProductHeroBlack
        heading="COMPLETELY BLANK"
        title="ONLY FOR THE BEST"
        isCherry
        image={{
          src: '/images/product-images/product-details/4-ultimate/dk4pro_intro.png'
        }}
      />
      <hr />
      <Banner
        title={`<span>DAS KEYBOARD 4 ULTIMATE</span>`}
        titleExtra='AN EXPERIENCE LIKE NO OTHER'
        description={`
          The Das Keyboard 4 mechanical keyboard experience is like no other. From the initial idea to every fine detail when crafting this machine, the experience we deliver to customers is what drives our team.
          <br/><br/>
          The combination of tactile feel, the psycho-acoustic experience and incredible craftsmanship all deliver an unmatched typing experience that only Das Keyboard 4 offers. With a Das Keyboard 4, you’ll type faster and longer. It feels so good, you won’t want to stop.
          <br/><br/>
          Das Keyboard 4 Ultimate mechanical keyboard is a completely blank keyboard for badass typists and gaming enthusiasts. It's made of the highest-quality materials and has a robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.
        `}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-ultimate/DK-4-pro-side-transparent.png'
        }}
      />
      <hr />
      <Banner
        title={`QUALITY <span class="text-red">YOU CAN FEEL</span>`}
        description='Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.'
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-ultimate/img-quality_you_can_feel-m.png'
        }}
      />
      <hr />
      <BuiltToLastVideo />
      <hr />
      <CherryMXSwitches />
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
      <div className="row bg-gray-darker p-3 text-white">
        <div className="col-md-6"><ForceDiagram /></div>
        <div className="col-md-6"><ForceDiagram /></div>
      </div>
      <hr />
      <Banner
        textAlign="left"
        title={`<span class="text-red">OVERSIZED VOLUME KNOB</span>`}
        titleExtra={`<small>AND DEDICATED MEDIA CONTROLS</small>`}
        description="With its large volume knob, Das Keyboard 4 allows users to quickly adjust volume while on a Skype call, in a Google hangout, or streaming online music. The Das Keyboard 4 also provides quick access to dedicated media controls such as mute, play, pause, next and previous track. A quick-access instant sleep button has been added to save energy while going to lunch or attending meetings."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-ultimate/img-dk4-oversized_volume_knob.jpg'
        }}
      />
      <hr />
      <Banner
        textAlign="left"
        title={`USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`}
        description="Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-ultimate/daskeyboar-4-ultimate-usb3-hub.jpg'
        }}
      />
      <hr />
      <NKeyRollover />
      <hr />
      <KeyboardFont />
      <hr />
      <FootbarRuler />
      <hr />
      <Banner
        textAlign="left"
        background="dark"
        padding={20}
        title={`EVERY DETAIL <span class="text-red">MATTERS</span>.`}
        description={`
          Featuring a stunning look, Das Keyboard 4 Professional has been completely redesigned with a sleek anodized aluminum top panel, a resonance-free bottom enclosure, a magnetically attached footbar, and a laser-engraved aluminum bottom label… all which make the design feel more badass and the typing feel more responsive.
          <br/><br/>
          There is no detail too tiny for us.
        `}
        image={{
          position: 'left',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/img-every_detail_matters.jpg'
        }}
      />
      <hr />
      <TechnicalSpecifications />
      <hr />
      <Banner
        textAlign="left"
        padding={20}
        title={`EXTRA LONG <span class="text-red">CABLE</span>.`}
        description='Das Keyboard 4 sports a 2-meter (6.5ft) cable that goes through desk grommets to keep your workspace neat and tidy. Now equipped with only one USB cable to power keyboard and USB hub at the same time.'
        image={{
          position: 'left',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/daskeyboard-4-usb-cable.jpg'
        }}
      />
      <hr />
      <Banner
        textAlign="left"
        background="dark"
        padding={20}
        title={`BLANK <span class="text-red">AND BADASS</span>.`}
        description='Type faster than you ever thought possible on one of these blank babies. The Das Keyboard 4 Ultimate is a completely blank keyboard for badass typists and gaming enthusiasts.'
        image={{
          position: 'right',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/daskeyboard-4-ultimate-font.jpg'
        }}
      />
      <hr />
      <RelatedProducts />
    </>
  )
}
export default D4Ultimate