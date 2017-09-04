const $titleInput = document.getElementById('js-title-input')
const $bodyInput = document.getElementById('js-body-input')
const $button = document.getElementById('js-button')
const $id = document.getElementById('js-id')
const $title = document.getElementById('js-title')
const $body = document.getElementById('js-body')


function sendPOSTRequest() {
  const title = $titleInput.value
  const body = $bodyInput.value

  if (!title || !body) return

  const url = 'https://jsonplaceholder.typicode.com/posts/'
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })
  }


  fetch(url, options)
    .then(response => response.json())
    .then(post => {
      console.log(post)
      $id.innerText = post.id
      $title.innerText = post.title
      $body.innerText = post.body
    })
    .catch(error => {
      console.log(error)
      $title.innerText = 'ERROR'
      $body.innerText = 'Something went wrong'
    })
}


$button.addEventListener('click', sendPOSTRequest)
