/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="list-items">
          {emojisList.map(eachEmoji => (
            <EmojiCard key={eachEmoji.id} emoji={eachEmoji} />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
