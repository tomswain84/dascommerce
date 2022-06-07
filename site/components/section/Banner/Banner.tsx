/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"
import BannerBottom from "./BannerBottom"
import BannerLeft from "./BannerLeft"
import BannerRight from "./BannerRight"

interface BannerButton {
  label: string,
  variant: 'primary' | 'outline-primary'
  href?: string,
}

interface BannerImage {
  position: "left" | "right" | "bottom" | "top" | 'center'
  src: string
  srcFull?: string
  rounded?: boolean
  width?: string | number
  height?: string | number,
  blend?: boolean
  className?: string,
  stretch?: boolean
}
interface SectionBannerProps {
  sectionId?: string
  sectionPad?: boolean
  image: BannerImage,
  content: {
    title: string,
    titleExtra?: string
    titlePadding?: string
    description: string
    textAlign?: 'center' | 'left' | 'right',
    button?: string | BannerButton,
    background?: 'light' | 'dark' | 'white'
  }
  containerPadding?: number | string
  className?: string
  noCol?: boolean
}
export interface BannerProps extends SectionBannerProps {
  BannerButton: () => JSX.Element | null,
}
const SectionBanner: VFC<SectionBannerProps> = (props) => {
  const { sectionId, sectionPad: _sectionPad, image, className } = props
  const sectionPad = _sectionPad || false
  const { button, textAlign, background } = props.content
  let backgroundClass, textColorClass = 'text-black'
  switch (background) {
    case 'dark':
      backgroundClass = 'bg-gray-darker'
      textColorClass = 'text-white'
      break
    case 'light':
      backgroundClass = 'bg-gray-lighter'
      break
    default:
      backgroundClass = 'bg-white'
      break
  }
  const BannerButton = () => {
    let buttonClass = 'btn',
      renderingButton: BannerButton
    if (button) {
      if (typeof button === 'string') {
        renderingButton = {
          variant: 'primary',
          label: button
        }
      }
      else {
        renderingButton = button
      }
      switch (renderingButton.variant) {
        case 'primary':
          buttonClass += ' btn-primary'
          break
        case 'outline-primary':
          buttonClass += ' btn-outline-primary text-gray-dark'
          break
      }
      return (
        <a className={buttonClass} href={renderingButton.href || '#'} title={renderingButton.label}>
          {renderingButton.label}
          <FontAwesomeIcon icon='caret-right' className={`ms-2 ${renderingButton.variant === 'outline-primary' ? 'text-red' : ''}`} />
        </a>
      )
    }
    return null
  }

  const bannerProps = {
    BannerButton,
    ...props,
    content: {
      ...props.content,
      textAlign: textAlign || 'center'
    }
  }
  const BannerComponent = () => {
    switch (image.position) {
      case 'left':
        return <BannerLeft {...bannerProps} />
      case 'bottom':
        return <BannerBottom {...bannerProps} />
      case 'right':
        return <BannerRight {...bannerProps} />
      default:
        return null
    }
  }

  return (
    <section id={sectionId} className={`${className || ''} ${backgroundClass} ${sectionPad ? 'section-pad' : ''} ${background === 'dark' ? 'dark-section' : ''}`}>
      <BannerComponent />
    </section>
  )
}

export default SectionBanner
