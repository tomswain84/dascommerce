import Link from "@components/core/Link"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Education Program",
      bodyId: 'education-program',
      bodyClass: 'single-content',
    },
  }
}

const EducationProgram: VFC = () => {
  return (
    <>
      <PageTitle
        title="Education Program"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">

                <h3 className="sidebar-title mt-5">
                  <FontAwesomeIcon icon="graduation-cap" className="me-2" />
                  The Das Keyboard education program
                </h3>
                <p>Many schools and universities have found that our blank keyboard helps students and teachers in several ways:</p>
                <ul className="list-unstyled">
                  <ListItem>Assists students in learning and retaining keyboard knowledge</ListItem>
                  <ListItem>Increases speed and accuracy in typing</ListItem>
                  <ListItem>Increases productivity, therefore it decreases the time to complete computer assignments</ListItem>
                  <ListItem>Robust keyboard quality protects your investment</ListItem>
                  <ListItem>Education discount program</ListItem>
                </ul>

                <p>In order to help educational institutions acquire our products, we set up a <a href="https://daskeyboard.mojohelpdesk.com/mytickets/create#/ticket-form/19790" target="_blank" rel="noreferrer">special pricing program</a> for the education market. Individual students and faculty members are eligible as well. Limited to one coupon per student or faculty member per keyboard.</p>

                <p>Here are the details of our educational discount program:</p>
                <ul className="list-unstyled">
                  <ListItem>20% off a new keyboard plus free ground shipping (exceptions apply for Alaska and Hawaii)</ListItem>
                  <ListItem>Discount applies to all current selling models purchased directly from www.daskeyboard.com</ListItem>
                  <ListItem>Does not apply to refurbished keyboards, accessories, models on sale or part of a promotion</ListItem>
                </ul>

                <p><a href="https://daskeyboard.mojohelpdesk.com/mytickets/create#/ticket-form/19790" target="_blank" rel="noreferrer">Contact us</a> with your eligibility questions, and we’ll tell you how to reap the benefits of being a student or educator. The educational discount program is only available to U.S. residents as we do not ship internationally. If you would like to buy a our products outside the USA <Link href="/where-to-buy" title="Where to buy">visit our list of international resellers</Link>.</p>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default EducationProgram