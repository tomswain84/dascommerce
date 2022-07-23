/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('values'),
      description: 'We are a badass Company that makes badass products for badass customers: We Make Stunning Products which stand for No-compromise and overachievers.',
      bodyId: 'values',
      bodyClass: 'single-content',
    },
  }
}

const Values: VFC<{}> = () => {
  const { say, $html } = useTrans()
  return (
    <>
      <PageTitle
        title={say('values')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>{say('our_story_title')}</h2>
                <h3 className="text-red mt-0">{say('our_story_sub_title')}</h3>
                <p>{say('next level content')}</p>

                <div className="row mt-sm-4 mt-md-5">
                  <div className="col-md">
                    <h3>{say('our_story_value_1_title')}</h3>
                    <ul className="list-unstyled">
                      <ListItem>{say('our_story_value_1_item_1')}</ListItem>
                      <ListItem>{say('our_story_value_1_item_2')}</ListItem>
                      <ListItem>{say('our_story_value_1_item_3')}</ListItem>
                      <ListItem>{say('our_story_value_1_item_4')}</ListItem>
                    </ul>

                    <h3>{say('our_story_value_2_title')}</h3>
                    <ul className="list-unstyled">
                      <ListItem>{say('our_story_value_2_item_1')}</ListItem>
                    </ul>
                  </div>
                  <div className="col-md">
                    <img className="img-fluid rounded mt-3" src="/images/img-home-switches.png" alt="Long lasting, durable switches." />
                  </div>
                </div>

                <div className="row mt-sm-4 mt-md-5">
                  <div className="col-md order-md-1">
                    <h3>{say('our_story_value_3_title')}</h3>
                    <ul className="list-unstyled">
                      <ListItem>{say('our_story_value_3_item_1')}</ListItem>
                      <ListItem>{say('our_story_value_3_item_2')}</ListItem>
                    </ul>

                    <h3>{say('our_story_value_4_title')}</h3>
                    <ul className="list-unstyled">
                      <ListItem>{say('our_story_value_4_item_1')}</ListItem>
                      <ListItem>{say('our_story_value_4_item_2')}</ListItem>
                      <ListItem>{say('our_story_value_4_item_3')}</ListItem>
                      <ListItem>{say('our_story_value_4_item_4')}</ListItem>
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