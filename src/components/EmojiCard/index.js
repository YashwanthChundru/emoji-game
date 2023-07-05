import './index.css'

const EmojiCard = props => {
  const {emoji} = props
  const {emojiName, emojiUrl} = emoji
  return (
    <li className="list-items">
      <button type="button" className="button-styling">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
