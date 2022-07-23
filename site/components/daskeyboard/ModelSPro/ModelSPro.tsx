import type { VFC } from "react"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import NKeyRollover from "@components/product/NKeyRollover"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import SwitchCherryBoth from "@components/product/SwitchCherryBoth"
import useTrans from "lang/useTrans"

const ModelSPro: VFC = () => {
  const { say } = useTrans();
  return (
    <>
      <ProductHero
        heading={say('model-s-professional_slider_1_title')}
        title={say('model-s-professional_slider_1_subtitle')}
        isCherry={true}
        hasPrice={false}
        fill
        image={{
          src: '/images/product-images/product-details/model-s-pro/dkms_intro.jpg',
          contained: true
        }}
      />

      <Banner
        sectionId="values"
        className="pt-5 mb-5"
        content={{
          background: 'light',
          title: say('slogan_model-s-professional_title_3'),
          titlePadding: 'pt-5 mt-5',
          description: say('slogan_model-s-professional_content_3')
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro/img-dkms_quality.jpg',
          srcFull: '/images/product-images/product-details/model-s-pro/img-dkms_quality-full.jpg',
          blend: true,
        }}
      />

      <ProductVideo
        theme="dark"
        className="mt-5"
        margin={{ top: 120 }}
        title={`SUPER <span class="text-red">AWESOME FEEL</span>.`}
        description={say('slogan_model-s-professional_content_1')}
        video={{ src: "https://www.youtube.com/embed/NHIMMqhW3kY?rel=0" }}
      />

      <CherryMXSwitches />

      <SwitchCherryBoth />

      <ForceDiagram type="both" />

      <Banner
        sectionId="typeFaster"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: "mb-0",
          title: say('slogan_model-s-professional_title_2'),
          description: say('slogan_model-s-professional_content_2'),
        }}
        image={{
          position: 'left',
          src: "/images/product-images/product-details/model-s-pro/model-s-professional-side-view.jpg"
        }}
      />

      <NKeyRollover />

      <Banner
        sectionId="uberQuality"
        sectionPad
        content={{
          textAlign: "left",
          titlePadding: "m-0",
          title: `UBER <span class="text-red">QUALITY</span>.`,
          description: `When Germans engineer it, you know it has to be good. We’re perfectionists focused on creating top rated products for our fellow overachievers. Das Keyboard Model S Professional mechanical keyboard is made of the highest-quality materials and robust construction.`
        }}
        image={{
          position: 'left',
          src: "/images/product-images/product-details/model-s-pro/model-s-professional-reflection.png",
        }}
      />

      <TechnicalSpecifications
        productSlug="model-s-pro"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit"
      />
    </>
  )
}
export default ModelSPro