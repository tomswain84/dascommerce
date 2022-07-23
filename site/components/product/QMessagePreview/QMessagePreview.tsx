import ProductScreen from "@components/section/ProductScreen"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const QMessagePreview: VFC = () => {
  const { say } = useTrans()
  return (
    <ProductScreen
      title={say('das-keyboard-q-message-preview')}
      description={say('preview_any_key_with_a_key_press')}
      background="dark"
      image={{
        src: '/images/product-images/product-details/x50q/X50Q_message_preview.gif'
      }}
    />
  )
}
export default QMessagePreview