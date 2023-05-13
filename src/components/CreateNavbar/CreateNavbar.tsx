import { Link } from 'react-router-dom';
import './CreateNavbar.css';

const CreateNavbar = ({ selections, paths, classname } : {selections: string[], paths: string[], classname: string} ) => {
  return (
    <>
      {selections.map((selection, index) => {
        //return <div className={classname + '-container'} key={index}><Link to={'/' + paths[index]} className={classname}>{selection}</Link></div>
        return (
          <Link to={'/' + paths[index]} className={classname + '-container'} key={index}>
            <div className={classname}>{selection}</div>
          </Link>
        );
      })}
    </>
  )
}

export default CreateNavbar
