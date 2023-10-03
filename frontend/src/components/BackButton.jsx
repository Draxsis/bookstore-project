import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './BackButton.css';

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = '/' }) => {
  return (
    <div className='back-button-container'>
      <Link to={destination} className='back-button'>
        <BsArrowLeft className='back-icon' />
      </Link>
    </div>
  );
};

export default BackButton;
