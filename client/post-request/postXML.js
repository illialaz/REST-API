const data = JSON.stringify({
  name: 'Roger',
  age: 8
})

const xhr = new XMLHttpRequest()
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText)
  }
})

xhr.open('POST', 'https://api.randomservice.com/dog')
xhr.setRequestHeader('content-type', 'application/json')
xhr.setRequestHeader('authorization', 'Bearer 123abc456def')

xhr.send(data)