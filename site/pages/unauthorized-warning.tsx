/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Unauthorized Dealer Warning",
      bodyId: 'unauthorized-dealer',
      bodyClass: 'single-content',
    },
  }
}

const UnauthorizedDealerWarning: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="Unauthorized Dealer Warning"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <p>Das Keyboard products are sold in the United States and internationally through a network of authorized dealers selected by Das Keyboard. These resellers have been chosen for their ability to properly represent Das Keyboard. </p>
                <p>Unfortunately, Das Keyboard products are sometimes sold by companies that are not authorized to do so. These unauthorized resellers do not purchase products directly from Das Keyboard, they acquire the goods from other sources. Due to this nature, Das Keyboard goods sold by unauthorized dealers are not entitled to Das Keyboard warranty coverage. We urge you to use caution when making a Das Keyboard purchase from an unauthorized reseller. </p>

                <h3>A note about Amazon.com</h3>
                <p>While Amazon is an authorized online dealer of Das Keyboard products, many resellers who sell through Amazon are not. When purchasing, it is important to note where the product is being "shipped from and sold by," which is stated clearly in the header for each product on Amazon.com. If it shipped and sold by a company that is not on our list, they are an unauthorized dealer. </p>

                <h3>A note about Ebay</h3>
                <p>While Das Keyboard uses the Ebay platform to sell refurbished models, we will never sell new products on Ebay. Please use caution when making a purchase on ebay.com as it is likely the products will not be covered by our warranty. If it shipped and sold by a company that is not on our list, they are an unauthorized dealer. </p>
                <p>To view a list of Das Keyboard’s authorized dealers please see the where to buy page.</p>
                <p>If you have any questions about any dealers or are wondering if a particular dealer is authorized, <a href="https://daskeyboard.mojohelpdesk.com/mytickets/create#/ticket-form-selection" target="_blank" rel="noreferrer">you can contact us before purchase</a>.</p>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default UnauthorizedDealerWarning