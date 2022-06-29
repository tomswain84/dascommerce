/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "5 meta hacks of the week",
      bodyId: 'reseller',
      bodyClass: 'single-content',
    },
  }
}

const FiveMetaHacks: VFC = () => {
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

                <p className="mt-5">Hello,</p>
                <p>I am Daniel, founder of Das Keyboard. Each week, I discover and share 5 new hacks that engage the tech community and challenge the mind. These can be anything from apps that boost productivity, interesting quotes, life hacks, and other fascinating topics.</p>
                <p>If you’re interested in receiving these 5 new hacks, sign up here:</p>

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

                <p>
                  Do you have an interesting piece of information you would like to share?<br />
                  Your Meta Hack could be featured in one of our future emails. Whether it's a book, gadget, article, story, tip, news, or just interesting information - we want to hear from you! <a href="https://goo.gl/forms/wYyAEhXKBh8vmQ8S2" target='_blank' rel="noreferrer">Share your Meta Hack.</a>
                </p>

                <p>
                  Daniel, Founder & CEO<br />
                  Metadot / Das Keyboard / Mojo Helpdesk
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default FiveMetaHacks