import type { VFC } from 'react'
import Logo from '@components/core/Logo'
import Menu from '@components/core/Menu'

const Header: VFC = () => {
  return (
    <div>
      <h2 className='text-center'> Header</h2>
      <div className='d-flex justify-content-between'>
        <Logo />
        <Menu />
      </div>
    </div>
  )
}
export default Header