/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import allReviews from '@data/reviews.json'
import PageTitle from "@components/core/PageTitle"

export async function getStaticProps() {
  return {
    props: {
      title: "Das Keyboard Mechanical Keyboard - Reviews from Professional",
      description: 'See Das Keyboard mechanical keyboards and gear tested and reviewed by professional reviewers and tech enthusiasts.',
      bodyId: 'reviews',
      bodyClass: 'single-content',
    },
  }
}

const Reviews: VFC = () => {
  return (
    <>
      <PageTitle
        title="Professional reviews"
        type='page'
      />
      <div className="container my-5">
        <div className="row text-center">
          <h5>Tested and reviewed by tech professionals and tech magazines. See what reviewers had to say about our products.</h5>
        </div>
      </div>
      <main className="content-container mx-auto" style={{ maxWidth: 800 }}>
        <section className="bg-white">
          <div className="container">
            <div className="flex flex-column">
              {allReviews.map((review, index) => (
                <div className="card mb-4 p-4" key={index}>
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                      <img src={review.logo} alt={review.alt} className="img-fluid" width={83} />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 d-flex flex-column justify-content-center">
                      <h5 className="card-title fw-light" style={{ textTransform: 'none' }} dangerouslySetInnerHTML={{ __html: review.review }} />
                      <small className="card-text mt-3" dangerouslySetInnerHTML={{ __html: review.author }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Reviews