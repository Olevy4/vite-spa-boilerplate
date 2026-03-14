import './About.css'

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This is a single page application boilerplate built with{' '}
        <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a> and{' '}
        <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Lightning-fast HMR with Vite</li>
        <li>Client-side routing with React Router</li>
        <li>Shared layout with header and footer</li>
        <li>Path alias support (<code>@/</code> maps to <code>src/</code>)</li>
        <li>ESLint pre-configured</li>
      </ul>
    </div>
  )
}

export default About
