import ProductScreen from "@components/section/ProductScreen"
import type { VFC } from "react"

const QMessagePreview: VFC = () => {
  return (
    <ProductScreen
      title="DAS KEYBOARD Q MESSAGE PREVIEW"
      description="PREVIEW ANY MESSAGE WITH A KEYPRESS"
      background="dark"
      image={{
        src: '/images/product-images/product-details/x50q/X50Q_message_preview.gif'
      }}
    />
  )
}
export default QMessagePreview