'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onIndexQuestions = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowQuestion = function (event) {
  event.preventDefault()
  // console.log('onShowExample ran!')

  const data = getFormFields(event.target)
  const question = data.question

  if (question.id.length !== 0) {
    api.show(question)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a question id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter a question id!')
  }
}

// const onDeleteExample = function (event) {
//   event.preventDefault()
//   console.log('onDeleteExample ran!')
//
//   const data = getFormFields(event.target)
//   const example = data.example
//
//   if (example.id.length !== 0) {
//     api.destroy(example.id)
//       .then(ui.onDeleteSuccess)
//       .catch(ui.onDeleteFailure)
//   } else {
//     $('#message').html('<p>Please provide an example id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide an example id!')
//   }
// }

// const onUpdateExample = function (event) {
//   event.preventDefault()
//   console.log('onUpdateExample ran!')
//
//   const data = getFormFields(event.target)
//   const example = data.example
//
//   if (example.text === '') {
//     $('#message').html('<p>Text is required</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Text is required!')
//     return false
//   }
//   if (example.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//   } else {
//     $('#message').html('<p>Please provide an example id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide an example id!')
//   }
// }
const onGetQuestions = function(event){

  // prevent default submit action
  event.preventDefault()

  // make API call
  api.index()

  // if API call is successful then
  .then(ui.onIndexSuccess)

  // if API call fails then
  .catch(ui.onError)

}

const onGetQuestion = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.question.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {

    // make API call with data
    api.show(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
  }
 }

const addHandlers = () => {
  // $('#example-create').on('submit', onCreateExample)
  $('#question-index').on('submit', onIndexQuestions)
  $('#question-show').on('submit', onShowQuestion)
  // $('#example-delete').on('submit', onDeleteExample)
  // $('#example-update').on('submit', onUpdateExample)
}

module.exports = {
  addHandlers
}
