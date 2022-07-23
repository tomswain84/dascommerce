/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('contact-us'),
      description: 'Find the best place to buy your new Das Keyboard mechanical keyboard.',
      bodyId: 'contact',
      bodyClass: 'single-content',
    },
  }
}

const ContactUs: VFC<{}> = () => {
  const { say, $html } = useTrans()
  const { locale } = useRouter()
  return (
    <>
      <PageTitle
        title={say('contact-us')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col-md-9">
                <h2>{say('connect_with')}</h2>
                <p>{say('send-mail')}: <span dangerouslySetInnerHTML={$html('send-mail_content')}></span></p>
                <div className="row">
                  <div className="col">
                    <h3>{say('contact-us_Inquiries_about_title')}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-4">
                    <p className="mb-2">{say('contact-us_Inquiries_about_content_1')}</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/login/create_request" target="_blank" title={say('contact-us_Inquiries_about_link_1')} rel="noreferrer">{say('contact-us_Inquiries_about_link_1')}</a>
                    <p className="mt-4 mb-2">{say('contact-us_Inquiries_about_content_5')}</p>
                    <Link href="/company-information/our-story/" title={say('contact-us_Inquiries_about_link_5')}>{say('contact-us_Inquiries_about_link_5')}</Link>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4">
                    <p className="mt-4 mt-sm-0 mb-2">{say('contact-us_Inquiries_about_content_2')}</p>
                    <Link href="/company-information/become-a-reseller/" title={say('contact-us_Inquiries_about_link_2')}>{say('contact-us_Inquiries_about_link_2')}</Link>
                    <p className="mt-4 mb-2">{say('contact-us_Inquiries_about_content_8')}</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/login/create_request" target="_blank" title={say('contact-us_Inquiries_about_link_8')} rel="noreferrer">{say('contact-us_Inquiries_about_link_8')}</a>
                  </div>
                  <div className="col-12 col-lg-4">
                    <p className="mt-4 mt-lg-0 mb-2">{say('contact-us_Inquiries_about_content_3')}</p>
                    <Link href="/company-information/education-program" title={say('contact-us_Inquiries_about_link_3')}>{say('contact-us_Inquiries_about_link_3')}</Link>
                    <p className="mt-4 mb-2">{say('contact-us_Inquiries_about_content_6')}</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/" target="_blank" title={say('contact-us_Inquiries_about_link_6')} rel="noreferrer">{say('contact-us_Inquiries_about_link_6')}</a> - <Link href="/company-information/press-kit/" title={say('contact-us_Inquiries_about_link_7')}>{say('contact-us_Inquiries_about_link_7')}</Link>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3>{say('head_office')}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="alert alert-danger" role="alert">
                        <p dangerouslySetInnerHTML={$html('temporary_redirection')} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3>Our Location</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6882.866673391698!2d-97.75397!3d30.395444999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc9b5ed08bb5%3A0x41e17c097b944aa2!2sGreat%20Hills%20Plaza!5e0!3m2!1sen!2sus!4v1653353166862!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sidebar" className="col-md-3 mt-5">
                <div className="sidebar-content">
                  <h3 className="sidebar-title">{say('contact_info')}</h3>
                  {locale === 'en' ? (
                    <>
                      <FontAwesomeIcon icon='location-dot' className="text-red me-2" />
                      <span className="oswald fw-normal">Address</span>
                      <p className="small mt-2">
                        9600 Great Hills Trail, Suite 150W <br />
                        Austin, Texas 78759 <br />
                        USA
                      </p>
                      <FontAwesomeIcon icon='phone' className="text-red me-2" />
                      <span className="oswald fw-normal">Phone</span>
                      <p className="small mt-2">
                        +1 512 346 0360 – GMT-6 <br />
                        Fax: 512.233.5335
                      </p>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon='envelope' className="text-red me-2" />
                      <span className="oswald fw-normal">Email:</span>
                      <p className="small mt-2"><a href="mailto:info@daskeyboard.com">info@daskeyboard.com</a></p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default ContactUs