/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import type { VFC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  type: 'brown' | 'blue'
  label: string
  description: string
  image: {
    src: string
  }
  button: {
    play: string
    pause: string
  }
}
const SwitchCherry: VFC<Props> = ({ type, label, description, image, button }) => {
  const audio = useRef(undefined as unknown as HTMLAudioElement)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-12 col-lg-4">
          <img className="img-fluid mb-4 mb-lg-0" src={image.src} alt={`Cherry MX ${type.toUpperCase()} Switch`} />
        </div>
        <div className="col-12 col-sm-6 col-md-12 col-lg-8">
          <figure className="heading">
            <figcaption>
              <h2 className="m-0 p-0">Cherry MX <span className={`text-${type == 'blue' ? 'blue' : 'red'}`}>{type} Switch</span>.</h2>
              <p className="oswald" dangerouslySetInnerHTML={{ __html: label }} />
            </figcaption>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </figure>
          <a className={`btn btn-outline-primary text-gray-dark ${playing ? 'playing' : ''}`} id="playButton">
            <span className="play" onClick={() => audio.current.play()}>
              <i>
                <FontAwesomeIcon icon="play" className="me-2" />
              </i>
              {button.play}
            </span>
            <span className="pause me-2" onClick={() => audio.current.pause()}>
              <i>
                <FontAwesomeIcon icon="pause" className="me-2" />
              </i>
              {button.pause}
            </span>
          </a>
        </div>
      </div>
      <audio ref={audio} id="CherryAudioSoft"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/audio/Typing-experience-Soft-mp3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}
export default SwitchCherry
