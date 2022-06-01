/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import type { VFC } from 'react'

const Logo: VFC = () => {
  return (
    <Link href="/" passHref>
      <img src='/images/logo-das_keyboard-red_white.png' alt='Daskeyboard' />
    </Link>
  )
}
export default Logo