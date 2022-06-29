/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import { useEffect, VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "WIN A FREE DAS KEYBOARD",
      bodyId: 'giveaway',
      bodyClass: 'single-content',
    },
  }
}

const Giveaway: VFC<{}> = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widget.gleamjs.io/e.js"
    script.async = true
    document.body.appendChild(script)
  })
  return (
    <>
      <PageTitle
        title="WIN A FREE DAS KEYBOARD"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col text-center">
                <h2>Win a FREE Das Keyboard</h2>
                <p>One lucky winner subscribed on our mailing list each month will be receiving a FREE Das Keyboard of his or her choice!</p>
                <p>After signup, check your email and whitelist Das Keyboard.</p>
                <p className="mb-5">Extra entries can be earned by following us on the social media channels below. Check back on this page for the name of each monthly winner.</p>

                <a className="e-widget no-button generic-loader" href="https://gleam.io/sMrvH/july-2022-das-keyboard-monthly-giveaway" rel="nofollow">July 2022 Das Keyboard Monthly Giveaway</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Giveaway