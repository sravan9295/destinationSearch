// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li className="destination-item">
      <img className="destination-image" alt={name} src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
