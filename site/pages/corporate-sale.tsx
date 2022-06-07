/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Corporate Purchase Program",
      bodyId: 'corporate-sales',
      bodyClass: 'single-content',
    },
  }
}

const CorporateSale: VFC = () => {
  return (
    <main className="content-container">
      <section className="bg-white">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src="/images/pages/happyuser.jpg" alt="Happy User" />
            </div>
            <div className="bg-gray-lighter col-12 col-md-6 p-3 p-sm-4 p-md-5 d-flex align-items-center justify-content-center">
              <div>
                <h2>Das Keyboard Corporate Purchase Program</h2>
                <p className="text-red"><strong>Unlock Extra Savings for your Business</strong></p>
                <p>The titans of the tech world buy our mechanical keyboards to maximize the performance of their engineering and business teams, while faculty from the top ivy league colleges trust Das Keyboard to help them excel in their fields. </p>
                <p>Take your employees typing to the next level today, contact your dedicated business account manager to place an order or set up a business discount. </p>
                {/* <!-- Modal Trigger - Business Program --> */}
                <a className="btn btn-outline-primary text-gray-dark ms-auto" href="#" title="Learn more about business program" data-bs-toggle="modal" data-bs-target="#businessProgram">Learn more about business program</a>
                {/* <!-- Modal - Business Program --> */}
                <div className="modal fade" id="businessProgram" tabIndex={-1} aria-labelledby="businessProgram" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-gray-darker">
                      <div className="modal-body bg-white">
                        <iframe
                          src="https://daskeyboard.mojohelpdesk.com/widgets/create_request#/ticket-form/19791"
                          style={{
                            width: '100%',
                            height: '600px',
                            overflow: 'hidden',
                            border: 0,
                          }}
                          onLoad={(event) => {
                            event.currentTarget.contentWindow?.postMessage({
                              css: "mojoWidgetCss"
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white section-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 text-center">
              <FontAwesomeIcon icon="percent" size='5x' />
              <h3 className="text-red">Discount</h3>
              <p>Business discounts available, save on your next business order, early access to new models.</p>
            </div>
            <div className="col-12 col-sm-4 text-center">
              <FontAwesomeIcon icon='life-ring' size='5x' />
              <h3 className="text-red">Risk free</h3>
              <p>30-day money-back guarantee, 1-year limited hardware warranty.</p>
            </div>
            <div className="col-12 col-sm-4 text-center">
              <FontAwesomeIcon icon="assistive-listening-systems" size='5x' />
              <h3 className="text-red">Dedicated contact</h3>
              <p>Dedicated business specialist, special orders available, easy returns.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-dark dark-section section-pad">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="text-white mb-5">Ready to take your team to the next level?</h2>
              {/* <!-- Modal Trigger - Business Program --> */}
              <a className="btn btn-primary text-gray-dark ms-auto" href="#" title="Learn more about business program" data-bs-toggle="modal" data-bs-target="#businessProgram">Learn more about business program</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default CorporateSale