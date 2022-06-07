/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Carousel from "@components/core/Carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

const Reviews: VFC = () => {
  const editorialReviews = [
    {
      copy: `It's almost like typing on a cloud compared to Apple's Magic Keyboard.`,
      icon: "/images/reviews-icon-business_insider.png",
      name: 'Antonio Villas-Boas',
      company: 'Business Insider',
      focus: 'On the Das Keyboard 4 Professional for Mac'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `This highly durable, top-tier mechanical keyboard will satisfy all your click-clacky needs while still offering excellent performance and long-lasting, coat-protected keys.`,
      icon: 'images/reviews-icon-digital_trends.png',
      name: 'Tyler Lacoma',
      company: 'Digital Trends',
      focus: 'On the Das Keyboard 4 for Mac'
    },
    {
      copy: `A formidable and well-designed gaming keyboard with all the usual bells and whistles.`,
      icon: 'images/reviews-icon-wired_magazine.png',
      name: 'Jess Grey',
      company: 'Wired Magazine',
      focus: 'On the Das Keyboard 5Q'
    },
    {
      copy: `Some keyboards just ooze class.`,
      icon: 'images/reviews-icon-tech_radar.png',
      name: 'Bill Thomas and Kevin Lee',
      company: 'Tech Radar',
      focus: 'On the Das Keyboard Prime 13'
    },
    {
      copy: `You’ll probably never enjoy typing more than you will on this keyboard.`,
      icon: 'images/reviews-icon-bgr_media.png',
      name: 'Tim Kohut',
      company: 'BGR Media',
      focus: 'On the Das Keyboard 4 Professional MX Brown'
    },
  ]
  const customerReviews = [
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
    {
      copy: `The tactile responsiveness when I push a key is so satisfying. It’s silly but it also makes me feel productive, each keystroke an audio reminder that I’m one step closer to my goal.`,
      icon: 'images/reviews-icon-ny_times.png',
      name: 'Daisuke Wakabayashi',
      company: 'NY Times',
      focus: 'On the Das Keyboard Model S'
    },
  ]

  const ReviewCarousel: VFC<{ reviews: typeof editorialReviews }> = ({ reviews }) => (
    <Carousel
      className='row position-relative'
    >
      {reviews.map((review, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <p className="review-copy">{review.copy}</p>
          </div>
          <figure className="card-body">
            <img className="review-icon" src={review.icon} />
            <figcaption>
              <h5 className="card-title review-name">{review.name}</h5>
              <p className="review-company">{review.company}</p>
              <p className="review-focus">{review.focus}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </Carousel>
  )

  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-boxed">
        <div className="row">
          <div className="col">
            <figure className="heading text-center">
              <figcaption>
                <h1>Real Reviews <span className="text-red d-block d-sm-inline">from real people</span></h1>
              </figcaption>
              <p>Our customers love Das Keyboard. But don't take our word for it...</p>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs d-flex align-items-center justify-content-between oswald mb-5">
              <li className="nav-item">
                <FontAwesomeIcon icon='newspaper' className="text-red me-1" size="lg" />
                <a href="#editorialReviews" className="nav-link active" data-bs-toggle="tab">
                  Editorial Reviews
                </a>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon='user' className='text-red me-1' />
                <a href="#customerReviews" className="nav-link" data-bs-toggle="tab">
                  Customer Reviews
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="editorialReviews">
                <ReviewCarousel reviews={editorialReviews} />
              </div>
              <div className="tab-pane fade" id="customerReviews">
                <ReviewCarousel reviews={customerReviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default Reviews
