import SwitchCherry from "@components/section/SwitchCherry"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

interface Props {
  description?: string
}
const SwitchCherryBrown: VFC<Props> = ({ description }) => {
  const { say } = useTrans()
  return (
    <SwitchCherry
      type="brown"
      label={say('4q-cherry-mx-subtitle')}
      description={description || say('4q-cherry-mx-text')}
      image={{
        src: '/images/img-switch_brown.png'
      }}
      button={{
        play: 'Play Soft Tactile Sound',
        pause: 'Pause Soft Tactile Sound',
      }}
    />
  )
}
export default SwitchCherryBrown