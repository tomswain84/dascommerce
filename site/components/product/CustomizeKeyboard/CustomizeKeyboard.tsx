import ProductScreen from "@components/section/ProductScreen"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const CustomizeKeyboard: VFC = () => {
  const { say } = useTrans()
  return (
    <ProductScreen
      title={say('marketplace-subtitle-new')}
      description={say('marketplace-title-new')}
      background="dark"
      image={{
        src: '/images/product-images/product-details/x50q/Twitch_applet_design.png'
      }}
    />
  )
}
export default CustomizeKeyboard