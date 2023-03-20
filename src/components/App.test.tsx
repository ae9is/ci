/// <reference types="vitest" />
import { it, expect } from 'vitest'
import { screen, render } from '../test/utils'
import App from './App'

beforeEach(() => {
  render(<App />)
})

describe('<App />', () => {
  it('renders heading', async () => {
    await screen.findByTestId('heading')
    expect(screen.getByTestId('heading').textContent).to.equal('Example App')
  })
})
