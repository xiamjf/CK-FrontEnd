'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onIndexResponses = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowResponse = function (event) {
  event.preventDefault()
  // console.log('onShowExample ran!')

  const data = getFormFields(event.target)
  const response = data.response

  if (response.id.length !== 0) {
    api.show(response)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a question id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter a question id!')
  }
}

const onGetResponse = function(event) {

  // prevent default submit action
  event.preventDefault()

  // make API call
  api.index()

  // if API call is successful then
  .then(ui.onIndexSuccess)

  // if API call fails then
  .catch(ui.onError)

}

const onGetResponse = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.response.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {

    // make API call with data
    api.show(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
  }
 }

const addHandlers = () => {
  $('#response-index').on('submit', onIndexResponses)
  $('#response-show').on('submit', onShowResponse)
}

module.exports = {
  addHandlers
}
