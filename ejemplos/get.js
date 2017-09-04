const $input = document.getElementById('js-input')
const $button = document.getElementById('js-button')
const $title = document.getElementById('js-title')
const $body = document.getElementById('js-body')


function sendGETRequest() {
  const postId = $input.value;
  if (!postId) return;

  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

  fetch(url)
    .then(res => {
      if (res.status === 404) {
        return Promise.resolve({
          title: 'Error',
          body: 'El ID no existe'
        });
      }

      return res.json()
    })
    .then(post => {
      console.log(post)
      $title.innerText = post.title
      $body.innerText = post.body
    })
    .catch(error => {
      $title.innerText = 'ERROR'
      $body.innerText = 'Algo salio mal.'
    })
}


$button.addEventListener('click', sendGETRequest)
