import Link from "@components/core/Link"
import PageTitle from "@components/core/PageTitle"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Guarantee",
      description: 'Our Engagement to Happiness Mechanical Keyboards Bags and Wallets Space Pen Das Keyboard Mechanical Keyboards Exclusive daskeyboard.com 30-day',
      bodyId: 'guarantee',
      bodyClass: 'single-content',
    },
  }
}

const Guarantee: VFC = () => {
  const { say, $html } = useTrans();
  return (
    <>
      <PageTitle
        title="Guarantee"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2 className="text-red mb-4" dangerouslySetInnerHTML={$html('guarantee_title')} />
                <div className="accordion" id="accordionFAQ">

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-1">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1" dangerouslySetInnerHTML={$html('warranty-1-q')} />
                    </h2>
                    <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="heading-1" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-1-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-2">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2" dangerouslySetInnerHTML={$html('warranty-2-q')} />
                    </h2>
                    <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-2-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-3">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3" dangerouslySetInnerHTML={$html('warranty-3-q')} />
                    </h2>
                    <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base">
                        <span dangerouslySetInnerHTML={$html('warranty-3-a')} />
                        <table className="table mt-4">
                          <tbody>
                            <tr>
                              <td><strong dangerouslySetInnerHTML={$html('warranty-3-a-3')} /></td>
                              <td dangerouslySetInnerHTML={$html('warranty-3-a-4')} />
                            </tr>
                            <tr>
                              <td><strong dangerouslySetInnerHTML={$html('warranty-3-a-15')} /></td>
                              <td dangerouslySetInnerHTML={$html('warranty-3-a-16')} />
                            </tr>
                            <tr>
                              <td><strong dangerouslySetInnerHTML={$html('warranty-3-a-13')} /></td>
                              <td dangerouslySetInnerHTML={$html('warranty-3-a-14')} />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-4">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4" dangerouslySetInnerHTML={$html('warranty-4-q')} />
                    </h2>
                    <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-4-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-5">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5" dangerouslySetInnerHTML={$html('warranty-5-q')} />
                    </h2>
                    <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-5-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-6">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6" dangerouslySetInnerHTML={$html('warranty-6-q')} />
                    </h2>
                    <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-6-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-7">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7" dangerouslySetInnerHTML={$html('warranty-7-q')} />
                    </h2>
                    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-7-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-8">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8" dangerouslySetInnerHTML={$html('warranty-8-q')} />
                    </h2>
                    <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-8-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-9">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9" dangerouslySetInnerHTML={$html('warranty-9-q')} />
                    </h2>
                    <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-9-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-10">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10" dangerouslySetInnerHTML={$html('warranty-10-q')} />
                    </h2>
                    <div id="collapse-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-10-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-11">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="false" aria-controls="collapse-11" dangerouslySetInnerHTML={$html('warranty-11-q')} />
                    </h2>
                    <div id="collapse-11" className="accordion-collapse collapse" aria-labelledby="heading-11" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-11-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-12">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-12" aria-expanded="false" aria-controls="collapse-12" dangerouslySetInnerHTML={$html('warranty-12-q')} />
                    </h2>
                    <div id="collapse-12" className="accordion-collapse collapse" aria-labelledby="heading-12" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-12-a')} />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="heading-13">
                      <a className="accordion-button bg-gray-lighter text-gray-darker text-decoration-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-13" aria-expanded="false" aria-controls="collapse-13" dangerouslySetInnerHTML={$html('warranty-13-q')} />
                    </h2>
                    <div id="collapse-13" className="accordion-collapse collapse" aria-labelledby="heading-13" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body bg-white small lh-base" dangerouslySetInnerHTML={$html('warranty-13-a')} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Guarantee