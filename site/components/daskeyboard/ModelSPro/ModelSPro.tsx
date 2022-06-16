import type { VFC } from "react"
import CherryMXSwitches from "@components/product/CherryMXSwitches"
import NKeyRollover from "@components/product/NKeyRollover"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import SwitchCherryBoth from "@components/product/SwitchCherryBoth"

const ModelSPro: VFC = () => {
  return (
    <>
      <ProductHero
        heading="HIGH PERFORMANCE"
        title="HIGH QUALITY."
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
          title: `UBER <span class="text-red">QUALITY</span>`,
          description: "When Germans engineer it, you know it has to be good. We’re perfectionists focused on creating top rated products for our fellow overachievers. Das Keyboard Model S Professional mechanical keyboard is made of the highest-quality materials and robust construction."
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro/img-dkms_quality.jpg',
          blend: true
        }}
      />

      <ProductVideo
        theme="dark"
        className="mt-5"
        margin={{ top: 120 }}
        title={`SUPER <span class="text-red">AWESOME FEEL</span>.`}
        description="Behold the outstanding tactile and audio response with every keystroke you make. This high-performance, mechanical keyboard feels amazing on your fingertips and offers two distinct tactile experiences - click and soft. Your fingers will love it."
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
          title: `TYPE <span class="text-red">SIGNIFICANTLY FASTER</span>.`,
          description: "Type faster than you ever thought possible on this mechanical wonder. The addictive tactile feedback allows you to have a faster, more accurate typing experience.<br/>Gold plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust and lasts over time.",
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
        productSlug="daskeyboard-model-s-pro"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit"
      />
    </>
  )
}
export default ModelSPro