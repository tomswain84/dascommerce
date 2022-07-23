/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import DownloadButton from "@components/core/DownloadButton"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('press-kit'),
      bodyId: 'press-kit',
      bodyClass: 'single-content',
    },
  }
}

const PressKit: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('press-kit')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">

                <p>{say('press-kit_introduction')}</p>

                <h3 className="sidebar-title mt-5">{say('press-kit_title_1')}</h3>
                <p dangerouslySetInnerHTML={$html('press-kit_content_1')} />

                <h3 className="sidebar-title mt-5">{say('press-kit_title_2')}</h3>
                <div dangerouslySetInnerHTML={$html('press-kit_content_2')}></div>

                <h3 className="sidebar-title mt-5">{say('press-kit_title_3')}</h3>

                <div className="row align-items-center">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/Das_Keyboard_logo_black.png" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="fw-bold mt-3 mt-sm-0 mb-0">{say('press-kit_logo_title_1')} {say('dklogo-black')}</p>
                    <a href="/images/press-kit/Das_Keyboard_logo_black.png" title={say('press-kit_logo')}>{say('press-kit_logo')}</a>
                  </div>
                </div>

                <div className="row align-items-center pt-3 pt-sm-5">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/Das_Keyboard_logo_white.png" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="fw-bold mt-3 mt-sm-0 mb-0">{say('press-kit_logo_title_1')} {say('dklogo-white')}</p>
                    <a href="/images/press-kit/Das_Keyboard_logo_white.png" title={say('press-kit_logo')}>{say('press-kit_logo')}</a>
                  </div>
                </div>

                {/* <!-- Das Keyboard 5QS --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/5QS-mechanical-keyboard-Front_View_with_Palm_Rest.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('5QS_brand')} />
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Front_View_with_Palm_Rest.jpg'
                      label={say('dk5q-front_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Angled_Top_Right_Side_View.jpg'
                      label={say('dk5q-front_side_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Side_View_with_Palmrest.jpg'
                      label={say('dk5q-side_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard X50Q --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/X50_1_top_full.png" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_x50')} />
                    <DownloadButton
                      href='/images/press-kit/X50_1_top_full.png'
                      label={say('top_view')} ext={say('press-kit_logo_x50_3.0')}
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_2_front_side_full.png'
                      label={say('front_side_view')} ext={say('press-kit_logo_x50_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_3_angle_side_full.png'
                      label={say('angled_side_view')} ext={say('press-kit_logo_x50_3.7')}
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_4_side_right_full.png'
                      label={say('side_view')} ext={say('press-kit_logo_x50_3.7')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4Q --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4q-front-view-press-kit.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_4q')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-front-view-press-kit.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-front-side-view-press-kit.jpg'
                      label={say('front_side_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-rear-view-press-kit.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-side-view-press-kit.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_Dk5k_3.6')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard Prime 13 --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/Prime-13-front-view.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_p13')} />
                    <DownloadButton
                      href='/images/press-kit/Prime-13-front-view.jpg'
                      label={say('p13-top_view')} ext={say('press-kit_logo_p13k_3.0')}
                    />
                    <DownloadButton
                      href='/images/press-kit/Prime-13-side-view.jpg'
                      label={say('p13-angled_side_view')} ext={say('press-kit_logo_p13_3.6')}
                    />
                    <DownloadButton
                      href='/images/press-kit/Prime-13-diagonal-view.jpg'
                      label={say('p13-angled_front_view')} ext={say('press-kit_logo_p13_3.7')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4 root --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4-root-front-view.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-4-root')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-front-view.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-rear-view-press-kit.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-side-view-press-kit.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-usb-hub-view-press-kit.jpg'
                      label={say('usb-hub')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4C TKL mechanical keyboard --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4C-professional-front-view2.png" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-4C-professional')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-front-view2.png'
                      label={say('front_view')} ext={say('press-kit_logo_3.2')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-front-view2.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-rear-view2.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4C-professional-side-view2.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4 Professional mechanical keyboard --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4-professional-front-view.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-4-professional')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-front-view.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-rear-view.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-side-view-press-kit.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4 Ultimate mechanical keyboard --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4-ultimate-front-view-carousel-press-kit.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-4-ultimate')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-front-view-carousel-press-kit.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-front-view-carousel-press-kit.png'
                      label={say('front_view')} ext={say('press-kit_logo_3.2')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-rear-view-carousel-press-kit.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-ultimate-side-view-press-kit.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard 4 Professional for Mac mechanical keyboard --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-4-professional-for-mac-front-view.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-4-professional-for-mac')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-for-mac-front-view.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-for-mac-rear-view.jpg'
                      label={say('rear_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-for-mac-side-view.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard Model S Professional --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-professional-front-view.png" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-S-professional')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-professional-front-view.png'
                      label={say('front_view')} ext={say('press-kit_logo_3.2')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-professional-side.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/dask-usb-hub-800_thumb.jpg'
                      label={say('usb-hub')} ext={say('press-kit_logo_3.2')}
                    />
                    <DownloadButton
                      href='/images/press-kit/DasKeyboard-S-professional_front_view.png'
                      label={say('media-keys')} ext={say('press-kit_logo_3.2')}
                    />
                    <DownloadButton
                      href='/images/press-kit/DasKeyboard-S-professional_front_view_with_reflection.png'
                      label={say('media-keys-reflection')} ext={say('press-kit_logo_3.2')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard Model S Ultimate --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-ultimate-front.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_daskeyboard-S-ultimate')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-ultimate-front.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard_ult_hero.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard Model S Professional For Mac --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-s-professional-mac-front.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_4')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-s-professional-mac-front.jpg'
                      label={say('front_view')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-s-professional-mac-side.jpg'
                      label={say('side_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

                <hr className="opacity-25" />

                {/* <!-- Das Keyboard HackShield messenger bag --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/daskeyboard-messenger-bag-angled-view-closed.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red" dangerouslySetInnerHTML={$html('press-kit_logo_title_11')} />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-closed.jpg'
                      label={say('closed_bag')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-opened.jpg'
                      label={say('open_bag')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag.jpg'
                      label={say('fidlock')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-closed-with-background.jpg'
                      label={say('rfid_blocking')} ext={say('press-kit_logo_3.1')}
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-on-shoulder.jpg'
                      label={say('messenger_view')} ext={say('press-kit_logo_3.1')}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default PressKit