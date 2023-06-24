import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h3>Emoji Game</h3>
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
