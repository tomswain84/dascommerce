import PageTitle from "@components/core/PageTitle"
import Banner from "@components/section/Banner"
import ProductFeatureGroup from "@components/section/ProductFeatureGroup"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
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
            >Standard mechanical switches*</span>
          </th>
          <th className="text-end text-red" style={{ fontSize: 11 }}>
            <span
              id="gamma-zulu-table-line-1-col-3"
              metadot-translation=""
              className="ng-isolate-scope"
            >
              Das&nbsp;Keyboard Gamma Zulu by Omron
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
            >Actuation point</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-2mm"
              metadot-translation=""
              className="ng-isolate-scope"
            >2.0 mm</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-1point5mm"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >1.5 mm</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-travel"
              metadot-translation=""
              className="ng-isolate-scope"
            >Total travel</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-4mm"
              metadot-translation=""
              className="ng-isolate-scope"
            >4.0 mm</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-3point5mm"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >3.5 mm</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-life"
              metadot-translation=""
              className="ng-isolate-scope"
            >Life span</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-50million"
              metadot-translation=""
              className="ng-isolate-scope"
            >50 Million</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-100million"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >100 Million</span>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: 'middle' }} className="title-line">
            <span
              id="x50-table-contact"
              metadot-translation=""
              className="ng-isolate-scope"
            >Contact type</span>
          </td>
          <td className="gamma-zulu-column">
            <span
              id="x50-table-sigle-point"
              metadot-translation=""
              className="ng-isolate-scope"
            >Single cross point</span>
          </td>
          <td className="gamma-zulu-column dk-5q-color">
            <span
              id="x50-table-double-point"
              metadot-translation=""
              className="ng-isolate-scope text-red"
            >Double cross point</span>
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
          title: 'Gamma Zulu',
          description: "The most advanced mechanical switches: by Das Keyboard with Omron"
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
            heading: '2x brighter: RGB+',
            title: 'Brilliant colors that are not washed out',
            description: 'Due to its enhanced brightness mode(*) and its modern switch design, the 5Q delivers 16.8M intense colors that are not washed out by daylight - a problem that most RGB keyboards suffer from.',
            descriptionHint: '* requires an USB 3.0 connection.',
            image: {
              position: 'left',
              src: '/images/gama-zulu-color-switch.jpg',
            }
          },
          {
            type: 'content',
            heading: 'Fine tuned for speed and comfort',
            title: 'You can tell a lot about a switch by their force curve',
            description: 'Gamma Zulus require 45 grams to actuate at 1.5 mm for effortless speed, and have a full travel of 3.5mm, the perfect middle ground for amazing feel and comfort.',
            image: {
              position: 'left',
              src: '/images/software/gamma-zulu-switches-graph-invert.png',
            }
          },
          {
            type: 'content',
            heading: 'Best in class',
            title: 'Technical specifications unmatched by anyone',
            description: `
              The Gamma Zulu mechanical switch sports a gold plated double cross point that ensures incredible reliability.
            `,
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
        title="Japanese precision, inside out"
        description={`
          <strong class="text-red">An interactive look inside</strong>
          <br/>
          Custom made by Omron (Japan) for the fastest and most comfortable typing experience. Go ahead, take a look at every angle of the Gamma Zulu switch, both inside and out.
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