/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import type { VFC } from "react"

const SwitchGammaZulu: VFC<{}> = () => {
  const audio = useRef(undefined as unknown as HTMLAudioElement)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <div className="row align-items-center py-5 my-md-0 border-bottom">
        <div className="col-md order-md-2">
          <figure className="heading m-0">
            <figcaption>
              <h2>
                <small>Ultra-fast & comfortable</small>
                <br />Gamma Zulu mechanical key switches
              </h2>
            </figcaption>
            <p>Made by Omron (Japan) for Das Keyboard, the Gamma Zulu is a modern best-in-class, fast, soft tactile key switch. It lasts forever with its unequaled 100 million life cycle. The feel is amazing and allows effortless typing and gaming sessions.</p>
          </figure>
          <div className="row mb-4">
            <div className="col d-sm-flex align-items-center justify-content-start">
              <a className={`btn btn-outline-primary ${playing ? 'playing' : ''}`} id="playButton">
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
                  Play Soft Tactile Sound
                </span>
              </a>
              <a className="btn btn-primary my-3 my-sm-0 ms-sm-3" href="#" title="About Gamma Zulu Switches">About Gamma Zulu Switches</a>
            </div>
          </div>
        </div>
        <div className="col-md text-center">
          <img className="img-fluid rounded" src="/images/product-images/product-details/x50q/gammazulu.gif" alt="Gamma Zulu mechanical key switches" />
        </div>

        <audio ref={audio} id="GammaZuluAudio"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src="/audio/gamma_zulu_switches.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  )
}
export default SwitchGammaZulu
