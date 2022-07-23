import type { VFC } from "react"
import BuiltToLastVideo from "@components/product/BuiltToLastVideo"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import KeyboardFont from "@components/product/KeyboardFont"
import NKeyRollover from "@components/product/NKeyRollover"
import Banner from "@components/section/Banner"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHeroBlack from "@components/section/ProductHeroBlack"
import RelatedProducts from "@components/section/RelatedProducts"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import OversizedVolume from "@components/product/OversizedVolume"
import SwitchCherryBoth from "@components/product/SwitchCherryBoth"
import useTrans from "lang/useTrans"

const D4Professional: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <ProductHeroBlack
        heading="UBER QUALITY,"
        title={`UBER<br/>DESIGN.`}
        isCherry
        image={{
          src: '/images/product-images/product-details/4-professional/dk4pro_intro.png'
        }}
      />

      <Banner
        content={{
          title: `<span className="text-red">DAS KEYBOARD 4 PROFESSIONAL MECHANICAL KEYBOARD</span>`,
          titleExtra: "AN EXPERIENCE LIKE NO OTHER",
          description: `
            ${say('slogan_model-4-professional_content_1')}
            <br/><br/>
            ${say('slogan_model-4-professional_content_1.1')}
            <br/><br/>
            ${say('slogan_model-4-professional_content_1.2')}
          `
        }}
        containerPadding="section-pad"
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-professional/DK-4-pro-side-transparent.png',
          stretch: true
        }}
      />

      <Banner
        sectionId="values"
        className="pt-5"
        content={{
          title: `QUALITY <span class="text-red">YOU CAN FEEL</span>`,
          description: 'Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.',
          background: "dark"
        }}
        containerPadding="pt-md-5 mt-xl-5"
        image={{
          position: 'left',
          src: '/images/img-home-values.png'
        }}
      />

      <BuiltToLastVideo />

      <CherryMXSwitches />

      <SwitchCherryBoth
        brown={{ description: say('slogan_model-4-professional_content_4') }}
        blue={{ description: say('slogan_model-4-professional_content_3') }}
      />

      <ForceDiagram type="both" />

      <OversizedVolume
        description={say('slogan_model-4-professional_content_5')}
      />

      <Banner
        sectionId="usbHub"
        className="my-5 py-4"
        content={{
          title: `USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`,
          titlePadding: 'mb-0',
          textAlign: "left",
          description: 'Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected.'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/daskeyboar-4-professional-usb3-hub.jpg',
          rounded: true
        }}
      />

      <NKeyRollover supportMac={false} description={say('slogan_model-4-professional_content_7')} />

      <KeyboardFont description={say('slogan_model-4-professional_content_11')} />

      <FootbarRuler description={say('slogan_model-4-professional_content_8')} />

      <Banner
        sectionId="everyDetail"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'm-0',
          background: "dark",
          title: `EVERY DETAIL <span class="text-red">MATTERS</span>`,
          description: say('slogan_model-4-professional_content_10')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/img-every_detail_matters.jpg',
          rounded: true
        }}
      />

      <TechnicalSpecifications productSlug="4-professional" />

      <RelatedProducts
        title="4 Series"
        series="FOUR"
        sectionId="seriesLineup"
        className="bg-white text-center"
        boxed
      />
    </>
  )
}
export default D4Professional