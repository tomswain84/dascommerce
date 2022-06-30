import type { VFC } from "react"
import NKeyRollover from "@components/product/NKeyRollover"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import FootbarRuler from "@components/section/FootbarRuler"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHero from "@components/section/ProductHero"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import AppletDashboard from "@components/product/AppletDashboard"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import { Product } from "@interfaces/product"

const D4CTKL: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  return (
    <>
      <ProductHero
        heading="MINIMAL FOOTPRINT"
        title="MAXIMUM POTENTIAL"
        isCherry={true}
        hasPrice={true}
        price={isRefurbished ? product.refurbished.price : product.price}
        image={{
          src: '/images/product-images/product-details/4c-tkl/4c-tkl_side.jpg'
        }}
      />

      <AppletDashboard
        title="ULTRA-MODERN, COMPACT DESIGN"
        description={`
          The 4C TKL features PBT keycaps, Cherry MX Brown switches, and a 2-port USB hub in a sleek tenkeyless (TKL) format. It's made of the highest-quality materials and has a solid construction you can feel. The Das Keyboard 4C TKL, helps maximize productivity while optimizing your desktop footprint. Featuring a sleek black anodized aluminum top panel, accented by charcoal grey PBT keycaps, with black sublimation legends, this TKL mechanical keyboard will have everyone envious.
          <br/><br/>
          Charcoal PBT keycaps for maximum durability are paired with Cherry MX Brown switches, giving your new mechanical keyboard life up to 50 million keystrokes. You'll enjoy the tactile experience you love from a mechanical keyboard, with just enough sound to satisfy you - and not annoy your coworkers!
          <br/><br/>
          Built with the same best-in-class materials you've come to expect from Das Keyboard, our latest model in TKL keyboard format includes a solid construction meant to streamline your work environment while maximizing your potential for speed.
        `}
        image={{
          src: "/images/product-images/product-details/4c-tkl/daskeyboard-4C-tenkeyless-professional-rear-view.png",
          rounded: true
        }}
      />

      <div className="bg-white section-pad">
        <div className="container-boxed">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 mb-5 mb-md-0">
              <SwitchCherryBrown />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              <ForceDiagram type="brown" />
            </div>
          </div>
        </div>
      </div>

      <TechnicalSpecifications
        productSlug="daskeyboard-4C-tkl"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit?usp=sharing"
      />

      <NKeyRollover />

      <FootbarRuler />

      <ProductFeatureGroup
        rows={[
          {
            type: 'content',
            heading: 'USB CONVENIENCE AT YOUR FINGERTIPS',
            title: 'TWO-PORT USB HUB',
            description: 'The convenience to charge USB devices and simultaneously upload content through USB is now right at your fingertips.',
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4c-tkl/dk4c-tkl-usb-ports.jpg'
            }
          },
          {
            type: 'content',
            heading: 'BRAND NEW',
            title: 'DAS KEYBOARD PBT KEYCAPS IN CHARCOAL',
            description: 'Charcoal grey PBT keycaps set against a black aluminum top panel give you a TKL mechanical keyboard with a polished and sophisticated appearance. This understated sleek design features the durability of PBT keycaps, allowing you to enjoy the fresh-out-of-the-box experience for years to come.',
            image: {
              position: 'right',
              src: '/images/product-images/product-details/4c-tkl/daskeyboard-4C-tenkeyless-professional-rear-view_png.jpg'
            }
          },
        ]}
      />
    </>
  )
}
export default D4CTKL