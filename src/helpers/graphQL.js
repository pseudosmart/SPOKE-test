import { PRODUCTS } from '../constants/graphQLFragments'

export function query() {
  return fetch('https://spoke-3.myshopify.com/api/2020-04/graphql.json', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '2dc239eb7f8edb6219b5abc7bc0bc361'
    },
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify({ query: PRODUCTS })
  }).then(res => res.json())
}

export default {
  query
}
