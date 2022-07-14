import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTrans from 'lang/useTrans'
import type { VFC } from 'react'

const Menu: VFC = () => {
  const { say } = useTrans()
  return (
    <div className="col-12 col-md-6 pb-3 py-sm-4 d-flex align-items-center" id="navPrimaryDropdown">
      <ul className="navbar-nav flex-row ms-sm-auto w-100 justify-content-around justify-content-lg-end">
        <li id="navKeyboards" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="keyboards" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {say('Keyboards')}
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="keyboards">
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=bestsellers">{say('best_seller')}</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=backlit">{say('mechanical_Keyboards_category-5')}</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=smartrgb">{say('smart_rgb')}</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=forpc">{say('for_pc')}</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=formac">{say('for_mac')}</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=linux">{say('for_linux')}</a>
            <a className="dropdown-item" href="/products/category/refurbished-mechanical-keyboards">{say('refurbished')}</a>
            <hr />
            <a className="dropdown-item bg-gr view-all py-3 d-flex align-items-center justify-content-between" href="/products/category/mechanical-keyboards?filter=all">
              {say('view_all')}
              <FontAwesomeIcon className='text-red' icon='plus' />
            </a>
          </div>
        </li>
        <li id="navAccessories" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="accessories" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {say('gaming-accessories')}
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="accessories">
            <a className="dropdown-item" href="/products/category/accessories#keycapSets">{say('keycap_sets')}</a>
            <a className="dropdown-item" href="/products/category/accessories#palmRests">{say('palm_rests')}</a>
            <a className="dropdown-item" href="/products/category/accessories#parts">{say('keyboard_parts')}</a>
            {/* <a className="dropdown-item" href="/products/category/accessories#mousePads">Mouse Pads</a> */}
            <hr />
            <a className="dropdown-item" href="/products/category/accessories">{say('das_swag')}</a>
            <a className="dropdown-item" href="/products/category/accessories#warehouseClearance">{say('warehouse_clearance')}</a>
            <hr />
            <a className="dropdown-item view-all py-3 d-flex align-items-center justify-content-between" href="/products/category/accessories">
              {say('all_accessories')}
              <FontAwesomeIcon className='text-red' icon='plus' />
            </a>
          </div>
        </li>
        <li id="navTechnology" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="technology" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {say('technology-menu')}
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="technology">
            <a className="dropdown-item" href="/technology/q-software">{say('q-software-page-title')}</a>
            <a className="dropdown-item" href="/technology/gamma-zulu-switch">{say('gamma-zulu-switch-menu')}</a>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Menu