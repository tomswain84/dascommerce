import SwitchCherry from "@components/section/SwitchCherry"
import type { VFC } from "react"

interface Props {
  description?: string
}
const SwitchCherryBlue: VFC<Props> = ({ description }) => {
  return (
    <SwitchCherry
      type="blue"
      label="Clicky"
      description={description || "The Cherry MX blue switches have a “clicky” tactile bump when the activation point is hit. This feedback helps to increase typing speed by reducing effort needed to push the keys all the way down. The Cherry MX blue switch is the most “clicky” of the Das Keyboard line."}
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