import type { VFC } from 'react'
import Logo from '@components/core/Logo'
import Menu from '@components/core/Menu'

const Header: VFC = () => {
  return (
    <div>
      <div> Header</div>
      <div className='d-flex justify-content-start'>
        <Logo />
        <Menu />
      </div>
    </div>
  )
}
export default Header