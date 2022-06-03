/* eslint-disable @next/next/no-img-element */
import type { VFC } from 'react'
import Link from '../Link'

const Logo: VFC = () => {
  return (
    <Link href="/">
      <img id="siteLogo" src="/images/logo-das_keyboard-red_white.png" className="img-fluid" alt="Das Keyboard" />
    </Link>
  )
}
export default Logo