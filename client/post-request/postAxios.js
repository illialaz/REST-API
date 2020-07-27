const axios = require('axios')

(async () => {
  const response = await axios.post('https://api.randomservice.com/dog', {
    name: 'Roger', age: 8 
  }, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer 123abc456def'
    }
  )
  console.log(response.data)
})()