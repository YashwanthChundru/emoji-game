import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="log-design"
        />
        <h3>Emoji Game</h3>
      </div>
      <div className="score-container">
        <p className="desc">Score: {score}</p>
        <p className="desc">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
