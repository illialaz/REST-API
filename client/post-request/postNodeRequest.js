const request = require('request')

const options = {
  method: 'POST',
  url: 'https://api.randomservice.com/dog',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer 123abc456def'
  },
  body: { name: 'Roger', age: 8 },
  json: true
}

request(options, (error, response, body) => {
  if (error) throw new Error(error)

  console.log(body)
})