import ProductScreen from "@components/section/ProductScreen"
import type { VFC } from "react"

const CustomizeKeyboard: VFC = () => {
  return (
    <ProductScreen
      title="APPLETS FOR POWER USERS AND CODERS"
      description="CUSTOMIZE YOUR KEYBOARD TO YOUR NEEDS"
      background="dark"
      image={{
        src: '/images/product-images/product-details/x50q/Twitch_applet_design.png'
      }}
    />
  )
}
export default CustomizeKeyboard