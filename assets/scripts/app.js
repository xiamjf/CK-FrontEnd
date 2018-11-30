'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const examplesEvents = require('./examples/events.js')
const userQuestionsEvents = require('./user-questions/events.js')
const questionsEvents = require('./questions/events.js')
const responsesEvents = require('./responses/events.js')

$(() => {
  authEvents.addHandlers()
  examplesEvents.addHandlers()
  userQuestionsEvents.addHandlers()
  questionsEvents.addHandlers()
  responsesEvents.addHandlers()
})
