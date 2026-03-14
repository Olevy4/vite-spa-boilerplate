import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" style={{ color: '#646cff' }}>Go back home</Link>
    </div>
  )
}

export default NotFound
