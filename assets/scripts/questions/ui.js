'use strict'

// const onCreateSuccess = function (data) {
//   $('#message').text('Example successfully created')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('onCreateSuccess ran. Data is :', data)
// }
//
// const onCreateFailure = function (error) {
//   $('#message').text('Error on creating example')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onCreateFailure ran. Error is :', error)
// }

const onIndexSuccess = function (data) {
  $('#message').text('All Questions successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('onIndexSuccess ran. Data is :', data.examples)
  // look up jquery-ajax-crud training
  $('#content').removeClass()
  $('#content').addClass('border')
  $('#content').html('')
  data.questions.forEach(question => {
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

const onShowSuccess = function (data) {
  $('#message').text('One Question successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting question')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

// const onDestroySuccess = function () {
//   $('#message').text('Example successfully deleted')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('Example successfully deleted')
// }
//
// const onDestroyFailure = function (error) {
//   $('#message').text('Error on deleting example')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onDestroyFailure ran. Error is :', error)
// }
//
// const onUpdateSuccess = function () {
//   $('#message').text('Example successfully updated')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('Example successfully updated')
// }
//
// const onUpdateFailure = function (error) {
//   $('#message').text('Error on updating example')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onUpdateFailure ran. Error is :', error)
// }

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
