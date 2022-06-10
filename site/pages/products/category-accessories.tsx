import type { VFC } from "react"
import PageTitle from "@components/core/PageTitle"
import accessories from '@data/accessories.json'
import AccessoryCard from "@components/accessory/AccessoryCard"

export async function getStaticProps() {
  return {
    props: {
      title: 'Keyboard Accessories',
      bodyId: 'keyboardAccessories',
      bodyClass: 'product-listing accessories',
    },
  }
}

const CategoryAccessories: VFC = () => {
  const keyCaps = accessories.filter(accessory => accessory.category === 'keycap-sets')
  const palmRests = accessories.filter(accessory => accessory.category === 'palm-rests')
  const keyboardParts = accessories.filter(accessory => accessory.category === 'keyboard-parts')
  const mousePads = accessories.filter(accessory => accessory.category === 'mouse-pads')
  const warehouseClearance = accessories.filter(accessory => accessory.category === 'warehouse-clearance')
  return (
    <>
      <PageTitle
        title="Keyboard Accessories"
        type="category"
      />
      <main id="hideThis" className="content-wrap">
        <section id="keycaps" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="sidebar-title">Keycap Sets</h3>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {keyCaps.map((item) => (
                <div key={item.id} className="col">
                  <AccessoryCard accessory={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="palmRests" className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="sidebar-title">Palm Rests</h3>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {palmRests.map((item) => (
                <div key={item.id} className="col">
                  <AccessoryCard accessory={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="parts" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="sidebar-title">Keyboard Parts</h3>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {keyboardParts.map((item) => (
                <div key={item.id} className="col">
                  <AccessoryCard accessory={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="mousePads" className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="sidebar-title">Mouse Pads</h3>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {mousePads.map((item) => (
                <div key={item.id} className="col">
                  <AccessoryCard accessory={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="warehouseClearance" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="sidebar-title">Warehouse Clearance</h3>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {warehouseClearance.map((item) => (
                <div key={item.id} className="col">
                  <AccessoryCard accessory={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default CategoryAccessories