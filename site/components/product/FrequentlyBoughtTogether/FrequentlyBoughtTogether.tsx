/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from "react"
import s from './FrequentlyBoughtTogether.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Product } from "@interfaces/product"
import Link from "@components/core/Link"

interface Props {
  product: Product
}
const FrequentlyBoughtTogether: VFC<Props> = ({ product }) => {
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const getFrequentBoughtProducts = async (shopifyId: number) => {
    const query = new URLSearchParams()
    query.append('productId', shopifyId.toString())
    query.append('shop', 'das-keyboard.myshopify.com')
    query.append('marketCountry', 'US')
    query.append('marketCurrency', 'USD')
    query.append('activeCurrencyCode', 'USD')

    return await fetch(`https://www.codeblackbelt.com/json/preferences/frequently-bought-together.json?${query.toString()}`).then(res => res.json())
  }
  useEffect(() => {
    if (!product.shopifyId) return
    getFrequentBoughtProducts(product.shopifyId).then(res => {
      interface CBBProduct {
        compare_at_price: number
        price: number
        description: string
        id: number
        image_url: string
        name: string
        shop_currency_compare_at_price: string
        shop_currency_price: string
        url: string
        variant_id: number
        variant_sku: string
        vendor: string
        variants: Array<{
          buyable: true
          compare_at_price: number
          default_variant: boolean
          id: number
          image_url: string
          label: string
          price: number
          shop_currency_compare_at_price: string
          shop_currency_price: string
          sku: string
        }>
      }
      const { products: suggestedProducts } = res.preferences[0] as { products: CBBProduct[] }
      setSuggestions(suggestedProducts.map((item) => ({
        id: item.id,
        variantId: item.variant_id,
        shopifyId: item.id,
        name: item.name,
        slug: item.url,
        handle: item.url,
        collection: item.vendor,
        price: item.price,
        currency: '$',
        image: item.image_url,
        description: item.description,
        tags: [],
        keystroke: "",
        switch: "",
      } as unknown as Product)))
    })
  }, [product.shopifyId])

  const suggestionQuery = suggestions.map(item => `${item.variantId}:1`).join(',')
  const atcLink = `https://shop.daskeyboard.com/cart/${product.variantId}:1,${suggestionQuery}`

  return (
    <>
      <h3 className="sidebar-title">Frequently Bought Together</h3>
      <div className="d-flex px-3">
        <Link href={`/products/daskeyboard/${product.slug}`}>
          <img src={product.image} alt={product.name} className={s.thumb} />
        </Link>
        {suggestions.map(item => (
          <div key={item.id}>
            <FontAwesomeIcon icon='plus' size='sm' className="mx-3" />
            {/* <Link href={`/products/commerce/accessories/${item.slug}`}> */}
            <img src={item.image} alt={item.name} className={s['suggestion-thumb']} />
            {/* </Link> */}
          </div>
        ))}
      </div>
      <a className="btn btn-primary mt-4 ms-3" href={atcLink} target='_blank' rel="noreferrer">Add Selected to cart</a>
    </>
  )
}
export default FrequentlyBoughtTogether