import NKeyRollover from "@components/product/NKeyRollover"
import ProductHeader from "@components/product/ProductHeader"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import Banner from "@components/section/Banner"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductFeature from "@components/section/ProductFeature"
import ProductHero from "@components/section/ProductHero"
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import type { VFC } from "react"

const D4CTKL: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD 4C TKL"
        price={139}
        canBuy={true}
      />
      <hr />
      <ProductHero
        heading="MINIMAL FOOTPRINT"
        title="MAXIMUM POTENTIAL"
        isCherry={true}
        hasPrice={true}
        price={139}
        image={{
          src: '/images/product-images/product-details/4c-tkl/4c-tkl_side.jpg'
        }}
      />
      <hr />
      <Banner
        content={{
          textAlign: "left",
          title: "ULTRA MODERN, COMPACT DESIGN",
          description: `The 4C TKL features PBT keycaps, Cherry MX Brown switches, and a 2-port USB hub in a sleek tenkeyless (TKL) format. It's made of the highest-quality materials and has a solid construction you can feel. The Das Keyboard 4C TKL, helps maximize productivity while optimizing your desktop footprint. Featuring a sleek black anodized aluminum top panel, accented by charcoal grey PBT keycaps, with black sublimation legends, this TKL mechanical keyboard will have everyone envious.<br/>Charcoal PBT keycaps for maximum durability are paired with Cherry MX Brown switches, giving your new mechanical keyboard life up to 50 million keystrokes. You'll enjoy the tactile experience you love from a mechanical keyboard, with just enough sound to satisfy you - and not annoy your coworkers!<br/>Built with the same best-in-class materials you've come to expect from Das Keyboard, our latest model in TKL keyboard format includes a solid construction meant to streamline your work environment while maximizing your potential for speed.`
        }}
        image={{
          position: 'bottom',
          src: '/images/product-images/product-details/4c-tkl/daskeyboard-4C-tenkeyless-professional-rear-view.png'
        }}
      />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherryBrown />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <TechnicalSpecifications />
      <hr />
      <NKeyRollover />
      <hr />
      <FootbarRuler />
      <hr />
      <div className="row">
        <Banner
          content={{
            textAlign: "left",
            title: `<span class="text-red">USB CONVENIENCE AT YOUR FINGERTIPS</span>`,
            titleExtra: "TWO-PORT USB HUB",
            description: "The convenience to charge USB devices and simultaneously upload content through USB is now right at your fingertips."
          }}
          image={{
            position: 'left',
            src: "/images/product-images/product-details/4c-tkl/dk4c-tkl-usb-ports.jpg"
          }}
        />
        <hr />
        <Banner
          content={{
            textAlign: "left",
            title: `<span class="text-red">BRAND NEW</span>`,
            titleExtra: "DAS KEYBOARD PBT KEYCAPS IN CHARCOAL",
            description: "Charcoal grey PBT keycaps set against a black aluminum top panel give you a TKL mechanical keyboard with a polished and sophisticated appearance. This understated sleek design features the durability of PBT keycaps, allowing you to enjoy the fresh-out-of-the-box experience for years to come."
          }}
          image={{
            position: 'right',
            src: '/images/product-images/product-details/4c-tkl/daskeyboard-4C-tenkeyless-professional-rear-view_png.jpg'
          }}
        />
      </div>
    </>
  )
}
export default D4CTKL