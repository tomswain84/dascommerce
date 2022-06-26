export const convertProductVariantId = (gId: string | number) => {
  return Buffer.from(`${gId}`, 'base64').toString('ascii').replace('gid://shopify/ProductVariant/', '')
}

export const convertProductId = (gId: string | number) => {
  return Buffer.from(`${gId}`, 'base64').toString('ascii').replace('gid://shopify/Product/', '')
} 