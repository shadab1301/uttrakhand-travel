import './detailsModal.css'
import{ FaThumbsUp} from 'react-icons/fa'
const DetailsModal = ({image,  closeModal, title, description}) => {
  return (
    <div className='details-modal'>
      <img className='details-modal-image' src={image} alt="error"/>
      <div className='details-modal-content'>
        {/* <a  target="_blank">{title}</a> */}
        <div> <p><span>{title}</span></p></div>
       <div> <p><span>Discription: {description}</span></p></div>
       <div className='details-modal-buttons'>
          <button className='btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
        
        <div className='detail-modal-tags'>
        </div>
    </div>
  )
}

export default DetailsModal