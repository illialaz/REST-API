const axios = require('./node_modules/axios')

(async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all')
  for (const breed in response.data.message) {
    console.log(breed)
  }
})()