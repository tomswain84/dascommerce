import PageTitle from "@components/core/PageTitle"
import Banner from "@components/section/Banner"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

const pageTitle = 'Das Keyboard - Mechanical switches Gamma Zulu'
export async function getStaticProps() {
  return {
    props: {
      title: pageTitle,
      bodyId: 'gamma-zulu-switch',
      bodyClass: 'product-page keyboards q-series',
    },
  }
}

const GammaZuluSwitch: VFC = () => {
  const { say, $html } = useTrans()
  const specTable = (
    <table className="table table-dark table-bordered">
      <thead>
        <tr>
          <th></th>
          <th className="text-end" style={{ fontSize: 11 }}>
            <span
              id="gamma-zulu-table-line-1-col-2"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("gamma-zulu-table-line-1-col-2")}</span>
          </th>
          <th className="text-end text-red" style={{ fontSize: 11 }}>
            <span
              id="gamma-zulu-table-line-1-col-3"
              metadot-translation=""
              className="ng-isolate-scope"
            >
              {say("gamma-zulu-table-line-1-col-3")}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "middle" }} className="title-line">
            <span
              id="x50-table-actuation"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-actuation")}</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-2mm"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-2mm")}</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-1point5mm"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >{say("x50-table-1point5mm")}</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-travel"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-travel")}</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-4mm"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-4mm")}</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-3point5mm"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >{say("x50-table-3point5mm")}</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-life"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-life")}</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-50million"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-50million")}</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-100million"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >{say("x50-table-100million")}</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-contact"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-contact")}</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-sigle-point"
              metadot-translation=""
              className="ng-isolate-scope"
            >{say("x50-table-sigle-point")}</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-double-point"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >{say("x50-table-double-point")}</span>
          </td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <>
      <PageTitle
        title={pageTitle}
        type='page'
      />
      <Banner
        sectionPad
        content={{
          title: say('gamma-zulu-page-title'),
          description: $html('gamma-zulu-subtitle').__html,
        }}
        image={{
          position: 'bottom',
          src: '/images/software/gamma-zulu-banner.jpeg',
          rounded: true,
        }}
      />

      <ProductFeatureGroup
        rows={[
          {
            type: 'switch',
          },
          {
            type: 'content',
            heading: say('gamma-zulu-brighter-rgb-title'),
            title: say('gamma-zulu-brighter-rgb-subtitle'),
            description: say('gamma-zulu-brighter-rgb-paragraph'),
            image: {
              position: 'left',
              src: '/images/gama-zulu-color-switch.jpg',
            }
          },
          {
            type: 'content',
            heading: say('gamma-zulu-custom-designed-title'),
            title: say('gamma-zulu-custom-designed-subtitle'),
            description: say('gamma-zulu-custom-designed-paragraph'),
            image: {
              position: 'left',
              src: '/images/software/gamma-zulu-switches-graph-invert.png',
            }
          },
          {
            type: 'content',
            heading: say('gamma-zulu-best-class-title'),
            title: say('gamma-zulu-best-class-subtitle'),
            description: say('gamma-zulu-best-class-paragraph'),
            extraElement: specTable,
            image: {
              position: 'left',
              src: '/images/software/switchdiagramB-B.png',
            }
          },
        ]}
      />

      <ProductVideo
        theme='dark'
        title={say('gamma-zulu-tuned-title')}
        description={`
          <strong class="text-red">${say('gamma-zulu-tuned-subtitle')}</strong>
          <br/>
          ${say('gamma-zulu-tuned-paragraph')}
        `}
        video={{
          src: 'https://emersya.com/showcase/ZMFZFFTAWF'
        }}
      />

      <RelatedProducts
        title="Q Series"
        series="Q"
        switch="GAMMA ZULU"
        className="text-center bg-gray-lighter"
      />
    </>
  )
}
export default GammaZuluSwitch