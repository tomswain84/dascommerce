/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('history page title'),
      bodyId: 'history',
      bodyClass: 'single-content',
    },
  }
}

const History: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('history page title')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>{say('introd-title')}</h2>
                <p>{say('intro-content')}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white section-pad">
          <div className="container">
            <div className="main-timeline">
              <div id="year2005" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2005_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2005_description')} />
                  </div>
                  <img src="/images/pages/daskeyboard-ultimate-side-view.jpg" className="card-img-bottom" alt={say('history_2005_title')} />
                </div>
              </div>
              <div id="year2006" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2006_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2006_description')} />
                  </div>
                  <img src="/images/pages/daskeyboard-2-front-view.png" className="card-img-bottom" alt={say('history_2006_title')} />
                </div>
              </div>
              <div id="year2008" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2008_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2008_description')} />
                  </div>
                  <img src="/images/pages/daskeyboard-3-professional.jpg" className="card-img-bottom" alt={say('history_2008_title')} />
                </div>
              </div>
              <div id="year2009" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2009_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2009_description')} />
                  </div>
                  <img src="/images/pages/model-s-professional-front-view.jpg" className="card-img-bottom" alt={say('history_2009_title')} />
                </div>
              </div>
              <div id="year2010" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2010_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2010_description')} />
                  </div>
                  <img src="/images/pages/model-s-ultimate-front-view.jpg" className="card-img-bottom" alt={say('history_2010_title')} />
                </div>
              </div>
              <div id="year2012" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2012_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2012_description')} />
                  </div>
                  <img src="/images/pages/model-s-professional-for-mac.png" className="card-img-bottom" alt={say('history_2012_title')} />
                </div>
              </div>
              <div id="year2013" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2013_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2013_description')} />
                  </div>
                  <img src="/images/pages/model-s-professional-linear-switches.png" className="card-img-bottom" alt={say('history_2013_title')} />
                </div>
              </div>
              <div id="year2014" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2014_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2014_description')} />
                  </div>
                  <img src="/images/pages/daskeyboard-4-professional-rear-view.png" className="card-img-bottom" alt={say('history_2014_title')} />
                </div>
              </div>
              <div id="year2015" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">Das Keyboard launches DK4C Professional & Ultimate</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2015_description')} />
                  </div>
                  <img src="/images/pages/daskeyboard-4c-ultimate-rear-view.jpg" className="card-img-bottom" alt={say('history_2015_title')} />
                </div>
              </div>
              <div id="year2016" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2016_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2016_description')} />
                  </div>
                  <img src="/images/pages/das-keyboard-x40.png" className="card-img-bottom" alt={say('history_2016_title')} />
                </div>
                <div className="card mt-3">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2016_title_2')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2016_description_2')} />
                  </div>
                  <img src="/images/pages/daskeyboard-5q.jpg" className="card-img-bottom" alt={say('history_2016_title_2')} />
                </div>
              </div>
              <div id="year2017" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2017_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2017_description')} />
                  </div>
                  <img src="/images/pages/5Q-Smart-Keyboard.png" className="card-img-bottom" alt={say('history_2017_title')} />
                </div>
              </div>
              <div id="year2018" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2018_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2018_description')} />
                  </div>
                  <img src="/images/pages/q-overview.png" className="card-img-bottom" alt={say('history_2018_title')} />
                </div>
              </div>
              <div id="year2020" className="timeline left">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2020_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2020_description')} />
                  </div>
                  <img src="/images/pages/4C.png" className="card-img-bottom" alt={say('history_2020_title')} />
                </div>
              </div>
              <div id="year2021" className="timeline right">
                <div className="card">
                  <div className="card-body p-0">
                    <p className="card-title oswald fw-normal p-3 m-0 bg-gray-dark text-white">{say('history_2021_title')}</p>
                    <p className="card-text small p-3 m-0 bg-gray-lighter p-3 bg-gray-lighter" dangerouslySetInnerHTML={$html('history_2021_description')} />
                  </div>
                  <img src="/images/pages/das-keyboard-5Q-front-view.jpg" className="card-img-bottom" alt={say('history_2021_title')} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default History