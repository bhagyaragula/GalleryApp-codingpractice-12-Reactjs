// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, activeThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const {thumbnailClassName} = isActive ? `thumbnail active` : `thumbnail`

  const onClickItem = () => {
    activeThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="button" onClick={onClickItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
