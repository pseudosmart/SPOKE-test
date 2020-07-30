require('jest-fetch-mock').enableMocks()
import graphQL from './graphQL'

test('it can send a request to the server', () => {
  fetch.mockResponseOnce(JSON.stringify({ data: {}}))

  return graphQL.query('{ getTraveller { id } }')
    .then(() => {
      expect(fetch).toMatchSnapshot()
    })
})
