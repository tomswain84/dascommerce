import { VFC } from "react"
import ProductCard from "@components/product/ProductCard"
import filters from '@data/filters.json'
import PageTitle from "@components/core/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "@components/core/Link"
import { Product } from "@interfaces/product"
import Schema from "@components/core/Schema"
import { PageProps } from "@interfaces/pageProps"

interface Props {
  pageProps: PageProps
  title: string
  products: Product[]
  isRefurbised?: boolean
}

const ProductList: VFC<Props> = ({ title, products, isRefurbised, pageProps: { query, fullUrl, baseUrl, description } }) => {
  if (!filters.length) return null
  const { filter } = query
  // find current filter
  const currentFilter = filters.find(f => f.filter === filter)
  // list products by current filter
  const currentProducts = products.filter(p => {
    if (filter === 'bestsellers') {
      return p.tags.includes('bestsellers')
    }
    return !currentFilter || currentFilter.tag === 'all' || p.tags.includes(currentFilter.tag)
  })
  const schemaPageName = `${currentFilter?.name + ' '}${isRefurbised ? 'Refurbished ' : ''}Mechanical Keyboards`
  return (
    <>
      {/* breadcrumb schema */}
      <Schema data={{
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: {
              '@type': 'Thing',
              '@id': baseUrl,
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: schemaPageName,
            item: {
              '@type': 'Thing',
              '@id': fullUrl,
            }
          }
        ]
      }} />
      {/* item list schema */}
      <Schema data={{
        '@type': 'ItemList',
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            name: product.name,
            image: {
              '@type': 'ImageObject',
              url: `${baseUrl}${product.image}`,
            },
            description: product.description,
            offers: {
              '@type': 'Offer',
              priceCurrency: product.currency,
              price: product.price,
              itemCondition: isRefurbised ? 'http://schema.org/RefurbishedCondition' : 'http://schema.org/NewCondition',
              availability: 'http://schema.org/InStock',
              url: `${baseUrl}/products/daskeyboard/${isRefurbised ? 'refurbished-' : ''}${product.slug}`,
            },
          },
        }))
      }} />
      {/* offer catalog */}
      <Schema data={{
        '@type': 'OfferCatalog',
        name: schemaPageName,
        description,
        url: fullUrl,
        numberOfItems: products.length,
      }} />
      <PageTitle
        title={title}
        type='category'
      />
      <section id="filterKeyboards" className="bg-white z-index-3">
        <div className="container-boxed">
          <nav className="navbar navbar-expand-lg">
            <h4 className="navbar-brand text-red m-0">Filter:</h4>
            <a className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon='ellipsis' className="text-gray-dark" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {filters.map(({ name, tag, filter }) => (
                  <li className="nav-item m-1" key={tag}>
                    <Link
                      className={`dropdown-item tag-${tag} ${filter === currentFilter?.filter ? 'active' : ''}`}
                      href={`/products/category/${isRefurbised ? 'refurbished-' : ''}mechanical-keyboards?filter=${filter}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <main id="hideThis" className="content-wrap">
        <section id="categoryBestSellers" className="bg-gray-lighter section-pad">
          <div className="container-boxed">
            <div className="row">
              <div className="col-lg-8">
                <figure className="heading mt-0">
                  <figcaption>
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    {currentFilter && currentFilter.filter !== 'all' && (
                      <div className="filter-text d-flex align-items-center justify-content-between">
                        <h3 className={`my-3 ${currentFilter?.tag || ''}`} >
                          <span className="text-red">Filter: </span>
                          {currentFilter?.name}
                        </h3>
                        <Link
                          className="btn btn-outline-primary text-gray-dark"
                          href={`/products/category/${isRefurbised ? 'refurbished-' : ''}mechanical-keyboards?filter=all`}
                          title="Clear Filter"
                        >
                          Clear Filter
                          <FontAwesomeIcon icon='times' className="ms-2" />
                        </Link>
                      </div>
                    )}
                  </figcaption>
                  {isRefurbised ? (
                    <p className="alert alert-warning mt-3 fw-bold small fst-italic">
                      All Certified Refurbished orders are non-refundable. Certified Refurbished products are pre-owned, certified to be free of defects, and come with a 30-day limited hardware warranty. If the product is defective or does not work, a replacement will be sent. Please refer to our guarantee page at <Link href='/guarantee' className="text-black">www.daskeyboard.com/guarantee</Link>
                    </p>
                  ) : (
                    <p className="mt-3">
                      Das Keyboard uses premium materials and award-winning technology to deliver an unmatched typing experience. Every new mechanical keyboard comes with free shipping inside the continental US, a 30-day money back guarantee and a 1-year limited warranty.
                    </p>
                  )}
                </figure>
              </div>
            </div>
            <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4">
              {/* product list */}
              {currentProducts.map((product, index) => (
                <ProductCard key={index} product={product} isRefurbised={isRefurbised} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default ProductList
