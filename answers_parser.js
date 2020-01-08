const _ = require('lodash')
const data = require('./answers.json')
const fs = require('fs')

const correctAnswers = _(data).flatMap('correctAnswers')
  .keyBy('quizQuestionId')
  .value()

const questions = _(data).map('statementQuiz')
  .flatMap('questions')
  .keyBy('quizQuestionId')
  .value()

const parseContent = (content, image) => {
  let url = ''
  if (image) {
    url = image.url
  }
  return content.replace(/!\[image\]\[image\]/, `![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/${url})`)
}

const stream = fs.createWriteStream('./questions.md')
stream.once('open', function (fd) {
  for (const questionId in questions) {
    const { quizQuestionId, options, content, image } = questions[questionId]
    stream.write(`### Question ${quizQuestionId}\n`)
    stream.write(`${parseContent(content, image)}\n`)
    options.forEach(option => {
      stream.write(`* ${option.content}\n`)
    })
    stream.write('\n\n')
  }
  stream.end()
})

const streamAnswered = fs.createWriteStream('./questionsAnswered.md')
stream.once('open', function (fd) {
  for (const questionId in questions) {
    const { quizQuestionId, options, content, image } = questions[questionId]
    streamAnswered.write(`### Question ${quizQuestionId}\n`)
    streamAnswered.write(`${parseContent(content, image)}\n`)
    options.forEach(option => {
      streamAnswered.write(`* ${option.content}`)
      if (correctAnswers[questionId].correctOptionId === option.optionId) {
        streamAnswered.write(' :white_check_mark:')
      }
      streamAnswered.write('\n')
    })
    streamAnswered.write('\n\n')
  }
  streamAnswered.end()
})
