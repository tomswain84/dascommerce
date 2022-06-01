import type { VFC } from 'react'
import Logo from '@components/core/Logo'
import Menu from '@components/core/Menu'

const Header: VFC = () => {
  return (
    <div className='bg-gray-darker p-3'>
      <h2 className='text-center text-white'> Header</h2>
      <div className='d-flex justify-content-between'>
        <Logo />
        <Menu />
      </div>
    </div>
  )
}
export default Header