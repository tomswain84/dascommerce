/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('corporate_sale_title', true),
      description: 'Das Keyboard offers special programs to corporate organizations.',
      bodyId: 'corporate-sales',
      bodyClass: 'single-content',
    },
  }
}

const CorporateSale: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('corporate_sale_title', true)}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img className="img-fluid" src="/images/pages/happyuser.jpg" alt="Happy User" />
              </div>
              <div className="bg-gray-lighter col-12 col-md-6 p-3 p-sm-4 p-md-5 d-flex align-items-center justify-content-center">
                <div>
                  <h2 dangerouslySetInnerHTML={$html('corporate_sale_heading')} />
                  <p className="text-red"><strong dangerouslySetInnerHTML={$html('corporate_sale_subtitle')} /></p>
                  <p dangerouslySetInnerHTML={$html('corporate_sale_description1')} />
                  <p dangerouslySetInnerHTML={$html('corporate_sale_description2')} />
                  {/* <!-- Modal Trigger - Business Program --> */}
                  <a className="btn btn-outline-primary text-gray-dark ms-auto" href="#" title={say('corporate_sale_learn_more', true)} data-bs-toggle="modal" data-bs-target="#businessProgram" dangerouslySetInnerHTML={$html('corporate_sale_learn_more')} />
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
                                css: "mojoWidgetCss",
                              }, "*")
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
                <h3 className="text-red" dangerouslySetInnerHTML={$html('corporate_sale_benefit_1_title')} />
                <p dangerouslySetInnerHTML={$html('corporate_sale_benefit_1_description')} />
              </div>
              <div className="col-12 col-sm-4 text-center">
                <FontAwesomeIcon icon='life-ring' size='5x' />
                <h3 className="text-red" dangerouslySetInnerHTML={$html('corporate_sale_benefit_2_title')} />
                <p dangerouslySetInnerHTML={$html('corporate_sale_benefit_2_description')} />
              </div>
              <div className="col-12 col-sm-4 text-center">
                <FontAwesomeIcon icon="assistive-listening-systems" size='5x' />
                <h3 className="text-red" dangerouslySetInnerHTML={$html('corporate_sale_benefit_3_title')} />
                <p dangerouslySetInnerHTML={$html('corporate_sale_benefit_3_description')} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-dark dark-section section-pad">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="text-white mb-5" dangerouslySetInnerHTML={$html('corporate_sale_cta_title')} />
                {/* <!-- Modal Trigger - Business Program --> */}
                <a className="btn btn-primary text-gray-dark ms-auto" href="#" title={say('corporate_sale_learn_more', true)} data-bs-toggle="modal" data-bs-target="#businessProgram" dangerouslySetInnerHTML={$html('corporate_sale_learn_more')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default CorporateSale