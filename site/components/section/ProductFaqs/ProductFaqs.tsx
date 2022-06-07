import type { VFC } from "react"

interface Props {
  heading?: string
  faqs: Array<{
    question: string
    answer: string
  }>
}
const ProductFaqs: VFC<Props> = ({ heading, faqs }) => {
  return (
    <section id="keyFeatures" className="content-container bg-gray-dark dark-section section-pad">
      <div className="container">
        <div className="row pb-4">
          <div className="col">
            <h2 className="text-red">{heading || 'Frequently Asked Questions'}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="accordion" id="accordionFAQ">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingOne">
                    <a className="accordion-button bg-gray-darker text-white text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${index}`} aria-expanded="true" aria-controls="collapseOne">
                      {faq.question}
                    </a>
                  </h2>
                  <div id={`faq-${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                    <div className="accordion-body bg-gray-dark small" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductFaqs
