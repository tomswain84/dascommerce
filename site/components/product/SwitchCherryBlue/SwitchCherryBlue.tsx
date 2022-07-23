import SwitchCherry from "@components/section/SwitchCherry"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

interface Props {
  description?: string
}
const SwitchCherryBlue: VFC<Props> = ({ description }) => {
  const { say } = useTrans();
  return (
    <SwitchCherry
      type="blue"
      label="Clicky"
      description={description || say('slogan_model-4-ultimate_content_3')}
      image={{
        src: '/images/img-switch_blue.png'
      }}
      button={{
        play: 'Play Clicky Sound',
        pause: 'Pause Clicky Sound',
      }}
    />
  )
}
export default SwitchCherryBlue