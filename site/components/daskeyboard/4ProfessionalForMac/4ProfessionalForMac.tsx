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

const D4ProfessionalForMac: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  return (
    <>
      <ProductHero
        heading="ENHANCE"
        title="YOUR MAC"
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
          title: `<span class="text-red">DAS KEYBOARD 4 PROFESSIONAL FOR MAC</span>`,
          titleExtra: `AN EXPERIENCE LIKE NO OTHER`,
          description: `The Das Keyboard 4 is an experience like no other. From the initial idea to every fine detail when crafting this machine, the experience we deliver to customers is what drives our team.<br/>The combination of tactile feel, the psycho-acoustic experience and incredible craftsmanship all deliver an unmatched typing experience that only Das Keyboard 4 offers. With a Das Keyboard 4 for Mac, you’ll type faster and longer. It feels so good, you won’t want to stop.<br/>Das Keyboard 4 Professional for Mac mechanical keyboard is specifically designed for Mac compatibility. It's made of the highest-quality materials and has a robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes. Give your Mac the keyboard it deserves.`
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
          textAlign: 'center',
          title: `QUALITY <span class="text-red">YOU CAN FEEL</span>`,
          description: 'Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.',
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

      <OversizedVolume />

      <Banner
        sectionId="usbHub"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'm-0',
          title: `USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`,
          description: '<br/>Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 for Mac has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected.'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/daskeyboar-4-professional-for-mac-usb3-hub.jpg',
          rounded: true
        }}
      />

      <NKeyRollover />

      <Banner
        sectionId="functionKeys"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: 'm-0',
          background: "light",
          title: `MAC OS SPECIFIC <span class="text-red">KEY FUNCTIONS</span>.`,
          description: '<br/>In addition to standard command and Alt/Option keys, Das Keyboard 4 Professional for Mac offers quick, convenient access to a number of other Mac specific key functions. The Das Keyboard 4 Professional for Mac makes it easy to toggle between screens, view your desktop along with other applications that you have open, and access your brightness controls all at the push of a button.'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional-for-mac/mac-key-function.jpg',
          rounded: true
        }}
      />

      <FootbarRuler />

      <Banner
        sectionId="everyDetail"
        content={{
          textAlign: "left",
          background: "dark",
          title: `EVERY DETAIL <span class="text-red">MATTERS</span>.`,
          description: `
            Featuring a stunning look, Das Keyboard 4 Professional for Mac has been designed with a slick anodized aluminum top panel, a resonance-free bottom enclosure, a magnetically attached footbar, and a laser-engraved aluminum bottom label… all which make the design feel more badass and the typing feel more responsive.
            <br/><br/>
            There is no detail too tiny for us.
          `
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
          description: 'Das Keyboard 4 Professional for Mac sports a 2-meter (6.5ft) cable that goes through desk grommets to keep your workspace neat and tidy. Now equipped with only one USB cable to power the keyboard and USB hub at the same time.'
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