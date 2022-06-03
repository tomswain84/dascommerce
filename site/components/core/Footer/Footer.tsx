import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import type { VFC } from 'react'
import Link from '../Link'

interface FooterLink {
  title: string
  href: string
  blank?: boolean
}
const Footer: VFC = () => {
  const column1Links: FooterLink[] = [
    {
      title: 'Where to buy',
      href: '/where-to-buy',
    },
    {
      title: '*Shipping',
      href: '/about-us',
    },
    {
      title: '**Guarantee',
      href: '/guarantee',
    },
    {
      title: 'Education Program',
      href: '/company-information/education-program'
    },
    {
      title: 'Corporate Sales',
      href: '/corporate-sale'
    },
    {
      title: 'Become A Reseller',
      href: '/company-information/become-a-reseller'
    },
    {
      title: 'Destroy This Site',
      href: '#'
    },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      title: `Do not sell my personal info<span class="d-md-none d-lg-inline">rmation</span>`,
      href: '/ccpa-opt-out'
    },
    {
      title: 'Mechanical Keyboard Guide',
      href: '/mechanical-keyboard-guide'
    }
  ]
  const column2Links: FooterLink[] = [
    {
      title: 'Press Kit & Media Contact',
      href: '/company-information/press-kit'
    },
    {
      title: 'Switch Comparison',
      href: '#'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact Us',
      href: '/contact-us'
    },
    {
      title: 'Das Keyboard Story',
      href: '/history'
    },
    {
      title: 'Type Faster',
      href: 'http://app.typrx.com/',
      blank: true
    },
    {
      title: 'Professional Reviews',
      href: '/reviews'
    },
    {
      title: 'Unauthorized Dealer Warning',
      href: '/unauthorized-warning'
    },
    {
      title: 'Das Keyboard Status Page',
      href: 'https://daskeyboard.montastic.io/',
      blank: true
    },
    {
      title: 'Das Keyboard Affiliate Program',
      href: '/affiliates-program'
    },
  ]
  const FooterLink = (link: FooterLink) => (
    <li>
      <FontAwesomeIcon icon='dot-circle' className='text-red me-2' />
      {link.blank ? (
        <a
          href={link.href}
          title={link.title}
          target='_blank'
          rel="noreferrer"
          dangerouslySetInnerHTML={{ __html: link.title }}
        />
      ) : (
        <Link
          href={link.href}
          title={stripHTML(link.title)}
          html={link.title}
        />
      )}
    </li>
  )
  return (
    <footer id="siteFooter">
      <section id="giveaway" className="bg-red">
        <div className="container-boxed">
          <div className="row">
            <div className="col p-4 d-flex align-items-center justify-content-center text-white">
              <a id="winKeyboard" className="text-white text-decoration-none d-flex align-items-center" href="/giveaway" title="Win A FREE Das Keyboard">
                <FontAwesomeIcon icon='gift' className='pe-1' />
                <span className="oswald">Win a Free Das Keyboard!</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="footerWrap" className="bg-gray-darker text-white">
        <div className="container-boxed">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-5 col-xl-6 py-5 pe-lg-5">
              <h3>What Makes a Mechanical Keyboard Awesome?</h3>
              <p>A mechanical keyboard is a high-performance keyboard with tactile and audio feedback so accurate it allows you to execute every keystroke with lightning-fast precision. Because of the durability and construction of the switches, mechanical keyboards are built to last far longer than standard keyboards. Read our <a className="fw-bolder" href="/mechanical-keyboard-guide" title="Mechanical Keyboard Guide">mechanical keyboard guide</a> to learn more about what makes a mechanical keyboard awesome. Your fingers will be thanking you.</p>

              <h3 className="mt-sm-5">Sign Up For Our Newsletter</h3>
              <form id="newsletterForm" className="row align-items-center">
                <div className="col-xl-8 col-xxl-6">
                  <label className="visually-hidden" htmlFor="newsletterFormEmail">Username</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="newsletterFormEmail" placeholder="Enter Your Email" />
                    <a type="submit" className="btn btn-submit">
                      <FontAwesomeIcon icon='paper-plane' />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-7 col-xl-6 pb-5 py-sm-5">
              <div className="row flex-column flex-md-row">
                <div className="col pb-5 pb-md-0">
                  <h3>Connect</h3>
                  <ul className="list-unstyled">
                    {column1Links.map(FooterLink)}
                  </ul>
                </div>
                <div className="col">
                  <a className="btn btn-outline-primary mb-4" href="/guarantee" title="Das Keyboard Warranty">
                    Das Keyboard Warranty
                    <FontAwesomeIcon icon='gear' className='ms-2' />
                  </a>
                  <ul className="list-unstyled">
                    {column2Links.map(FooterLink)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subfooter bg-gray-dark">
        <div className="container-boxed">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xxl-7 py-3 text-center text-lg-start">
              <p className="text-white mb-sm-0">
                <span className="d-block d-sm-inline mb-2 mb-sm-0">Hello from Austin!</span>
                <span className="d-block d-sm-inline"> {new Date().getFullYear()}-2005 - All Rights Reserved.</span>
                <span className="d-block d-xxl-inline text-gray-medium">Das Keyboard is a registered trademark and copyright of Metadot.</span>
              </p>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 d-flex align-items-center justify-content-center">
              <p className="text-white mb-0 me-2">Select Language:</p>
              <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0">
                <li className="mb-0">
                  <a className="text-gray-medium" href="#" title="English">English</a>
                </li>
                <span className="text-gray-medium">&nbsp;|&nbsp;</span>
                <li className="mb-0">
                  <a className="text-gray-medium" href="#" title="German">German</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 mt-3 mt-lg-0 d-lg-flex align-items-center justify-content-center">
              <ul className="list-unstyled social icons d-flex align-items-center justify-content-center mb-lg-0">
                <li className="me-3">
                  <a href="https://www.facebook.com/DasKeyboard" title="Facebook">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://www.instagram.com/daskeyboard/" title="Instagram">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://twitter.com/daskeyboard" title="Twitter">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://www.youtube.com/user/DasKeyboardCommunity" title="YouTube">
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                  </a>
                </li>
                <li>
                  <Link href="blog" title="Blog">
                    <FontAwesomeIcon icon='rss' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer >
  )
}
export default Footer