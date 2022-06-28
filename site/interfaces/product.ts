export interface Product {
  id: number,
  variantId?: number,
  shopifyId?: number,
  name: string,
  slug: string,
  handle: string,
  collection: string,
  price: number,
  refurbished: {
    price: number,
    handle: string,
  }
  currency: string,
  image: string,
  description: string,
  tags: string[],
  keystroke: string,
  switch: string,
  specs?: Array<{ title: string, items: string[] }>,
  software?: boolean
}