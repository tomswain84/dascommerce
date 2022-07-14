/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import Banner from "@components/section/Banner"
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('typefaster'),
      bodyId: 'type-faster',
      bodyClass: 'single-content',
    },
  }
}

const Typefaster: VFC<{}> = () => {
  const { say } = useTrans()
  return (
    <>
      <PageTitle
        title={say('typefaster')}
        type='category'
      />
      <main className="content-container mx-auto" style={{ maxWidth: 1024 }}>
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>{say('typefaster_first_title')}</h2>
                <p>{say('typefaster-introduction')}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <Banner
            content={{
              title: say('typefaster_title_1'),
              textAlign: 'left',
              description: say('typefaster_content_1'),
            }}
            image={{
              position: 'right',
              src: '/images/typefaster/mechanical-keyboard-clicky.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: say('typefaster_title_2'),
              textAlign: 'left',
              description: say('typefaster_content_2'),
            }}
            image={{
              position: 'left',
              src: '/images/typefaster/typrx-typing-races.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: say('typefaster_title_3'),
              textAlign: 'left',
              description: say('typefaster_content_3'),
            }}
            image={{
              position: 'right',
              src: '/images/typefaster/blank-mechanical-keyboard.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: say('typefaster_title_4'),
              textAlign: 'left',
              description: say('typefaster_content_4'),
            }}
            image={{
              position: 'left',
              src: '/images/typefaster/bad-desk-posture.png',
              className: 'w-100'
            }}
          />

          <p className="my-5">{say('typefaster_content_5')}</p>
        </div>
      </main>
    </>
  )
}
export default Typefaster