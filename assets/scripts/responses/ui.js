'use strict'

const onIndexSuccess = function (data) {
  $('#message').text('All Responses successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('onIndexSuccess ran. Data is :', data.examples)
  $('#content').html('')

  // loop through API response data
  const responses = data.responses
  responses.forEach(response => {
    const responseHTML = (`
      <h4>Prompt: ${response.question.prompt}</h4>
      <p>ID: ${response.question.id}</p>
      <h4>Prompt: ${response.prompt}</h4>
      <p>ID: ${response.id}</p>
      <br>
    `)

    $('#content').append(responseHTML)
  })
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting questions')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Response successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
  const response = data.response
  const response HTML = (`
    <h4>Prompt: ${response.question.prompt}</h4>
    <h4>Prompt: ${response.prompt}</h4>
    <br>
  `)

  $('#content').html(responseHTML)

  // reset form
  $('#response-show').trigger('reset')
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting response')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
