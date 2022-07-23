/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('become-a-reseller_title'),
      description: 'Das Keyboard is expanding the global reseller and distributor community. Learn more about how we can work together.',
      bodyId: 'reseller',
      bodyClass: 'single-content',
    },
  }
}

const BecomeReseller: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('become-a-reseller_title')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h3 className="sidebar-title mt-5">{say('become-a-reseller_subtitle')}</h3>
                <div dangerouslySetInnerHTML={$html('become-a-reseller_content')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default BecomeReseller