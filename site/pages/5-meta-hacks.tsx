/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('5-meta-hacks', true),
      description: 'Every week, Daniel, founder of Das Keyboard, shares the 5 hacks he recently discovered. "These can be productivity apps, life hacks, quotes that make me think or really anything that I find interesting.',
      image: '/images/pages/5-meta-hacks-wide.png',
      bodyId: 'reseller',
      bodyClass: 'single-content',
    },
  }
}

const FiveMetaHacks: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title="5 meta hacks of the week"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container" style={{ maxWidth: 666 }}>
            <div className="row">
              <div id="contentContainer" className="col">
                <img src="/images/pages/5-meta-hacks-wide.png" alt="5 meta hacks" className="img-fluid" />

                <p className="mt-5" dangerouslySetInnerHTML={$html('hello')} />
                <p dangerouslySetInnerHTML={$html('content-5weeklymetahacks')} />
                <p dangerouslySetInnerHTML={$html('signup-5weeklymetahacks')} />

                <form
                  action="https://daskeyboard.us5.list-manage.com/subscribe/post?u=56e3c495115ea26f98ce8d429&id=80814cfb3c"
                  method="post"
                  target="_blank"
                  noValidate
                  className="form-group mb-4"
                >
                  <div className="row">
                    <div className="col-xs-12 col-sm-10">
                      <div className="input-group input-group-lg">
                        <input type="email" name="EMAIL" className="form-control input-lg" placeholder="myemail@example.com" />
                        <button type="submit" name="subscribe" className="btn btn-primary">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </form>

                <p dangerouslySetInnerHTML={$html('submit-meta-hack')} />

                <p dangerouslySetInnerHTML={$html('CEOsignature-5weeklymetahacks')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default FiveMetaHacks