import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTrans from 'lang/useTrans'
import type { VFC } from 'react'
import Link from '../Link'

const Menu: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <div className="col-12 col-md-6 pb-3 py-sm-4 d-flex align-items-center" id="navPrimaryDropdown">
      <ul className="navbar-nav flex-row ms-sm-auto w-100 justify-content-around justify-content-lg-end">
        <li id="navKeyboards" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="keyboards" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span dangerouslySetInnerHTML={$html('Keyboards')} />
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="keyboards">
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=bestsellers" html={say('best_seller')} />
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=backlit" html={say('mechanical_Keyboards_category-5')} />
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=smartrgb" html={say('smart_rgb')} />
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=forpc" html={say('for_pc')} />
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=formac" html={say('for_mac')} />
            <Link className="dropdown-item" href="/products/category/mechanical-keyboards?filter=linux" html={say('for_linux')} />
            <Link className="dropdown-item" href="/products/category/refurbished-mechanical-keyboards" html={say('refurbished')} />
            <hr />
            <Link className="dropdown-item bg-gr view-all py-3 d-flex align-items-center justify-content-between" href="/products/category/mechanical-keyboards?filter=all">
              <span dangerouslySetInnerHTML={$html('view_all')} />
              <FontAwesomeIcon className='text-red' icon='plus' />
            </Link>
          </div>
        </li>
        <li id="navAccessories" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="accessories" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span dangerouslySetInnerHTML={$html('gaming-accessories')} />
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="accessories">
            <Link className="dropdown-item" href="/products/category/accessories#keycapSets" html={say('keycap_sets')} />
            <Link className="dropdown-item" href="/products/category/accessories#palmRests" html={say('palm_rests')} />
            <Link className="dropdown-item" href="/products/category/accessories#parts" html={say('keyboard_parts')} />
            {/* <a className="dropdown-item" href="/products/category/accessories#mousePads">Mouse Pads</a> */}
            <hr />
            <Link className="dropdown-item" href="/products/category/accessories" html={say('das_swag')} />
            <Link className="dropdown-item" href="/products/category/accessories#warehouseClearance" html={say('warehouse_clearance')} />
            <hr />
            <Link className="dropdown-item view-all py-3 d-flex align-items-center justify-content-between" href="/products/category/accessories">
              <span dangerouslySetInnerHTML={$html('all_accessories')} />
              <FontAwesomeIcon className='text-red' icon='plus' />
            </Link>
          </div>
        </li>
        <li id="navTechnology" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="technology" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span dangerouslySetInnerHTML={$html('technology-menu')} />
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="technology">
            <Link className="dropdown-item" href="/technology/q-software" html={say('q-software-page-title')} />
            <Link className="dropdown-item" href="/technology/gamma-zulu-switch" html={say('gamma-zulu-switch-menu')} />
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Menu