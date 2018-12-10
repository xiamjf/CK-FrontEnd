'use strict'

'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateResponse = function (event) {
  event.preventDefault()
  // console.log('onCreateResponse ran!')
  const questionId = document.getElementById('question-id').value
  const responsePrompt = document.getElementById('response-prompt').value.toString()
  const data = [questionId, responsePrompt]
  if (questionId === '') {
    $('#response-box').html('<p>Question ID is required</p>')
  } else if (responsePrompt === '') {
    $('#response-box').html('<p>Prompt is required</p>')
  } else {
    api.create(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onCreateFailure)
  }
}

const onIndexResponse = function (event) {
  event.preventDefault()
  console.log('onIndexExamples ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowResponse = function (event) {
  event.preventDefault()
  console.log('onShowExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.id.length !== 0) {
    api.show(example)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an example id!')
  }
}

const onDeleteResponse = function (event) {
  event.preventDefault()
  console.log('onDeleteExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.id.length !== 0) {
    api.destroy(example.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an example id!')
  }
}

const onUpdateResponse = function (event) {
  event.preventDefault()
  console.log('onUpdateExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (example.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an example id!')
  }
}

const addHandlers = () => {
  $('#response-create').on('submit', onCreateResponse)
  $('#response-index').on('submit', onIndexResponse)
  $('#response-show').on('submit', onShowResponse)
  $('#response-delete').on('submit', onDeleteResponse)
  $('#response-update').on('submit', onUpdateResponse)
}

module.exports = {
  addHandlers
}
