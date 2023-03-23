import Blink from './Blink'

export default function App() {
  return (
    <>
      <Blink>
        <h1 data-testid="heading">Example App</h1>
      </Blink>
      <p>
        Lorem <Blink>ipsum</Blink> dolor sit amet. Rerum iusto sit aut eum molestiae incidunt rerum est. Libero in minima quaerat
        commodi. Voluptatem provident cupiditate ut et nam nisi!
      </p>
    </>
  )
}
