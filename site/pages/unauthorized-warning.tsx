/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('unauthorized-warning_title'),
      bodyId: 'unauthorized-dealer',
      bodyClass: 'single-content',
    },
  }
}

const UnauthorizedDealerWarning: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('unauthorized-warning_title')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <p dangerouslySetInnerHTML={$html('unauthorized-warning_content_1')} />
                <div dangerouslySetInnerHTML={$html('unauthorized-warning_content_2')} />
                <p dangerouslySetInnerHTML={$html('unauthorized-warning_content_3')} />
                <p dangerouslySetInnerHTML={$html('unauthorized-warning_content_4')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default UnauthorizedDealerWarning