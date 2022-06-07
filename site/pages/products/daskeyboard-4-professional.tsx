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
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import PageTitle from "@components/core/PageTitle"
import OversizedVolume from "@components/product/OversizedVolume"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import SwitchCherryBlue from "@components/product/SwitchCherryBlue"

export async function getStaticProps() {
  return {
    props: {
      bodyId: '4-professional',
      bodyClass: 'product-page four-series',
    },
  }
}

const D4Professional: VFC = () => {
  return (
    <>
      <PageTitle
        title="DAS KEYBOARD 4 PROFESSIONAL"
        type="product"
        product={{
          price: 169,
          canBuy: true,
        }}
      />

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
            The Das Keyboard 4 mechanical keyboard experience is like no other. From the initial idea to every fine detail when crafting this machine, the experience we deliver to customers is what drives our team.
            <br/><br/>
            The combination of tactile feel, the psycho-acoustic experience and incredible craftsmanship all deliver an unmatched typing experience that only Das Keyboard 4 offers. With a Das Keyboard 4, you’ll type faster and longer. It feels so good, you won’t want to stop.
            <br/><br/>
            Das Keyboard 4 Professional mechanical keyboard is made of the highest-quality materials and robust construction you can feel. All of our keyboards are designed with high-performance, gold-plated mechanical key switches lasting up to 50 million keystrokes.
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
        className="dark-section pt-5"
        content={{
          title: `QUALITY <span className="text-red">YOU CAN FEEL</span>`,
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

      <section className="bg-white section-pad">
        <div className="container-boxed">
          <div className="row">
            <div className="col-12 col-sm-6">
              <SwitchCherryBrown />
            </div>
            <div className="col-12 col-sm-6 mb-5 mb-sm-0">
              <SwitchCherryBlue />
            </div>
          </div>
        </div>
      </section>

      <OversizedVolume />

      <Banner
        sectionId="usbHub"
        className="my-4"
        content={{
          title: `USB 3.0 <span class="text-red">SUPERSPEED HUB</span>.`,
          textAlign: "left",
          description: 'Need to transfer videos to your workstation but don’t have time to wait all day for file transfers to complete? Don’t worry. Das Keyboard 4 has a blazing fast two-port USB 3.0 hub to transfer music, high resolution pictures and large videos at up to 5Gb per second. That’s 10 times faster than USB 2.0. It is backwards compatible with all USB 2.0/1.1 devices and hosts so previous peripheral investments are protected.'
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/daskeyboar-4-professional-usb3-hub.jpg',
          rounded: true
        }}
      />

      <NKeyRollover supportMac={false} />

      <KeyboardFont />

      <FootbarRuler />

      <Banner
        sectionId=""
        content={{
          textAlign: "left",
          background: "dark",
          title: `EVERY DETAIL <span className="text-red">MATTERS</span>`,
          description: `
            Featuring a stunning look, Das Keyboard 4 Professional has been completely redesigned with a sleek anodized aluminum top panel, a resonance-free bottom enclosure, a magnetically attached footbar, and a laser-engraved aluminum bottom label… all which make the design feel more badass and the typing feel more responsive.
            <br/><br/>
            There is no detail too tiny for us.
          `
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/img-every_detail_matters.jpg',
          rounded: true
        }}
      />

      <TechnicalSpecifications />

      <RelatedProducts title="4 Series" series="FOUR" />
    </>
  )
}
export default D4Professional