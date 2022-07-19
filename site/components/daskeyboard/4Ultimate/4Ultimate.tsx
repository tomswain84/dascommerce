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
import SwitchCherryBoth from "@components/product/SwitchCherryBoth"
import OversizedVolume from "@components/product/OversizedVolume"
import useTrans from "lang/useTrans"

const D4Ultimate: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <ProductHeroBlack
        heading={say('model-4-ultimate_slider_2_title')}
        title={say('model-4-ultimate_slider_2_subtitle')}
        fill
        isCherry
        image={{
          src: '/images/product-images/product-details/4-ultimate/dk4pro_intro.png'
        }}
      />

      <Banner
        sectionPad
        containerPadding="pt-xl-5 mt-sm-5"
        content={{
          title: `<span>DAS KEYBOARD 4 ULTIMATE</span>`,
          titleExtra: 'AN EXPERIENCE LIKE NO OTHER',
          description: say('slogan_model-4-ultimate_content_1')
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-ultimate/DK-4-pro-side-transparent.png',
          stretch: true
        }}
      />

      <Banner
        sectionId="values"
        className="pt-5"
        content={{
          background: 'dark',
          title: `QUALITY <span class="text-red">YOU CAN FEEL</span>`,
          description: 'Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-ultimate/img-quality_you_can_feel-m.png',
          srcFull: '/images/product-images/product-details/4-ultimate/img-quality_you_can_feel.png'
        }}
      />

      <BuiltToLastVideo />

      <CherryMXSwitches />

      <SwitchCherryBoth />

      <ForceDiagram type="both" />

      <OversizedVolume
        image={{
          src: '/images/product-images/product-details/4-ultimate/img-dk4-oversized_volume_knob.jpg',
          blend: true
        }}
        description={say('slogan_model-4-ultimate_content_5')}
      />

      <Banner
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'mb-0',
          title: `USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`,
          description: say('slogan_model-4-ultimate_content_6')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-ultimate/daskeyboar-4-ultimate-usb3-hub.jpg',
          rounded: true
        }}
      />

      <NKeyRollover description={say('slogan_model-4-ultimate_content_7')} />

      <KeyboardFont />

      <FootbarRuler description={say('slogan_model-4-ultimate_content_8')} />

      <Banner
        sectionId="everyDetail"
        sectionPad
        content={{
          textAlign: "left",
          background: "dark",
          titlePadding: "mb-0",
          title: `EVERY DETAIL <span class="text-red">MATTERS</span>.`,
          description: `
            <br/>
            ${say('slogan_model-4-professional_content_10')}
          `
        }}
        image={{
          position: 'left',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/img-every_detail_matters.jpg'
        }}
      />

      <TechnicalSpecifications
        productSlug="4-ultimate"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit"
      />

      <Banner
        sectionId="longCable"
        sectionPad
        content={{
          textAlign: "left",
          title: `EXTRA LONG <span class="text-red">CABLE</span>.`,
          description: say('slogan_model-4-ultimate_content_9')
        }}
        image={{
          position: 'left',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/daskeyboard-4-usb-cable.jpg'
        }}
      />

      <Banner
        sectionId="blankKeys"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'mb-0',
          background: "dark",
          title: `BLANK <span class="text-red">AND BADASS</span>.`,
          description: say('slogan_model-4-ultimate_content_11')
        }}
        image={{
          position: 'right',
          rounded: true,
          src: '/images/product-images/product-details/4-ultimate/daskeyboard-4-ultimate-font.jpg'
        }}
      />

      <RelatedProducts
        title="4 Series"
        series="FOUR"
        sectionId="seriesLineup"
        className="text-center"
        boxed
      />
    </>
  )
}
export default D4Ultimate