/// <reference types="cypress" />
import Blink from './Blink'

describe('<Blink />', () => {
  it('renders child text', () => {
    const text = 'Lorem ipsum dolor sit amet!'
    cy.mount(<Blink>{text}</Blink>).as('blink')
    cy.get('div').contains(text)
  })
})
