import ProductVideo from "@components/section/ProductVideo"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const BuiltToLastVideo: VFC = () => {
  const { say } = useTrans()
  return (
    <ProductVideo
      theme="dark"
      title={`BUILT <span class="text-red">TO LAST</span>.`}
      description={say('slogan_model-4-professional_content_12')}
      video={{
        src: 'https://www.youtube.com/embed/9byG-aS4Hf0?rel=0'
      }}
    />
  )
}
export default BuiltToLastVideo