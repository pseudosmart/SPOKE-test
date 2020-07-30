const IMAGES = `
  images(first: 1) {
    edges {
      node {
        originalSrc
      }
    }
  }
`

const PRICE_RANGE = `
  priceRange {
    maxVariantPrice {
      amount
    }
  }
`

export const PRODUCTS = `{
  products(first: 50, query:"product_type:Heroes OR product_type:Sharps OR product_type:Polo") {
    edges {
      node {
        id,
        ${IMAGES}
        productType,
        title,
        tags,
        ${PRICE_RANGE}
        updatedAt,
      }
    }
  }
}
`
