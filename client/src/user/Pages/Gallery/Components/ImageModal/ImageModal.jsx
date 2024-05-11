import "./ImageModal.css";
import{ FaThumbsUp} from 'react-icons/fa'


const ImageModal = ({image, title,  id, onClick}) => {
 return (
   <>
  <div className="image-modal">
   <img src={image} alt="data" width={300} height={250} />
   <span>{title}</span>
   <button type='submit' onClick={() => onClick(id)}>View Details</button>
  </div>
   
   </>

 );
};

export default ImageModal;
