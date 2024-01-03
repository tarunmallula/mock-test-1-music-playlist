import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, deleteSong} = props
  const {name, genre, duration, imageUrl, id} = songDetails

  const onDeleteItem = () => {
    deleteSong(id)
  }

  return (
    <li className="list-element">
      <div className="image-and-genre">
        <img src={imageUrl} className="image" alt="track" />
        <div className="song-details">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="delete-and-duration">
        <p className="time">{duration}</p>
        <button
          type="button"
          aria-label="Closed"
          className="button"
          onClick={onDeleteItem}
          data-testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}

export default SongItem
