import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickButton = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-items">
      <button
        type="button"
        className="button-styling"
        onClick={onClickButton()}
      >
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
