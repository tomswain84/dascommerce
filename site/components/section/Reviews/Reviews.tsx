/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Carousel from "@components/core/Carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const Reviews: VFC = () => {
  const { say } = useTrans()
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
      copy: `My 3rd Das Keyboard. I love these keyboards. My oldest one that's 8 years old still works like it did on day 1. I would never buy all these "gamer" keyboards before a Das. Works great for work and gaming.`,
      icon: null,
      name: 'John T.',
      company: 'Jun 01, 2022',
      focus: 'ON THE DAS KEYBOARD X50Q'
    },
    {
      copy: `Clicky and amazing. Everyone in my office hates me. But I don't care. I love it.`,
      icon: null,
      name: 'Timothy M.',
      company: 'Jun 01, 2022',
      focus: 'ON THE DAS KEYBOARD 4 PROFESSIONAL FOR MAC'
    },
    {
      copy: `Best keyboard available. if you want the best feel and touch of a real keyboard this is the best one I've found. The addition USB ports are helpful but the touch and feel of these keyboards is second to none. I bought them for the office and home.`,
      icon: null,
      name: 'Emmett B.',
      company: 'Jun 01, 2022',
      focus: 'ON THE DAS KEYBOARD 4 PROFESSIONAL'
    },
    {
      copy: `Great quality. Absolutely worth the money. It improved my typing speed, accuracy, and enjoyment.`,
      icon: null,
      name: 'Josiah P.',
      company: 'Jun 01, 2022',
      focus: 'ON THE DAS KEYBOARD 4 ROOT'
    },
    {
      copy: `Superior Product. I love the touch of this quality switching keyboard.`,
      icon: null,
      name: 'William L.',
      company: 'Jun 01, 2022',
      focus: 'ON THE DAS KEYBOARD MODEL S'
    },
    {
      copy: `Really love it. I have used an incredibly wide asst of keyboards and this is amongst the best. The feel of typing on it is so satisfying and seems to be extremely well built. I have been using it about 6 weeks and is perfect so far.`,
      icon: null,
      name: 'Jonathan O.',
      company: 'May 03, 2022',
      focus: 'ON THE DAS KEYBOARD X50Q'
    },
    {
      copy: `Love the feel. I really like the aluminum plate, the keys feel great, and it looks great on my desk!`,
      icon: null,
      name: 'Scott F.',
      company: 'May 03, 2022',
      focus: 'ON THE DAS KEYBOARD 4C TKL'
    },
    {
      copy: `Better than Apple, less money. We have two of these in our family and we find them to be more responsive and reliable than Apple’s keyboards and they cost less.`,
      icon: null,
      name: 'Jim P.',
      company: 'Apr 02, 2022',
      focus: 'ON THE DAS KEYBOARD MODEL S FOR MAC'
    },
    {
      copy: `My wife loves it! This was our first mechanical keyboard. I got it for my wife for her work-from-home PC. She loves it!`,
      icon: null,
      name: 'Steven K.',
      company: 'Feb 03, 2022',
      focus: 'ON THE DAS KEYBOARD 4Q'
    },
    {
      copy: `Exceptional all these years. Been using Ultimates at home and work since I first saw them on The Awesomer back in late 2008. Absolutely wonderful keyboards with zero issues out of the box, wonderful performance and lifespan.`,
      icon: null,
      name: 'Brendan O.',
      company: 'Feb 02, 2022',
      focus: 'ON THE DAS KEYBOARD ULTIMATE'
    },
    {
      copy: `Nothing Beats a Das Keyboard. I have a Model S Professional that is about 10 years old now which has become my work keyboard. I needed a new keyboard for my home PC and tried a couple of different brands out but none of them had the same build quality or level of reliability that I had come to expect. Das boards are by far the most durable I've ever used and will likely be the only brand I buy moving forward`,
      icon: null,
      name: 'Bill K.',
      company: 'Jan 03, 2022',
      focus: 'ON THE DAS KEYBOARD 5QS'
    },
  ]

  type Review = {
    copy: string
    icon: string | null
    name: string
    company: string
    focus: string
  }
  const ReviewCarousel: VFC<{ reviews: Review[] }> = ({ reviews }) => (
    <Carousel
      className='row position-relative'
    >
      {reviews.map((review, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <p className="review-copy">{review.copy}</p>
          </div>
          <figure className="card-body">
            {review.icon ? (
              <img className="review-icon" src={review.icon} />
            ) : (
              <div className="review-icon text-icon">
                {review.name.split(' ').map(s => s.charAt(0).toUpperCase())}
              </div>
            )}
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
                <h1>{say('reviews_title')} <span className="text-red d-block d-sm-inline">{say('reviews_subtitle')}</span></h1>
              </figcaption>
              <p>{say('reviews_description')}</p>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs d-flex align-items-center justify-content-between oswald mb-5">
              <li className="nav-item">
                <FontAwesomeIcon icon='newspaper' className="text-red me-1" size="lg" />
                <a href="#editorialReviews" className="nav-link active" data-bs-toggle="tab">
                  {say('reviews_editorial')}
                </a>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon='user' className='text-red me-1' />
                <a href="#customerReviews" className="nav-link" data-bs-toggle="tab">
                  {say('reviews_customer')}
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
