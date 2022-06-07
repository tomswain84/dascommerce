/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Become a Reseller",
      bodyId: 'reseller',
      bodyClass: 'single-content',
    },
  }
}

const BecomeReseller: VFC = () => {
  return (
    <main className="content-container">
      <section className="bg-white section-pad">
        <div className="container">
          <div className="row">
            <div id="contentContainer" className="col">

              <h3 className="sidebar-title mt-5">Sell Das Keyboard products</h3>
              <p>We are always open to expand our reseller and distribution community. Let’s find out how we can work together.</p>

              <p>We need the following information: </p>

              <ul className="list-unstyled">
                <li>How did you hear about Das Keyboard?</li>
                <li>What is your business (please provide your website)?</li>
                <li>In which product are you interested?</li>
              </ul>

              <p>After you <a href="https://daskeyboard.mojohelpdesk.com/login/create_request" target="_blank" title="Submit a request" rel="noreferrer">submit a request</a> with the above information we will get in touch.</p>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default BecomeReseller