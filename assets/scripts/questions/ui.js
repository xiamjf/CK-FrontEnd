'use strict'

const onIndexSuccess = function (response) {
  $('#message').text('All Questions successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('onIndexSuccess ran. Data is :', data.examples)
  $('#content').html('')

  // loop through API response data
  const questions = response.questions
  questions.forEach(question => {
    const questionHTML = (`
      <h4>Prompt: ${question.prompt}</h4>
      <p>ID: ${question.id}</p>
      <br>
    `)

    $('#content').append(questionHTML)
  })
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting questions')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (response) {
  $('#message').text('One Question successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', response)
  const question = response.question
  const questionHTML = (`
    <h4>Prompt: ${question.prompt}</h4>
    <br>
  `)

  $('#content').html(questionHTML)

  // reset form
  $('#question-show').trigger('reset')
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting question')
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
