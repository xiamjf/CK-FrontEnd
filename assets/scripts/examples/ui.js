'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating example')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Examples successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.examples)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting examples')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Example successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting example')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Example successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Example successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting example')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Example successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Example successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating example')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
