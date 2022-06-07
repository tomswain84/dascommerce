/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "AFFILIATE PROGRAM",
      bodyId: 'affiliate-program',
      bodyClass: 'single-content',
    },
  }
}

const AffiliatesProgram: VFC<{}> = () => {
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
                <h2>Become a Das Keyboard Affiliate</h2>
                <p>If you are a technology enthusiast, social media influencer, or if you manage a website or blog with a tech-savvy audience, then sign up with Rakuten to join our affiliate program and start making money promoting Das Keyboard’s premium products today. With unmatched quality, a competitive price point, an extremely loyal customer base, and a very high average order value, it’s easy! With a base rate of 6%, and bonuses and bounties throughout the year, your audience and bank account will thank you.</p>

                <h3>Terms</h3>
                <ol>
                  <li>
                    Create a Rakuten Linkshare affiliate network account<br />
                    <a href="https://signup.linkshare.com/publishers/registration/landing?mid=38366" target="_blank" title="Sign Up" rel="noreferrer">Sign up</a> and once you complete the signup process, it will automatically redirect you to the Das Keyboard registration page.
                  </li>
                  <li className="mt-3">
                    Already a Rakuten Affiliate?<br />
                    <a href="https://login.linkshare.com/sso/login?service=http%3A%2F%2Fcli.linksynergy.com%2Fcli%2Fpublisher%2Fprograms%2Fadvertiser_detail.php%3Foid%3D%5B461141%5D%26mid%3D%5B38366%5D%26controls%3D1%3A1%3A0%3A3%3A1%3A1" target="_blank" title="Sign Up" rel="noreferrer">Join our program!</a>
                  </li>
                  <li className="mt-3">
                    Promote<br />
                    Promote our high-performance mechanical keyboards to your audience through links or banners.
                  </li>
                  <li className="mt-3">
                    Earn<br />
                    Start earning 6% on all orders you refer to Das Keyboard.
                  </li>
                </ol>

                <h3>Details</h3>
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