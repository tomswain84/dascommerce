import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { VFC } from 'react'

const Menu: VFC = () => {
  return (
    <div className="col-12 col-md-6 pb-3 py-sm-4 d-flex align-items-center" id="navPrimaryDropdown">
      <ul className="navbar-nav flex-row ms-sm-auto w-100 justify-content-around justify-content-lg-end">
        <li id="navKeyboards" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="keyboards" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Keyboards
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="keyboards">
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=backlit">Backlit</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=smartrgb">Smart RGB</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=forpc">For PC</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=formac">For Mac</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=linux">For Linux</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=refurbished">Refurbished</a>
            <a className="dropdown-item" href="/products/category/mechanical-keyboards?filter=bestsellers">Best Sellers</a>
            <hr />
            <a className="dropdown-item bg-gr view-all py-3 d-flex align-items-center justify-content-between" href="/products/category/mechanical-keyboards?filter=all">
              View All
              <FontAwesomeIcon className='text-red' icon='plus' />
            </a>
          </div>
        </li>
        <li id="navAccessories" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="accessories" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Accessories
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="accessories">
            <a className="dropdown-item" href="/products/category-accessories#palmRests">Palm Rests</a>
            <a className="dropdown-item" href="/products/category-accessories#keycapSets">Keycap Sets</a>
            <a className="dropdown-item" href="/products/category-accessories#parts">Parts</a>
            <a className="dropdown-item" href="/products/category-accessories#mousePads">Mouse Pads</a>
            <hr />
            <a className="dropdown-item view-all py-3 d-flex align-items-center justify-content-between" href="/products/category-accessories">
              All Accessories
              <FontAwesomeIcon className='text-red' icon='plus' />
            </a>
            <hr />
            <a className="dropdown-item" href="/products/category-swag">Das Swag</a>
          </div>
        </li>
        <li id="navTechnology" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="technology" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Technology
            <FontAwesomeIcon icon='chevron-down' className='ps-2 text-red' width={9} />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="technology">
            <a className="dropdown-item" href="/technology/q-software">Q Software</a>
            <a className="dropdown-item" href="/technology/gamma-zulu-switch">Gamma Zulu Switches</a>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Menu