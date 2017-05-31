import Day01Exercises from '../lib/exercises'
import * as chai from 'chai'

const expect = chai.expect
const exercises = new Day01Exercises()

describe('Day 01 Exercises', () => {

  it('#helloWorld should return the string Hello World', () => {
    expect(exercises.helloWorld()).to.equal('Hello World')
  })

  it('#theAnswerToEverything should return the number 42', () => {
    expect(exercises.theAnswerToEverything()).to.equal(42)
  })

  it('#isJSHard should return a boolean', () => {
    expect(exercises.isJSHard()).to.be.a('boolean')
  })

  it('#resultOfFour should return an expression equalling 4', () => {
    expect(exercises.resultOfFour()).to.equal(4)
  })

  it('#resultOfFortyTwo should return an expression equalling 42', () => {
    expect(exercises.resultOfFortyTwo()).to.equal(42)
  })

  it('#myFirstName should return a string of your first name', () => {
    expect(exercises.myFirstName()).to.be.a('string')
    expect(exercises.myFirstName().length).to.be.greaterThan(0)
  })

  it('#myLastName should return a string of your last name', () => {
    expect(exercises.myLastName()).to.be.a('string')
    expect(exercises.myLastName().length).to.be.greaterThan(0)
  })

  it('#myFullName should return a string of your first and last name concatenated with a space (e.g. Aric Beagley)', () => {
    expect(exercises.myFirstAndLastName()).to.be.a('string')
    expect(exercises.myFirstAndLastName().length).to.be.greaterThan(0)
    expect(exercises.myFirstAndLastName()).to.include.string(' ')
  })

  it('#whatsTheType should return the type of "Great Job!"', () => {
    expect(exercises.whatsTheType()).to.equal('string')
  })

})