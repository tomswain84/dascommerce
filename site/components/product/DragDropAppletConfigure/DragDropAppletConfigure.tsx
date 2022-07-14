import ProductScreen from "@components/section/ProductScreen"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const DragDropAppletConfigure: VFC = () => {
  const { say } = useTrans()
  return (
    <ProductScreen
      id="softwareVideo"
      title={say('limitless_possibilities')}
      description={say('das-keyboard-q-in-action')}
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