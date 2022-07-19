import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stripHTML from '@lib/strip-html'
import useTrans from 'lang/useTrans'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import Link from '../Link'
import ListItem from '../ListItem'

interface FooterLink {
  title: string
  href: string
  blank?: boolean
}
const Footer: VFC = () => {
  // language navigation
  const { $html, say } = useTrans()
  const router = useRouter()
  const changeLang = (lang: 'en' | 'de') => {
    router.push(router.asPath, undefined, { locale: lang })
  }
  const column1Links: FooterLink[] = [
    {
      title: say('were_to_buy'),
      href: '/where-to-buy',
    },
    {
      title: say('shipping'),
      href: '/shipping',
    },
    {
      title: say('guarantee'),
      href: '/guarantee',
    },
    {
      title: say('education_program'),
      href: '/company-information/education-program',
    },
    {
      title: say('corpoarate-sale'),
      href: '/corporate-sale',
    },
    {
      title: say('become_a_reseller'),
      href: '/company-information/become-a-reseller',
    },
    {
      title: say('kickass'),
      href: `javascript:var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='/scripts/asteroids.min.js';void(0);`,
    },
    {
      title: say('privacy-policy'),
      href: '/privacy-policy',
    },
    {
      title: `Do not sell my personal info<span class="d-md-none d-lg-inline">rmation</span>`,
      href: 'https://shop.daskeyboard.com/pages/ccpa-opt-out',
      blank: true,
    },
    {
      title: say('Mechanical-guide'),
      href: 'https://www.daskeyboard.com/blog/mechanical-keyboard-guide/',
      blank: true,
    },
  ]
  const column2Links: FooterLink[] = [
    {
      title: say('press_kit'),
      href: '/company-information/press-kit',
    },
    {
      title: say('switches-comp'),
      href: '/switches',
    },
    {
      title: say('blog'),
      href: 'https://www.daskeyboard.com/blog/',
    },
    {
      title: say('contact_us'),
      href: '/contact-us',
    },
    {
      title: say('our-story'),
      href: '/history',
    },
    {
      title: say('typefaster'),
      href: 'http://app.typrx.com/',
      blank: true,
    },
    {
      title: say('reviews'),
      href: '/reviews',
    },
    {
      title: say('Unauthorized_warning'),
      href: '/unauthorized-warning',
    },
    {
      title: 'Das Keyboard Status Page',
      href: 'https://daskeyboard.montastic.io/',
      blank: true,
    },
    {
      title: say('affiliates-program'),
      href: '/affiliates-program',
    },
  ]
  const FooterLink = (link: FooterLink, index: number) => (
    <ListItem key={index}>
      {link.blank ? (
        <a
          href={link.href}
          title={link.title}
          target="_blank"
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
    </ListItem>
  )
  return (
    <footer id="siteFooter">
      <section id="giveaway" className="bg-red">
        <div className="container-boxed">
          <div className="row">
            <div className="col p-4 d-flex align-items-center justify-content-center text-white">
              <Link
                id="winKeyboard"
                className="text-white text-decoration-none d-flex align-items-center"
                href="/giveaway"
                title={say('giveaway-link', true)}
              >
                <FontAwesomeIcon icon="gift" className="pe-1" />
                <span className="oswald" dangerouslySetInnerHTML={$html('giveaway-link')} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="footerWrap" className="bg-gray-darker text-white">
        <div className="container-boxed">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-5 col-xl-6 py-5 pe-lg-5">
              <h3 dangerouslySetInnerHTML={$html('footer_about_title')} />
              <p dangerouslySetInnerHTML={$html('footer_about_content')} />

              <h3 className="mt-sm-5" dangerouslySetInnerHTML={$html('news-signup')} />
              <form id="newsletterForm" className="row align-items-center">
                <div className="col-xl-8 col-xxl-6">
                  <label
                    className="visually-hidden"
                    htmlFor="newsletterFormEmail"
                  >
                    Username
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="newsletterFormEmail"
                      placeholder="Enter Your Email"
                    />
                    <a type="submit" className="btn btn-submit">
                      <FontAwesomeIcon icon="paper-plane" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-7 col-xl-6 pb-5 py-sm-5">
              <div className="row flex-column flex-md-row">
                <div className="col pb-5 pb-md-0">
                  <h3 dangerouslySetInnerHTML={$html('footer_contact_title')} />
                  <ul className="list-unstyled">
                    {column1Links.map(FooterLink)}
                  </ul>
                </div>
                <div className="col mt-md-3 pt-md-2">
                  <Link
                    className="btn btn-outline-primary mb-4"
                    href="/guarantee"
                    title={say('das-keyboard-warranty', true)}
                  >
                    <span dangerouslySetInnerHTML={$html('das-keyboard-warranty')} />
                    <FontAwesomeIcon icon="gear" className="ms-2" />
                  </Link>
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
                <span className="d-block d-sm-inline mb-2 mb-sm-0" dangerouslySetInnerHTML={$html('hello_from_austin')} />
                <br />
                <span className="d-block d-sm-inline" dangerouslySetInnerHTML={{
                  __html: `
                  &nbsp;© 2005-${new Date().getFullYear()} - ${say('all_rights_reserved')}
                `}}
                />
                <span className="d-block d-xxl-inline text-gray-medium ms-xxl-2" dangerouslySetInnerHTML={$html('trademark')} />
              </p>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 d-flex align-items-center justify-content-center">
              <p className="text-white mb-0 me-2" dangerouslySetInnerHTML={$html('select_language')} />
              <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0">
                <li className="mb-0">
                  <button
                    className="btn btn-link text-gray-medium p-0 text-decoration-none"
                    title="English"
                    onClick={() => changeLang('en')}
                  >
                    English
                  </button>
                </li>
                <span className="text-gray-medium">&nbsp;|&nbsp;</span>
                <li className="mb-0">
                  <button
                    className="btn btn-link text-gray-medium p-0 text-decoration-none"
                    title="German"
                    onClick={() => changeLang('de')}
                  >
                    German
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 mt-3 mt-lg-0 d-lg-flex align-items-center justify-content-center">
              <ul className="list-unstyled social icons d-flex align-items-center justify-content-center mb-lg-0">
                <li className="me-3">
                  <a
                    href="https://www.facebook.com/DasKeyboard"
                    title="Facebook"
                  >
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.instagram.com/daskeyboard/"
                    title="Instagram"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://twitter.com/daskeyboard" title="Twitter">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.youtube.com/user/DasKeyboardCommunity"
                    title="YouTube"
                  >
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                  </a>
                </li>
                <li>
                  <a href="https://www.daskeyboard.com/blog/" title="Blog">
                    <FontAwesomeIcon icon="rss" />
                  </a>
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
