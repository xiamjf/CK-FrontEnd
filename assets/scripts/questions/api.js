'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (question) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + question.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const destroy = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/questions/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// const update = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/questions/' + data.example.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//     // data: data
//   })
// }

module.exports = {
  index,
  show
}
