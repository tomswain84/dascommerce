/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import type { VFC } from "react"
import useTrans from "lang/useTrans"

interface Props {
  heading?: string
  title?: string
  description?: string
}
const SwitchGammaZulu: VFC<Props> = ({ heading, title, description }) => {
  const { say, $html } = useTrans()
  const audio = useRef(undefined as unknown as HTMLAudioElement)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <div className="row align-items-center py-5 my-md-0 border-bottom">
        <div className="col-md-8 order-md-2">
          <figure className="heading m-0">
            <figcaption>
              <h2 dangerouslySetInnerHTML={{
                __html: `
                <small>${heading || say('gamma-zulu-lifecycle-title')}</small>
                <br/>${title || say('gamma-zulu-lifecycle-subtitle')}
              `}}
              />
            </figcaption>
            <p dangerouslySetInnerHTML={{ __html: description || $html('gamma-zulu-lifecycle-paragraph').__html }} />
          </figure>
          <div className="row mb-4">
            <div className="col d-sm-flex flex-wrap align-items-center justify-content-start">
              <a className={`btn btn-outline-primary mb-3 me-sm-3 ${playing ? 'playing' : ''}`} id="playButton">
                <span className="play" onClick={() => audio.current.play()}>
                  <i>
                    <FontAwesomeIcon icon="play" className="me-2" />
                  </i>
                  <span dangerouslySetInnerHTML={$html('5q-play-sound')} />
                </span>
                <span className="pause me-2" onClick={() => audio.current.pause()}>
                  <i>
                    <FontAwesomeIcon icon="pause" className="me-2" />
                  </i>
                  Pause Soft Tactile Sound
                </span>
              </a>
              <a className="btn btn-primary my-3 my-sm-0" href="#" title="About Gamma Zulu Switches" dangerouslySetInnerHTML={$html('learn-more-about-switch')} />
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
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
