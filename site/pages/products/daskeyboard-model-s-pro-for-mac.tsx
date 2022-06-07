import type { VFC } from "react"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import SwitchCherryBrown from "@components/product/SwitchCherryBrown"
import PageTitle from "@components/core/PageTitle"
import SwitchCherryBlue from "@components/product/SwitchCherryBlue"
import NKeyRollover from "@components/product/NKeyRollover"

export async function getStaticProps() {
  return {
    props: {
      bodyId: 'model-s-pro-mac',
      bodyClass: 'product-page',
    },
  }
}

const ModelSProForMac: VFC<{}> = () => {
  // const product = products.find(p => p.slug === slug)
  return (
    <>
      <PageTitle
        title="DAS KEYBOARD MODEL S PRO FOR MAC"
        type="product"
        product={{
          price: 119,
          canBuy: true
        }}
      />

      <ProductHero
        className="pb-sm-5"
        heading="HIGH PERFORMANCE"
        title="HIGH QUALITY."
        fill
        isCherry
        hasPrice={false}
        image={{
          src: '/images/product-images/product-details/model-s-pro-mac/dkms_intro.jpg',
          contained: true
        }}
      />

      <ProductVideo
        theme="dark"
        className="mt-0"
        title={`SUPER <span className="text-red">AWESOME FEEL</span>.`}
        description="Behold the outstanding tactile and audio response with every keystroke you make. This high-performance, mechanical keyboard feels amazing on your fingertips and offers two distinct tactile experiences - click and soft. Your fingers will love it."
        video={{ src: 'https://www.youtube.com/embed/NHIMMqhW3kY?rel=0' }}
      />

      <Banner
        sectionId="forMac"
        sectionPad
        content={{
          background: 'light',
          textAlign: "left",
          title: `DESIGNED <span className="text-red">FOR MAC</span>.`,
          description: "Unlike other keyboards on the market claiming to be Mac-friendly, Das Keyboard Professional for Mac is specifically designed for maximum compatibility. Give your Mac some love with the best mechanical keyboard on the planet."
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro-mac/model-s-professional-for-mac-front-view.jpg'
        }}
      />

      <section className="bg-white section-pad">
        <div className="container-boxed">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 mb-5 mb-md-0">
              <SwitchCherryBlue />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              <ForceDiagram type="blue" />
            </div>
          </div>
        </div>
      </section>

      <Banner
        sectionId="nKeyRollover"
        sectionPad
        content={{
          background: 'dark',
          textAlign: "left",
          title: `5-KEY <span class="text-red">ROLLOVER</span>.`,
          description: "Das Keyboard Model S for Mac allows 5-key rollover, i.e. 5 keys pressed simultaneously. Great for gamers and fast typist."
        }}
        image={{
          position: 'right',
          src: '/images/product-images/product-details/4-professional/img-n_key_rollover.png',
          rounded: true
        }}
      />

      <Banner
        sectionId="typeFaster"
        sectionPad
        content={{
          title: `UPGRADE <span class="text-red">YOUR MAC</span>.`,
          titlePadding: 'm-0',
          textAlign: "left",
          description: `
            <br/>
            Type faster than you ever thought possible on this mechanical wonder. The addictive tactile feedback allows you to have a faster, more accurate typing experience. 
            <br/> <br/>
            Gold plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust and lasts over time.
          `
        }}
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro-mac/model-s-professional-for-mac-side-view.jpg',
        }}
      />

      <TechnicalSpecifications
        productSlug="daskeyboard-model-s-pro-for-mac"
        userManual="https://docs.google.com/document/d/1CU2jnB3jaOifmPNesTwSE6phJu_D2K2CmjeQ3uGmMB8/edit"
      />
    </>
  )
}
export default ModelSProForMac