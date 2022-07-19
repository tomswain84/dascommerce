import TextBlock from "@components/section/TextBlock"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const CherryMXSwitches: VFC = () => {
  const {say} = useTrans()
  return (
    <TextBlock
      title={`CHERRY <span class="text-red">MX SWITCHES</span>.`}
      description={say('slogan_model-4-professional_content_2')}
    />
  )
}
export default CherryMXSwitches