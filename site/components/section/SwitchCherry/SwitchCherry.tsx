/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import type { VFC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SwitchCherry: VFC<{}> = () => {
  const audio = useRef(undefined as unknown as HTMLAudioElement)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-12 col-lg-4">
          <img className="img-fluid mb-4 mb-lg-0" src="/images/img-switch_brown.png" alt="Cherry MX Brown Switch" />
        </div>
        <div className="col-12 col-sm-6 col-md-12 col-lg-8">
          <figure className="heading">
            <figcaption>
              <h2 className="m-0 p-0">Cherry MX <span className="text-red">Brown Switch</span>.</h2>
              <p className="oswald">Tactile Experience</p>
            </figcaption>
            <p>The Cherry MX brown switches have a soft, tactile bump about halfway through the key press. The soft pressure point switch technology makes the mechanical keyboard less clicky while providing an awesome tactile experience.</p>
          </figure>
          <a className={`btn btn-outline-primary text-gray-dark ${playing ? 'playing' : ''}`} id="playButton">
            <span className="play" onClick={() => audio.current.play()}>
              <i>
                <FontAwesomeIcon icon="play" className="me-2" />
              </i>
              Play Soft Tactile Sound
            </span>
            <span className="pause me-2" onClick={() => audio.current.pause()}>
              <i>
                <FontAwesomeIcon icon="pause" className="me-2" />
              </i>
              Pause Soft Tactile Sound
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
