import ProductScreen from "@components/section/ProductScreen"
import type { VFC } from "react"

const DragDropAppletConfigure: VFC = () => {
  return (
    <ProductScreen
      id="softwareVideo"
      title="LIMITLESS POSSIBILITIES"
      description="CONFIGURE RGB NOTIFICATIONS WITH DRAG AND DROP APPLETS"
      hasScreenBase
      background="light"
      video={{
        src: '/video/q-applet.mp4',
        poster: '/images/img-home-software_mockup.png'
      }}
    />
  )
}
export default DragDropAppletConfigure