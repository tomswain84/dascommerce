/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Contact Us",
      bodyId: 'contact',
      bodyClass: 'single-content',
    },
  }
}

const ContactUs: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col-md-9">
                <h2>Connect with Das Keyboard</h2>
                <p>Technical Support: For support questions visit our <a className="fw-bold" href="https://daskeyboard.mojohelpdesk.com/" target="_blank" title="Help Center" rel="noreferrer">Help Center</a>.</p>
                <div className="row">
                  <div className="col">
                    <h3>For Inquiries About</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-4">
                    <p className="mb-2">Sales Information</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/login/create_request" target="_blank" title="Send us a Request" rel="noreferrer">Send us a request</a>
                    <p className="mt-4 mb-2">The story behind Das Keyboard</p>
                    <Link href="/company-information/our-story/" title="Get the full story">Get the full story</Link>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4">
                    <p className="mt-4 mt-sm-0 mb-2">Reseller inquiries</p>
                    <Link href="/company-information/become-a-reseller/" title="Become a reseller">Become a reseller</Link>
                    <p className="mt-4 mb-2">For everything else</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/login/create_request" target="_blank" title="Create a request" rel="noreferrer">Create a request</a>
                  </div>
                  <div className="col-12 col-lg-4">
                    <p className="mt-4 mt-lg-0 mb-2">Education discounts</p>
                    <Link href="/company-information/education-program" title="Learn about our education program">Learn about our education program</Link>
                    <p className="mt-4 mb-2">Media contact</p>
                    <a href="https://daskeyboard.mojohelpdesk.com/" target="_blank" title="Contact our media department" rel="noreferrer">Contact our media department</a> - <Link href="/company-information/press-kit/" title="Get the press kit">Get the press kit</Link>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3>Contact Us</h3>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <div className="alert alert-danger" role="alert">
                        <p>Our call center operations are under reduced staffing and responses to Support issues may take 2-3 business days.</p>
                        <p>To receive a response in 1 business day please <a href="https://daskeyboard.mojohelpdesk.com/login/create_request#/ticket-form-selection" target="_blank" title="Submit A Ticket" rel="noreferrer">Submit A Ticket</a></p>
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
                  <h3 className="sidebar-title">Contact Info</h3>
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