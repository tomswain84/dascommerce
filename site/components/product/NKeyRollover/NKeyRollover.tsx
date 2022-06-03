import Banner from "@components/section/Banner"
import type { VFC } from "react"

const NKeyRollover: VFC<{ supportMac?: boolean }> = ({ supportMac }) => {
  return (
    <Banner
      sectionId=""
      textAlign="left"
      background="dark"
      title={`N-KEY <span class="text-red">ROLLOVER</span>.`}
      description={`
          Gamers and fast typists will love to hear that Das Keyboard 4 supports full n-key rollover (NKRO) over USB. No need to use a PS2 adapter anymore. Just press <span class="bg-red badge">shift</span> + <span class="bg-gray-dark badge">mute</span> to toggle NKRO.
          <br/><br/>
          Full n-key rollover works with Windows, Linux${supportMac || supportMac === undefined ? ', and Mac OS X' : ''}.
        `}
      image={{
        position: 'right',
        src: '/images/product-images/product-details/4-ultimate/img-n_key_rollover.png',
        rounded: true
      }}
    />
  )
}
export default NKeyRollover