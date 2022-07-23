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
import useTrans from "lang/useTrans"

const D4CTKL: VFC<{ product: Product, isRefurbished: boolean }> = ({ product, isRefurbished }) => {
  const { $html, say } = useTrans()
  return (
    <>
      <ProductHero
        heading={say('model-4C-tenkeyless-professional_slider_1_title')}
        title={say('model-4C-tenkeyless-professional_slider_1_subtitle')}
        isCherry={true}
        hasPrice={true}
        price={isRefurbished ? product.refurbished.price : product.price}
        image={{
          src: '/images/product-images/product-details/4c-tkl/4c-tkl_side.jpg'
        }}
      />

      <AppletDashboard
        title={say('slogan_model-4C-tenkeyless-professional_title_1')}
        description={`
          ${say('slogan_model-4C-tenkeyless-professional_content_1')}
          ${say('slogan_model-4C-tenkeyless-professional_content_1.1')}
          ${say('slogan_model-4C-tenkeyless-professional_content_1.2')}
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
        productSlug="4C-tkl"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit?usp=sharing"
      />

      <NKeyRollover description={say('slogan_model-4C-tenkeyless-professional_content_7')} />

      <FootbarRuler />

      <ProductFeatureGroup
        rows={[
          {
            type: 'content',
            heading: 'USB CONVENIENCE AT YOUR FINGERTIPS',
            title: 'TWO-PORT USB HUB',
            description: say('slogan_model-4C-tenkeyless-professional_content_9'),
            image: {
              position: 'left',
              src: '/images/product-images/product-details/4c-tkl/dk4c-tkl-usb-ports.jpg'
            }
          },
          {
            type: 'content',
            heading: 'BRAND NEW',
            title: say('slogan_model-4C-tenkeyless-professional_title_11'),
            description: say('slogan_model-4C-tenkeyless-professional_content_11'),
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