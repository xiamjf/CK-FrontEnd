'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/user_questions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{user_question: {user_id: ' + store.user.id + ', question_id: ' + data[0] + ', response: ' + data[1] + '}}'
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (example) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + example.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + data.example.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
