import type { VFC } from "react"
import KeyboardCategories from "@components/collection/KeyboardCategories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "@components/core/Link"
import products from '@data/products.json'
import ProductCard from "@components/product/ProductCard"
import { Product } from "@interfaces/product"
import AccessoryCategories from "@components/collection/AccessoryCategories"
import swags from '@data/swags.json'
import AccessoryCard from "@components/accessory/AccessoryCard"
import { Accessory } from "@interfaces/accessory"

const Products: VFC = () => {
  const bestSellingProducts = products.filter(prod => prod.tags.includes('bestsellers'))
  return (
    <>
      <main className="content-wrap">
        <section id="categoryKeyboards" className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row align-items-center justify-content-between">
              <div className="col">
                <figure className="heading mt-0">
                  <figcaption>
                    <h1>
                      <small>Mechanical</small>
                      <br />Keyboards
                    </h1>
                  </figcaption>
                </figure>
              </div>
              <div className="col d-flex">
                <Link className="btn btn-outline-primary text-gray-dark ms-auto" href="/products/category/mechanical-keyboards.php?filter=all" title="Shop All">
                  Shop All
                  <FontAwesomeIcon icon="plus" className="ms-2" />
                </Link>
              </div>
            </div>
            <KeyboardCategories />
          </div>
        </section>
        <section id="categoryBestSellers" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col">
                <figure className="heading mt-0">
                  <figcaption>
                    <h1>
                      <small>Best</small>
                      <br />Sellers
                    </h1>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div id="BestSellers" className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 best-sellers product-cards">
              {bestSellingProducts.map(product => (
                <div key={product.id} className="col supercharged aluminum for-pc">
                  <ProductCard product={product as Product} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="categoryAccessories" className="bg-white section-pad">
          <div className="container-boxed">
            <div className="row align-items-center justify-content-between">
              <div className="col">
                <figure className="heading mt-0">
                  <figcaption>
                    <h1>
                      <small>Keyboard</small>
                      <br />Accessories
                    </h1>
                  </figcaption>
                </figure>
              </div>
              <div className="col d-flex">
                <Link className="btn btn-outline-primary text-gray-dark ms-auto" href="/products/category/accessories" title="Shop All">
                  Shop All
                  <FontAwesomeIcon icon='plus' className="ms-2" />
                </Link>
              </div>
            </div>
            <AccessoryCategories />
          </div>
        </section>
        <section id="swag" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col">
                <figure className="heading mt-0">
                  <figcaption>
                    <h1>
                      <small>Das</small>
                      <br />Swag
                    </h1>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 product-cards">
              {swags.map(swag => (
                <div key={swag.id} className="col">
                  <AccessoryCard accessory={swag as Accessory} />
                </div>
              ))}

              <div className="col">
                {/* <!-- Warehouse Clearance - The Click Magnet T-shirt -->
                            <?php include '../products/product-details/swag/details-the-click-magnet-t-shirt.php';?>
                            <!-- Product Card -->
                            <?php include '../parts/part-accessories-card.php';?> */}
              </div>

              <div className="col">
                {/* <!-- The Badass T-shirt -->
                            <?php include '../products/product-details/swag/details-the-bad-ass-t-shirt.php';?>
                            <!-- Product Card -->
                            <?php include '../parts/part-accessories-card.php';?> */}
              </div>

              <div className="col">
                {/* <!-- Das Grizzly T-shirt -->
                            <?php include '../products/product-details/swag/details-das-grizzly.php';?>
                            <!-- Product Card -->
                            <?php include '../parts/part-accessories-card.php';?> */}
              </div>

              <div className="col">
                {/* <!-- Warehouse Clearance - Das Keyboard Stainless Steel Tumbler -->
                            <?php include '../products/product-details/swag/details-das-keyboard-stainless-steel-tumbler.php';?>
                            <!-- Product Card -->
                            <?php include '../parts/part-accessories-card.php';?> */}
              </div>

              <div className="col">
                {/* <!-- Das Keyboard 4-Piece Stone Coaster Set -->
                            <?php include '../products/product-details/swag/details-das-keyboard-4-piece-stone-coaster-set.php';?>
                            <!-- Product Card -->
                            <?php include '../parts/part-accessories-card.php';?> */}
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Products