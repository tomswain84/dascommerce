/* eslint-disable @next/next/no-img-element */
import type { VFC } from 'react'
import Logo from '@components/core/Logo'
import Menu from '@components/core/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../Link'
import useTrans from 'lang/useTrans'

const Header: VFC = () => {
  const { say, $html } = useTrans()
  const TopNav = () => (
    <>
      <li className="nav-item">
        <a className="nav-link" href="https://daskeyboard.mojohelpdesk.com/" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={$html('support')} />
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.daskeyboard.com/blog" dangerouslySetInnerHTML={$html('blog')} />
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/contact-us" html={say('contact-us')} />
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/values" html={say('us')} />
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" html={say('wishlist')} />
      </li>
    </>
  )
  return (
    <>
      <section id="navSecondary" className="bg-gray-dark">
        <div className="container-boxed">
          <div className="row text-gray-medium d-flex align-items-center">
            <div className="col">
              <nav className="navbar p-0 navbar-expand-sm navbar-dark">

                {/* Modal Trigger - Shipping Info */}
                <a className="shipping-notice order-2 py-3" href="#" title="Free Shipping" data-bs-toggle="modal" data-bs-target="#freeShipping">
                  Free Shipping <span className="d-none d-md-inline">(Click for Details)</span>
                </a>
                {/* Modal - Shipping Info */}
                <div className="modal fade" id="freeShipping" tabIndex={-1} aria-labelledby="freeShipping" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-gray-darker">
                      <div className="modal-header bg-gray-dark text-white border-bottom">
                        <h5 className="modal-title" id="freeShipping">Shipping Info</h5>
                        <a href="#" className="btn btn-outline-primary" data-bs-dismiss="modal">
                          Close
                          <i>
                            <FontAwesomeIcon className='ms-2' icon='xmark' />
                          </i>
                        </a>
                      </div>
                      <div className="modal-body bg-gray-darker">
                        <h2 className="text-white"><span className="text-red">Free Shipping</span> Everyday on Orders Over $59</h2>
                        <p className="text-white">All orders over $59 qualify for our Free Shipping offer within the continental United States. Keyboards are shipped via UPS Ground, and accessories and swag may be shipped via USPS. Once your cart meets this minimum amount, the Free Shipping option is automatically available during checkout. Other expedited shipping options will also be available at an additional charge.</p>
                      </div>
                      <div className="modal-footer bg-gray-dark border-top">
                        <Link href="/shipping" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Trigger - Account Login */}
                <a className="account-login d-flex align-items-center text-decoration-none order-3 py-3 px-sm-2" href="#" title="Account Login" data-bs-toggle="modal" data-bs-target="#accountLogin">
                  <FontAwesomeIcon icon='user' className='text-red' width={12} />
                  <span className="ms-2 small text-nowrap">My Account</span>
                  <FontAwesomeIcon className='d-none text-white small ms-1' icon='caret-down' />
                </a>
                {/* Modal - Account Login */}
                <form className="modal fade" id="accountLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="accountLogin" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-gray-darker">
                      <div className="modal-header bg-gray-dark text-white border-bottom">
                        <h5 className="modal-title" id="accountLogin">Registered Customers</h5>
                        <a href="#" className="btn btn-outline-primary" data-bs-dismiss="modal">
                          Close
                          <i>
                            <FontAwesomeIcon className='ms-2' icon='xmark' width={7.5} height={12} />
                          </i>
                        </a>
                      </div>
                      <div className="modal-body bg-gray-darker">
                        <h2 className="text-white"><span className="text-red">Login</span> to Your Account</h2>
                        <p className="text-white mb-5">If you have an account with us, please log in.</p>

                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="email">
                            <FontAwesomeIcon icon='envelope' />
                          </span>
                          <input type="text" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Email" aria-label="email" aria-describedby="email" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="password">
                            <FontAwesomeIcon icon='unlock-keyhole' />
                          </span>
                          <input type="password" id="inputPassword" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Password" aria-label="password" aria-describedby="password" />
                        </div>
                      </div>
                      <div className="modal-footer bg-gray-dark border-top">
                        <a className="text-white text-decoration-none me-auto" href="#" title="Forgot Password" data-bs-toggle="modal" data-bs-target="#forgotPassword">Forgot Password?</a>
                        <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createAccount">Create an Account</a>
                        <a type="submit" className="btn btn-primary">
                          Login
                          <FontAwesomeIcon className='ms-2' icon='right-to-bracket' />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Modal - Forgot Password */}
                <form className="modal fade" id="forgotPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="forgotPassword" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-gray-darker">
                      <div className="modal-header bg-gray-dark text-white border-bottom">
                        <h5 className="modal-title" id="forgotPassword">Account Recovery</h5>
                        <a href="#" className="btn btn-outline-primary" data-bs-dismiss="modal">
                          Close
                          <i>
                            <FontAwesomeIcon className='ms-2' icon='xmark' />
                          </i>
                        </a>
                      </div>
                      <div className="modal-body bg-gray-darker">
                        <h2 className="text-white"><span className="text-red">Reset</span> your password</h2>
                        <p className="text-white mb-5">We will send you an email to reset your password.</p>

                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="email">
                            <FontAwesomeIcon icon='envelope' />
                          </span>
                          <input type="text" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Email" aria-label="email" aria-describedby="email" />
                        </div>
                      </div>
                      <div className="modal-footer bg-gray-dark border-top">
                        <a className="text-white text-decoration-none me-auto" href="#" title="Forgot Password" data-bs-toggle="modal" data-bs-target="#accountLogin">
                          <FontAwesomeIcon icon='caret-left' className='me-2' />
                          Back to Login
                        </a>
                        <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createAccount">Create an Account</a>
                        <a type="submit" className="btn btn-primary">
                          Reset
                          <FontAwesomeIcon icon='unlock-keyhole' className='ms-2' />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Modal - Create An Account */}
                <form className="modal fade" id="createAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="createAccount" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-gray-darker">
                      <div className="modal-header bg-gray-dark text-white border-bottom">
                        <h5 className="modal-title" id="createAccount">New Customers</h5>
                        <a href="#" className="btn btn-outline-primary" data-bs-dismiss="modal">
                          Close
                          <i>
                            <FontAwesomeIcon className='ms-2' icon='xmark' />
                          </i>
                        </a>
                      </div>
                      <div className="modal-body bg-gray-darker">
                        <h2 className="text-white mb-5"><span className="text-red">Create</span> your Account</h2>

                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="first-name">
                            <FontAwesomeIcon icon='user' />
                          </span>
                          <input type="text" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="First Name" aria-label="first-name" aria-describedby="first-name" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="last-name">
                            <FontAwesomeIcon icon='user' />
                          </span>
                          <input type="text" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Last Name" aria-label="last-name" aria-describedby="last-name" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="email">
                            <FontAwesomeIcon icon='envelope' />
                          </span>
                          <input type="text" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Email" aria-label="email" aria-describedby="email" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text border-0 rounded-0 bg-gray-dark text-white" id="password">
                            <FontAwesomeIcon icon="unlock-keyhole" />
                          </span>
                          <input type="password" id="inputPassword" className="form-control rounded-0 border-0 bg-gray-light oswald text-white" placeholder="Password" aria-label="password" aria-describedby="password" />
                        </div>

                      </div>
                      <div className="modal-footer bg-gray-dark border-top">
                        <a className="text-white text-decoration-none me-auto" href="#" title="Forgot Password" data-bs-toggle="modal" data-bs-target="#accountLogin">
                          <FontAwesomeIcon className='me-2' icon='caret-left' />
                          Back to Login
                        </a>
                        <a type="submit" className="btn btn-primary">
                          Create Account
                          <FontAwesomeIcon className='ms-2' icon='plus' />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="dropdown d-block d-sm-none py-2">
                  <a className="navbar-toggler dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="toggler-icon">
                      <span className="w-75 ms-auto"></span>
                      <span className="w-100"></span>
                      <span className="w-50 ms-auto"></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-start bg-gray-dark border-0 rounded-0" aria-labelledby="navbarDropdown">
                    <TopNav />
                  </ul>
                </div>

                <div className="collapse navbar-collapse d-none order-sm-2" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto me-3 mt-3 mt-sm-0">
                    <TopNav />
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <header id="navPrimary" className="bg-gray-darker sticky-top">
        <div className="container-boxed">
          <nav className="row">
            <div className="col-10 col-md-5 py-3 py-sm-4 pe-3">
              <Logo />
            </div>
            <div className="col-2 col-md-1 order-md-3 cart d-flex align-items-center justify-content-end">
              <a className="cart-btn" data-bs-toggle="offcanvas" href="#shoppingCart" role="button" aria-controls="shoppingCart">
                <img className="img-fluid" src="/images/cart.svg" alt="Shopping Cart" />
              </a>
            </div>
            <Menu />
          </nav>
          <hr className="m-0" />
        </div>
      </header>

      <section className="offcanvas offcanvas-end bg-gray-dark dark-section" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header bg-gray-darker text-white border-bottom">
          <h5 className="offcanvas-title" id="shoppingCartLabel">Shopping Cart</h5>
          <a href="#" className="btn btn-outline-primary" data-bs-dismiss="offcanvas">
            Close
            <i>
              <FontAwesomeIcon className='ms-2' icon='xmark' />
            </i>
          </a>
        </div>
        <div className="offcanvas-body">
          <div>
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </section>

      <section id="navBreadcrumbs" className="bg-gray-darker d-none">
        <div className="container-boxed">
          <div className="row">
            <div className="col d-md-flex align-items-center justify-content-between">
              <nav className="breadcrumb m-0 bg-gray-darker px-0 d-flex justify-content-center justify-content-lg-start" aria-label="breadcrumb">
                <ol className="breadcrumb m-0 bg-gray-darker px-0 d-none">
                  <li id="home" className="breadcrumb-item home pe-1">
                    <a href="/" title="Home Page">
                      <FontAwesomeIcon icon='house' />
                    </a>
                  </li>
                  <li id="parentPage" className="display-none breadcrumb-item pe-1">
                    <a href="#" title="Back to <?= $parent_page_title ?>">
                      {/* <?= $parent_page_title ?> */}
                    </a>
                  </li>
                  <li id="currentPage" className="breadcrumb-item active pe-1" aria-current="page">
                    {/* <?= $page_title ?> */}
                  </li>
                </ol>
              </nav>
              <div id="headerCTA" className="pb-3 py-md-4">
                <div className="col d-flex align-items-center justify-content-center justify-content-md-between pe-md-0">
                  <a className="btn btn-primary me-sm-1" href="/products" title="Shop By Category"><span className="d-none d-sm-inline">Shop </span>By Category</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Header