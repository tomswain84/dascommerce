/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('privacy-policy'),
      description: 'This privacy policy tells you how we use personal information collected at this site.',
      bodyId: 'privacy-policy',
      bodyClass: 'single-content',
    },
  }
}

const PrivacyPolicy: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('privacy-policy')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <p dangerouslySetInnerHTML={$html('privacy-policy_introduction1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_introduction2')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_1')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_1')} />
                <h3 className="sidebar-title mt-5" dangerouslySetInnerHTML={$html('privacy-policy_subtitle_2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_2')} />
                <ul className="list-unstyled">
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.1')}</ListItem>
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.2')}</ListItem>
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.3')}</ListItem>
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.4')}</ListItem>
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.5')}</ListItem>
                  <ListItem increaseLineHeight>{say('privacy-policy_content_2.6')}</ListItem>
                </ul>

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_3')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_3.1')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_4')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.1')} />
                <ul className="list-unstyled">
                  <ListItem>{say('privacy-policy_content_4.1.1')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.2')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.3')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.4')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.5')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.6')}</ListItem>
                  <ListItem>{say('privacy-policy_content_4.1.7')}</ListItem>
                </ul>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.5')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_4.6')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_5')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5')} />
                <p className="strong fw-bold text-red" dangerouslySetInnerHTML={$html('privacy-policy_subtitle_5.1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.1')} />
                <ul className="list-unstyled">
                  <ListItem>{say('privacy-policy_content_5.1.1')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.1.2')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.1.3')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.1.4')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.1.5')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.1.6')}</ListItem>
                </ul>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.2')} />
                <ul className="list-unstyled">
                  <ListItem>{say('privacy-policy_content_5.2.1')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.2.2')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.2.3')}</ListItem>
                  <ListItem>{say('privacy-policy_content_5.2.4')}</ListItem>
                </ul>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.3')} />

                <p className="strong fw-bold text-red" dangerouslySetInnerHTML={$html('privacy-policy_subtitle_5.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.5')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.6')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.7')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.8')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.9')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.10')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.11')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.12')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.13')} />

                <p className="strong fw-bold text-red">{say('privacy-policy_subtitle_5.3')}</p>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.14')} />

                <p className="strong fw-bold text-red">{say('privacy-policy_subtitle_5.4')}</p>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.15')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.16')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_5.17')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_6')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6.1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6.3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_6.5')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_7')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.5')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.6')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_7.7')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_8')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8.1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8.3')} />

                <p className="strong fw-bold text-red">{say('privacy-policy_subtitle_8.1')}</p>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_8.5')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_9')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.1')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.2')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.5')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.6')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.7')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_9.8')} />

                <h3 className="sidebar-title mt-5">{say('privacy-policy_subtitle_10')}</h3>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_10')} />
                <p className="strong fw-bold text-red">{say('privacy-policy_subtitle_10.1')}</p>
                <ul className="list-unstyled">
                  <ListItem>{say('privacy-policy_content_10.1.1')}</ListItem>
                  <ListItem>{say('privacy-policy_content_10.1.2')}</ListItem>
                  <ListItem>{say('privacy-policy_content_10.1.3')}</ListItem>
                  <ListItem>{say('privacy-policy_content_10.1.4')}</ListItem>
                  <ListItem>{say('privacy-policy_content_10.1.5')}</ListItem>
                  <ListItem>{say('privacy-policy_content_10.1.6')}</ListItem>
                </ul>
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_10.2')} />

                <p className="strong fw-bold text-red" dangerouslySetInnerHTML={$html('privacy-policy_subtitle_10.3')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_10.3')} />

                <p className="strong fw-bold text-red" dangerouslySetInnerHTML={$html('privacy-policy_subtitle_10.4')} />
                <p dangerouslySetInnerHTML={$html('privacy-policy_content_10.4')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default PrivacyPolicy