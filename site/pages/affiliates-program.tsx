/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('affiliates-program'),
      bodyId: 'affiliate-program',
      bodyClass: 'single-content',
    },
  }
}

const AffiliatesProgram: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title="AFFILIATE PROGRAM"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>{say('affiliates-program-subtitle-1')}</h2>
                <p dangerouslySetInnerHTML={$html('affiliates-program-content-1')} />

                <h3>{say('affiliates-program-subtitle-2')}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: $html('affiliates-program-content-2').__html.replace(/\<li\>/g, '<li class="mt-3">')
                  }}
                />

                <h3>{say('affiliates-program-subtitle-3')}</h3>
                <ul className="list-unstyled">
                  <ListItem>Orders will lock in 30-days</ListItem>
                  <ListItem>The order value does not include shipping or tax</ListItem>
                  <ListItem>The order value is the actual sale price</ListItem>
                  <ListItem>Commissions for returns, refunds and voided orders will be canceled if they occur</ListItem>
                  <ListItem>Paid search brand bidding is not allowed</ListItem>
                </ul>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default AffiliatesProgram