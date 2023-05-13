import { Link } from 'react-router-dom';
import './SearchInterface.css';
import RightButton from '../RightButton/RightButton';

const SearchInterface = ({placeholder, image}: {placeholder: string, image: string}) => {
  return (
    <div className='search-interface'>

      <div className='search-bar-contianer'>
        <input placeholder={placeholder} className='search-bar'/>
        <button className='search-button'>
          <img className='search-image' src={require('../../assets/icons/' + image)} alt=''/>
        </button>
      </div>
      
      <div className='right-buttons-container'>
        <RightButton label={''} image={'user.png'} />
        <RightButton label={''} image={'heart.png'} />
        <Link to='/shopping-cart' style={{textDecoration: 'none'}}>
          <RightButton label={''} image={'shopping-cart.png'} />
        </Link>
      </div>
    </div>
  )
}

export default SearchInterface
