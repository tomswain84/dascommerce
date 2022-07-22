import type { VFC } from "react"
import BuiltToLastVideo from "@components/product/BuiltToLastVideo"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import NKeyRollover from "@components/product/NKeyRollover"
import OversizedVolume from "@components/product/OversizedVolume"
import SwitchCherryBoth from "@components/product/SwitchCherryBoth"
import Banner from "@components/section/Banner"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import RelatedProducts from "@components/section/RelatedProducts"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import ProductHero from "@components/section/ProductHero"
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

const D4ProfessionalForMac: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { say, $html } = useTrans();
  return (
    <>
      <ProductHero
        heading={say('model-4-professional-for-mac_slider_3_heading')}
        title={say('model-4-professional-for-mac_slider_3_title')}
        hasPrice
        price={isRefurbished ? product.refurbished.price : product.price}
        isCherry
        fill
        image={{
          src: '/images/product-images/product-details/4-professional-for-mac/dk4pro-mac_intro.png',
        }}
      />

      <Banner
        sectionPad
        content={{
          background: 'light',
          textAlign: 'center',
          title: `<span class="text-red">${say('slogan_model-4-professional-for-mac_title_1')}</span>`,
          titleExtra: say('slogan_model-4-professional-for-mac_title_2'),
          description: `
            ${say('slogan_model-4-professional-for-mac_content_1')}
            ${say('slogan_model-4-professional-for-mac_content_1.1')}
            ${say('slogan_model-4-professional-for-mac_content_1.2')}
          `
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4-professional-for-mac/DK-4-pro-side-transparent.png',
          stretch: true
        }}
      />

      <Banner
        sectionId="values"
        sectionPad
        className="pt-5"
        containerPadding="pt-md-5 mt-xl-5"
        content={{
          textAlign: 'left',
          title: `QUALITY <span class="text-red">YOU CAN FEEL</span>`,
          description: say('slogan_model-4-professional-for-mac_content_11'),
          background: 'dark'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/dk4-pro-mac-quality.png',
        }}
      />

      <BuiltToLastVideo />

      <CherryMXSwitches />

      <SwitchCherryBoth />

      <ForceDiagram type="both" />

      <OversizedVolume
        title={say('slogan_model-4-professional-for-mac_title_5')}
        description={say('slogan_model-4-professional-for-mac_content_5')}
      />

      <Banner
        sectionId="usbHub"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'm-0',
          title: `USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`,
          description: say('slogan_model-4-professional-for-mac_content_6'),
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/daskeyboar-4-professional-for-mac-usb3-hub.jpg',
          rounded: true
        }}
      />

      <NKeyRollover
        description={say('slogan_model-4-professional-for-mac_content_7')}
      />

      <Banner
        sectionId="functionKeys"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'm-0',
          background: "light",
          title: `MAC OS SPECIFIC <span class="text-red">KEY FUNCTIONS</span>.`,
          description: say('slogan_model-4-professional-for-mac_content_7bis')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/mac-key-function.jpg',
          rounded: true
        }}
      />

      <FootbarRuler
        description={say('slogan_model-4-professional-for-mac_content_8')}
      />

      <Banner
        sectionId="everyDetail"
        content={{
          textAlign: "left",
          background: "dark",
          title: `EVERY DETAIL <span class="text-red">MATTERS</span>.`,
          description: say('slogan_model-4-professional-for-mac_content_10')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/img-every_detail_matters.jpg',
          rounded: true
        }}
      />

      <Banner
        sectionId="longCable"
        sectionPad
        content={{
          textAlign: "left",
          title: `EXTRA LONG <span class="text-red">CABLE</span>.`,
          description: say('slogan_model-4-professional-for-mac_content_9')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/daskeyboard-4-usb-cable.jpg',
          rounded: true
        }}
      />

      <TechnicalSpecifications
        productSlug="4-professional-for-mac"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit"
      />

      <RelatedProducts
        title="4 Series"
        series="FOUR"
        className="text-center"
        boxed
      />
    </>
  )
}
export default D4ProfessionalForMac