import type { FC, ReactChild } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from './Carousel.module.scss'

const Carousel: FC<{ className?: string }> = (props) => {
  const children = props.children as ReactChild[]
  return (
    <ReactCarousel
      className={`${props.className || ''} ${s.carousel}`}
      autoPlay
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
      centerSlidePercentage={33.33}
    >
      {children}
    </ReactCarousel>
  )
}
export default Carousel
