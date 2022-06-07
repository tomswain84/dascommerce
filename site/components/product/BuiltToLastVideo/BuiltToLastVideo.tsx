import ProductVideo from "@components/section/ProductVideo"
import type { VFC } from "react"

const BuiltToLastVideo: VFC = () => {
  return (
    <ProductVideo
      theme="dark"
      title={`BUILT <span class="text-red">TO LAST</span>.`}
      description="The perfect blend of technology and art."
      video={{
        src: 'https://www.youtube.com/embed/9byG-aS4Hf0?rel=0'
      }}
    />
  )
}
export default BuiltToLastVideo