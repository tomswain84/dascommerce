import { TranslateKey } from "lang/useTrans"

export interface Product {
  id: number,
  variantId?: number,
  shopifyId?: number,
  name: string,
  slug: string,
  handle: string,
  collection: string,
  originalPrice?: number,
  price: number,
  refurbished: {
    price: number,
    handle: string,
  }
  currency: string,
  image: string,
  description: TranslateKey,
  descriptionSmall: TranslateKey,
  tags: string[],
  keystroke: string,
  switch: string,
  specs?: Array<{ title: string, items: string[] }>,
  software?: boolean
}