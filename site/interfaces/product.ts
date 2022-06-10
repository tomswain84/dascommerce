export interface Product {
  id: number,
  name: string,
  slug: string,
  collection: string,
  price: number,
  currency: string,
  image: string,
  description: string,
  tags: string[],
  keystroke: string,
  switch: string,
  specs?: Array<{ title: string, items: string[] }>
}