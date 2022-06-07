/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import DownloadButton from "@components/core/DownloadButton"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Press Kit",
      bodyId: 'press-kit',
      bodyClass: 'single-content',
    },
  }
}

const PressKit: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="Press Kit"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">

                <p>Metadot grants full permission to utilize and reproduce the following images, in whole or in part. Das Keyboard is a trademark of Metadot.</p>

                <h3 className="sidebar-title mt-5">Media contact</h3>
                <p>Need to talk to somebody at our media department? <a href="mailto:media@daskeyboard.com">media@daskeyboard.com</a></p>

                <h3 className="sidebar-title mt-5">Press releases</h3>
                <ul className="list-unstyled">
                  <ListItem>August 25, 2020 - <a href="https://www.businesswire.com/news/home/20200825005348/en/Das-Keyboard-Announces-Winners-Ultimate-Typing-Championship">Das Keyboard Announces Winners of the Ultimate Typing Championship 2020 and Crowns Best Typist on the Planet</a></ListItem><ListItem>May 11, 2020 - <a href="https://www.businesswire.com/news/home/20200511005142/en/Das-Keyboard-Announces-Updates-4C-Tenkeyless-Mechanical">Das Keyboard Announces Updates to its 4C Tenkeyless Mechanical Keyboard</a></ListItem><ListItem>March 5, 2019 - <a href="http://www.businesswire.com/news/home/20190305005157/en/Das-Keyboard-Introduces-Smart-Keyboard-Updates-Professionals">Das Keyboard Introduces Smart Keyboard Updates for IT Professionals and Software Developers</a></ListItem><ListItem>September 6, 2018 - <a href="http://www.businesswire.com/news/home/20180906005294/en/">The Power of Q: Das Keyboard Inspires Mechanical Keyboard Revolution with Launch of Q-Series Cloud-Connected Smart Keyboards</a></ListItem><ListItem>September 7, 2016 - <a href="http://www.businesswire.com/news/home/20160907006083/en/Superior-Quality-Everyday-Minimalist---Introducing-Das">Superior Quality for the Everyday Minimalist - Introducing Das&nbsp;Keyboard Prime 13</a></ListItem>
                  <ListItem>June 30, 2016 - <a href="http://www.businesswire.com/news/home/20160630005848/en/Das-Keyboard-Unveils-Cloud-Connected-Keyboard-Kickstarter">Das&nbsp;Keyboard Unveils First Cloud-Connected Keyboard on Kickstarter</a></ListItem>
                  <ListItem>January 26, 2016 - <a href="http://www.businesswire.com/news/home/20160126005602/en/Das-Keyboard-Arms-Gamers-Total-Domination-Launches">Das&nbsp;Keyboard Arms Gamers for Total Domination,
                    Launches Division Zero Gaming Gear Line</a></ListItem>
                  <ListItem>March 10, 2015 - <a href="http://www.prnewswire.com/news-releases/introducing-the-new-das-keyboard-4-professional-for-mac-switch-to-the-highest-performance-mechanical-typing-experience-yet-300047929.html">Introducing the New Das&nbsp;Keyboard 4 Professional for Mac:
                    Switch to the Highest-Performance Mechanical Typing Experience Yet</a></ListItem>
                  <ListItem>January 27, 2015 - <a href="http://www.prnewswire.com/news-releases/do-more-with-less-all-new-das-keyboard-4c-compact-mechanical-keyboard-delivers-perfect-fit-in-seriously-sleek-high-performance-typing-300025975.html">Do More With Less: All-New Das&nbsp;Keyboard 4C Compact Mechanical Keyboard Delivers Perfect Fit in Seriously Sleek, High-Performance Typing</a></ListItem>
                  <ListItem>March 25, 2014 - <a href="http://www.businesswire.com/news/home/20140325005684/en#.UzF3T9xur1o">New Das&nbsp;Keyboard 4 Amps Up the Volume, Drowns Out the Competition</a></ListItem>
                  <ListItem>July 31, 2013 - <a href="http://www.businesswire.com/news/home/20130731005930/en">Das&nbsp;Keyboard Launches World’s First RFID Blocking Bags</a>  </ListItem>
                  <ListItem>May 14, 2013 - <a href="http://www.businesswire.com/news/home/20130514005304/en/">Shhhhh - Das&nbsp;Keyboard Launches a Quiet Mechanical Keyboard</a></ListItem>
                  <ListItem>August 1, 2012 - <a href="http://www.businesswire.com/news/home/20120801005794/en">Das&nbsp;Keyboard Achieves #1 Ranking as Amazon’s Top Rated Computer Keyboard, Releases Refreshed Mechanical Keyboard Line</a></ListItem>
                  <ListItem>January 16, 2012 - <a href="http://www.businesswire.com/news/home/20120116005327/en/Das-Keyboard-Takes-Click-Clack-Mac">Das&nbsp;Keyboard Takes Its Click Clack to the Mac</a></ListItem>
                  <ListItem>January 20, 2011 - <a href="http://www.businesswire.com/news/home/20110120005449/en/Das-Keyboard-Adds-Flare-Color-Keycap-Set">Das&nbsp;Keyboard Adds Flare with Color Keycap Set for Gaming Enthusiasts</a></ListItem>
                  <ListItem>November 11, 2009 - <a href="http://www.hothardware.com/news/das-keyboard-presents-firstever-ultimate-typing-championship">‘Game On’ - Das&nbsp;Keyboard Presents First-Ever Ultimate Typing Championship</a></ListItem>
                  <ListItem>October 14, 2009 - <a href="http://www.slashgear.com/das-keyboard-unveils-model-s-keyboard-1460419/">Das&nbsp;Keyboard Launches New Model “S” to Enhance Typing Productivity; Market’s Most Advanced Keyboard Also Now Available in “Silent” Version</a></ListItem>
                  <ListItem>August 21, 2009 - <a href="http://www.prweb.com/releases/2009/08/prweb2768974.htm">Curing Das&nbsp;Keyboard’s Clicky Conundrum: Maker to Offer Earplugs as Peace Offering</a></ListItem>
                  <ListItem>July 14, 2009 - <a href="http://www.prweb.com/releases/keyboard/das_keyboard/prweb2638784.htm">Das&nbsp;Keyboard Offers Keycaps for Mac and Linux Buffs</a></ListItem>
                  <ListItem>November 11, 2008 - <a href="http://www.engadget.com/2008/11/11/das-keyboard-professional-hits-us-retail-stores/">Das&nbsp;Keyboard Professional Now Available in Retail Stores</a></ListItem>
                  <ListItem>July 18, 2008 - <a href="http://www.businesswire.com/news/home/20080714005281/en">Das&nbsp;Keyboard Takes Typing to Next Level with Release of Keyboards Designed to Provide Best Possible Typing Experience</a></ListItem>
                  <ListItem>July 18, 2005 - <a href="http://www.businesswire.com/news/google/20050718005513/en">UberGeek Alert: Das&nbsp;Keyboard Available for Elite Programmers (launch)</a></ListItem>
                </ul>

                <h3 className="sidebar-title mt-5">Das Keyboard logo and product photos</h3>

                <div className="row align-items-center">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/Das_Keyboard_logo_black.png" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="fw-bold mt-3 mt-sm-0 mb-0">Das Keyboard logo black</p>
                    <a href="/images/press-kit/Das_Keyboard_logo_black.png" title="PNG">PNG</a>
                  </div>
                </div>

                <div className="row align-items-center pt-3 pt-sm-5">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/Das_Keyboard_logo_white.png" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="fw-bold mt-3 mt-sm-0 mb-0">Das Keyboard logo white</p>
                    <a href="/images/press-kit/Das_Keyboard_logo_white.png" title="PNG">PNG</a>
                  </div>
                </div>

                {/* <!-- Das Keyboard 5QS --> */}
                <div className="row section-pad">
                  <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="/images/press-kit/5QS-mechanical-keyboard-Front_View_with_Palm_Rest.jpg" />
                  </div>
                  <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
                    <h3 className="text-red">Das Keyboard 5QS</h3>
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Front_View_with_Palm_Rest.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Angled_Top_Right_Side_View.jpg'
                      label="Front Side View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/5QS-mechanical-keyboard-Side_View_with_Palmrest.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard X50Q</h3>
                    <DownloadButton
                      href='/images/press-kit/X50_1_top_full.png'
                      label="Top View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_2_front_side_full.png'
                      label="Front Side View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_3_angle_side_full.png'
                      label="Side View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/X50_4_side_right_full.png'
                      label="Side View" ext="PNG"
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
                    <h3 className="text-red">Das Keyboard 4Q</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-front-view-press-kit.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-front-side-view-press-kit.jpg'
                      label="Front Side View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-rear-view-press-kit.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4q-side-view-press-kit.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard Prime 13</h3>
                    <DownloadButton
                      href='/images/press-kit/Prime-13-front-view.jpg'
                      label="Top View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/Prime-13-side-view.jpg'
                      label="Angled Side View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/Prime-13-diagonal-view.jpg'
                      label="Angled Front View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard 4 root</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-front-view.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-rear-view-press-kit.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-side-view-press-kit.jpg'
                      label="Side View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-root-usb-hub-view-press-kit.jpg'
                      label="USB 2.0 HUB View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard 4C TKL mechanical keyboard</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-front-view2.png'
                      label="Front View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-front-view2.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4C-professional-rear-view2.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4C-professional-side-view2.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard 4 Professional mechanical keyboard</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-front-view.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-rear-view.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-side-view-press-kit.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard 4 Ultimate mechanical keyboard</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-front-view-carousel-press-kit.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-front-view-carousel-press-kit.png'
                      label="Front View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-ultimate-rear-view-carousel-press-kit.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-ultimate-side-view-press-kit.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard 4 Professional for Mac mechanical keyboard</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-4-professional-for-mac-front-view.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-for-mac-rear-view.jpg'
                      label="Rear View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboad-4-professional-for-mac-side-view.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard Model S Professional</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-professional-front-view.png'
                      label="Front View" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-professional-side.jpg'
                      label="Side View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/dask-usb-hub-800_thumb.jpg'
                      label="USB 2.0 HUB View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/DasKeyboard-S-professional_front_view.png'
                      label="With Media Keys" ext="PNG"
                    />
                    <DownloadButton
                      href='/images/press-kit/DasKeyboard-S-professional_front_view_with_reflection.png'
                      label="With Media Keys Reflection" ext="PNG"
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
                    <h3 className="text-red">Das Keyboard Model S Ultimate</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-ultimate-front.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard_ult_hero.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard Model S Professional For Mac</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-s-professional-mac-front.jpg'
                      label="Front View" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-s-professional-mac-side.jpg'
                      label="Side View" ext="JPG"
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
                    <h3 className="text-red">Das Keyboard HackShield messenger bag</h3>
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-closed.jpg'
                      label="Closed Bag" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-opened.jpg'
                      label="Open Bag" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag.jpg'
                      label="Fidlock" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-angled-view-closed-with-background.jpg'
                      label="Rfid Blocking" ext="JPG"
                    />
                    <DownloadButton
                      href='/images/press-kit/daskeyboard-messenger-bag-on-shoulder.jpg'
                      label="Messenger View" ext="JPG"
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