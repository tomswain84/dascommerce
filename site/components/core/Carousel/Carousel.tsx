import { FC, ReactChild, useEffect, useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from './Carousel.module.scss'

const Carousel: FC<{ className?: string }> = (props) => {
  const children = props.children as ReactChild[]
  const [numOfSlides, setNumOfSlides] = useState(3)
  function onResize() {
    if (window.innerWidth < 576) {
      setNumOfSlides(1)
    }
    else if (window.innerWidth < 768) {
      setNumOfSlides(2)
    }
    else if (window.innerWidth < 1200) {
      setNumOfSlides(3)
    }
    else {
      setNumOfSlides(4)
    }
  }
  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })
  return (
    <ReactCarousel
      className={`${props.className || ''} ${s.carousel}`}
      autoPlay={false}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      renderArrowNext={
        (onClickHandler) => (
          <div className={s.button + ' ' + s.next}>
            <FontAwesomeIcon icon='chevron-right' fontSize={10} onClick={onClickHandler} />
          </div>
        )
      }
      renderArrowPrev={
        (onClickHandler) => (
          <div className={s.button + ' ' + s.prev}>
            <FontAwesomeIcon icon='chevron-left' fontSize={10} onClick={onClickHandler} />
          </div>
        )
      }
      infiniteLoop
      centerMode
      centerSlidePercentage={100 / numOfSlides}
    >
      {children}
    </ReactCarousel>
  )
}
export default Carousel
