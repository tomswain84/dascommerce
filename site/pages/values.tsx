/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { useEffect, VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "DAS KEYBOARD VALUES",
      bodyId: 'values',
      bodyClass: 'single-content',
    },
  }
}

const Values: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="DAS KEYBOARD VALUES"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>What Are We About?</h2>
                <h3 className="text-red mt-0">We bring the typing experience to the next level</h3>
                <p>We are a badass company that makes badass products for badass customers: We make stunning products which stand for no-compromise and overachievers. We are quality obsessed and we develop all our products with:</p>

                <div className="row mt-sm-4 mt-md-5">
                  <div className="col-md">
                    <h3>Premium materials: Quality starts with our product components</h3>
                    <ul className="list-unstyled">
                      <ListItem>Gold-plated key switches</ListItem>
                      <ListItem>N-key rollover on all keyboards</ListItem>
                      <ListItem>Aluminum construction details</ListItem>
                      <ListItem>Extra long USB cable</ListItem>
                    </ul>

                    <h3>Durable construction: Built to last, for even the heaviest of typists and gamers</h3>
                    <ul className="list-unstyled">
                      <ListItem>Customers have said that our products are, “so tough, they could be used as a weapon of choice against zombies- to not only defend yourself but also to write about the experience afterwards”</ListItem>
                    </ul>
                  </div>
                  <div className="col-md">
                    <img className="img-fluid rounded mt-3" src="/images/img-home-switches.png" alt="Long lasting, durable switches." />
                  </div>
                </div>

                <div className="row mt-sm-4 mt-md-5">
                  <div className="col-md order-md-1">
                    <h3>Superior experience: We know every detail matters</h3>
                    <ul className="list-unstyled">
                      <ListItem>Every element of each product is taken into consideration - we’ve held full staff meetings to test the precise feel, sound, and reactivity of a single keystroke until we are all completely satisfied</ListItem>
                      <ListItem>High quality look, feel, touch, sound, experience - always</ListItem>
                    </ul>

                    <h3>We fearlessly push the limits with products that inspire:</h3>
                    <ul className="list-unstyled">
                      <ListItem>We created a new market with a blank keyboard</ListItem>
                      <ListItem>We added a magnetic ruler as a keyboard foot bar</ListItem>
                      <ListItem>We added an over-sized volume knob to our keyboards</ListItem>
                      <ListItem>We were the first company (that we know of) to add a 3.0 USB hub to our keyboards</ListItem>
                    </ul>
                  </div>
                  <div className="col-md">
                    <img className="img-fluid rounded mt-3" src="/images/img-values-computer.jpg" alt="Image of Computer" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Values