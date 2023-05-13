import './RightButton.css';

const RightButton = ({label, image}: {label: string, image: string}) => {
  return (
    <div className='right-button'>
      <p className='right-button-label'>{label}</p>
      <img className='button-icon' src={require('../../assets/icons/' + image)} alt=''/>
    </div>
  )
}

export default RightButton
