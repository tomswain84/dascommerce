import Banner from "@components/section/Banner"
import type { VFC } from "react"

interface Props {
  description?: string
}
const KeyboardFont: VFC<Props> = ({ description }) => {
  return (
    <Banner
      sectionId="font"
      content={{
        textAlign: "left",
        background: "light",
        title: `A BRAND NEW DAS KEYBOARD <span class="text-red">FONT</span>.`,
        description: description || 'Das Keyboard’s key cap font has been specially designed to provide ease of reading and harmonious view of the keyboard key caps. Das Keyboard’s font looks modern while keeping some of its lines from older, well established fonts. The overall result is sleek and easily readable while not drawing unnecessary attention.'
      }}
      image={{
        position: 'left',
        src: '/images/D-daskeyboard.png',
      }}
    />
  )
}
export default KeyboardFont