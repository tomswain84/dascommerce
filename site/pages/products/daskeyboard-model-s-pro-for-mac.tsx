import ProductHeader from "@components/product/ProductHeader"
import type { VFC } from "react"
import products from '@data/products.json'
import ProductHero from "@components/section/ProductHero"
import ProductVideo from "@components/section/ProductVideo"
import Banner from "@components/section/Banner"
import SwitchCherry from "@components/section/SwitchCherry"
import ForceDiagram from "@components/section/ForceDiagram"
import TechnicalSpecifications from "@components/section/TechnicalSpecifications"

const ModelSProForMac: VFC<{}> = () => {
  // const product = products.find(p => p.slug === slug)
  return (
    <>
      <hr />
      <ProductHeader title="DAS KEYBOARD MODEL S PRO FOR MAC" price={119} currency={'$'} canBuy={true} />
      <hr />
      <ProductHero heading="HIGH PERFORMANCE" title="HIGH QUALITY." isCherry={true} hasPrice={false} image={{ src: '/images/product-images/product-details/model-s-pro-mac/dkms_intro.jpg' }} />
      <hr />
      <ProductVideo
        title={`SUPER <span class="text-red">AWESOME FEEL</span>.`}
        description="Behold the outstanding tactile and audio response with every keystroke you make. This high-performance, mechanical keyboard feels amazing on your fingertips and offers two distinct tactile experiences - click and soft. Your fingers will love it."
        video={{ src: 'https://www.youtube.com/embed/NHIMMqhW3kY?rel=0' }}
      />
      <hr />
      <Banner
        textAlign="left"
        title={`DESIGNED <span class="text-red">FOR MAC</span>.`}
        description="Unlike other keyboards on the market claiming to be Mac-friendly, Das Keyboard Professional for Mac is specifically designed for maximum compatibility. Give your Mac some love with the best mechanical keyboard on the planet."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro-mac/model-s-professional-for-mac-front-view.jpg'
        }}
      />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <SwitchCherry />
        </div>
        <div className="col-md-6">
          <ForceDiagram />
        </div>
      </div>
      <hr />
      <div className="">
        <Banner
          textAlign="left"
          title={`5-KEY <span class="text-red">ROLLOVER</span>.`}
          description="Das Keyboard Model S for Mac allows 5-key rollover, i.e. 5 keys pressed simultaneously. Great for gamers and fast typist."
          image={{
            position: 'right',
            src: '/images/product-images/product-details/4-professional/img-n_key_rollover.png',
            rounded: true
          }}
        />
      </div>
      <hr />
      <Banner
        title={`UPGRADE <span class="text-red">YOUR MAC</span>.`}
        textAlign="left"
        description="Type faster than you ever thought possible on this mechanical wonder. The addictive tactile feedback allows you to have a faster, more accurate typing experience. <br/> Gold plated switches provide the best contact and typing experience because, unlike other metals, gold does not rust and lasts over time."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/model-s-pro-mac/model-s-professional-for-mac-side-view.jpg',
        }}
      />
      <hr />
      <TechnicalSpecifications />
      <hr />
    </>
  )
}
export default ModelSProForMac