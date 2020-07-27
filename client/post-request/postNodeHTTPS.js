const http = require('https')

const options = {
  method: 'POST',
  hostname: 'api.randomservice.com',
  port: null,
  path: '/dog',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer 123abc456def',
    'content-length': '32'
  }
}

const req = http.request(options, res => {
  const chunks = []

  res.on('data', chunk => {
    chunks.push(chunk)
  })

  res.on('end', () => {
    const body = Buffer.concat(chunks)
    console.log(body.toString())
  })
})

req.write(JSON.stringify({ name: 'Roger', age: 8 }))
req.end()