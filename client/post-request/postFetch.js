(async () => {
  const response = await fetch('https://api.randomservice.com/dog', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer 123abc456def'
    },
    body: {
      name: 'Roger',
      age: 8
    }
  })
  console.log(response.data)
})()