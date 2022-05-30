import NKeyRollover from "@components/product/NKeyRollover"
import ProductHeader from "@components/product/ProductHeader"
import Banner from "@components/section/Banner"
import ForceDiagram from "@components/section/ForceDiagram"
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import SwitchCherry from "@components/section/SwitchCherry"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"
import TextBlock from "@components/section/TextBlock"
import type { VFC } from "react"

const ModelSPro: VFC = () => {
  return (
    <>
      <ProductHeader
        title="DAS KEYBOARD MODEL S PRO"
        price={119}
        currency={'$'}
        canBuy={true}
      />
      <hr />
      <ProductHero
        heading="HIGH PERFORMANCE"
        title="HIGH QUALITY."
        isCherry={true}
        hasPrice={false}
        image={{
          src: '/images/product-images/product-details/model-s-pro/dkms_intro.jpg'
        }}
      />
      <hr />
      <Banner
        title={`UBER <span class="text-red">QUALITY</span>`}
        description="When Germans engineer it, you know it has to be good. We’re perfectionists focused on creating top rated products for our fellow overachievers. Das Keyboard Model S Professional mechanical keyboard is made of the highest-quality materials and robust construction."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro/img-dkms_quality.jpg'
        }}
      />
      <hr />
      <ProductVideo
        title={`SUPER <span class="text-red">AWESOME FEEL</span>.`}
        description="Behold the outstanding tactile and audio response with every keystroke you make. This high-performance, mechanical keyboard feels amazing on your fingertips and offers two distinct tactile experiences - click and soft. Your fingers will love it."
        video={{ src: 'https://www.youtube.com/embed/NHIMMqhW3kY?rel=0' }}
      />
      <hr />
      <TextBlock
        title={`CHERRY <span class="text-red">MX SWITCHES</span>.`}
        description="Das Keyboard uses best-in-class, Cherry MX mechanical key switches that provide tactile and audio feedback so accurate it allows you to execute every keystroke with lightning-fast precision. Its high-performance, gold-plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust, increasing the lifespan of the switch. The Das Keyboard 4 Professional mechanical keyboard is available in both the Cherry MX brown and Cherry MX blue switches."
      />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherry />
        </div>
        <div className="col-md-6">
          <SwitchCherry />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <ForceDiagram />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <Banner
        textAlign="left"
        title={`TYPE <span class="text-red">SIGNIFICANTLY FASTER</span>.`}
        description="Type faster than you ever thought possible on this mechanical wonder. The addictive tactile feedback allows you to have a faster, more accurate typing experience.<br/>Gold plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust and lasts over time."
        image={{
          position: 'left',
          src: "/images/product-images/product-details/model-s-pro/model-s-professional-side-view.jpg"
        }}
      />
      <hr />
      <NKeyRollover />
      <hr />
      <Banner
        textAlign="left"
        title={`UBER <span class="text-red">QUALITY</span>.`}
        description={`When Germans engineer it, you know it has to be good. We’re perfectionists focused on creating top rated products for our fellow overachievers. Das Keyboard Model S Professional mechanical keyboard is made of the highest-quality materials and robust construction.`}
        image={{
          position: 'left',
          src: "/images/product-images/product-details/model-s-pro/model-s-professional-reflection.png",
        }}
      />
      <hr />
      <TechnicalSpecifications />
      <hr />
    </>
  )
}
export default ModelSPro