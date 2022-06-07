import SwitchCherry from "@components/section/SwitchCherry"
import type { VFC } from "react"

const SwitchCherryBrown: VFC = () => {
  return (
    <SwitchCherry
      type="brown"
      label="Tactile Experience"
      description="The Cherry MX brown switches have a soft, tactile bump about halfway through the key press. The soft pressure point switch technology makes the mechanical keyboard less clicky while providing an awesome tactile experience."
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