/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Do not sell my personal information",
      bodyId: 'ccpa-opt-out',
      bodyClass: 'single-content',
    },
  }
}

const CcpaOptOut: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="Do not sell my personal information"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>Do not sell my personal information</h2>
                <p className="strong fw-bold text-red">Your rights under the California Consumer Privacy Act</p>
                <p className="mt-2">The California Consumer Privacy Act (CCPA) provides you with rights regarding how your data or personal information is treated. Under the legislation, California residents can choose to opt out of the “sale” of their personal information to third parties. Based on the CCPA definition, “sale” refers to data collection for the purpose of creating advertising and other communications. <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" title="Learn more about CCPA and your privacy rights" rel="noreferrer">Learn more about CCPA and your privacy rights</a>.</p>

                <h3 className="sidebar-title">How to opt out</h3>
                <p>By clicking on the link below, we will no longer collect or sell your personal information. This applies to both third-parties and the data we collect to help personalize your experience on our website or through other communications. For more information, view our privacy policy.</p>
                <p>To be eligible to opt-out, you must be browsing from California.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default CcpaOptOut