import Link from "@components/core/Link"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('education-program_title'),
      bodyId: 'education-program',
      bodyClass: 'single-content',
    },
  }
}

const EducationProgram: VFC = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('education-program_title')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">

                <h3 className="sidebar-title mt-5">
                  <FontAwesomeIcon icon="graduation-cap" className="me-2" />
                  {say('education-program_title_1')}
                </h3>
                <div dangerouslySetInnerHTML={$html('education-program_content_1')} />

                <h3 className="sidebar-title mt-5" dangerouslySetInnerHTML={$html('education-program_title_2')} />
                <p dangerouslySetInnerHTML={$html('education-program_content_2')} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default EducationProgram