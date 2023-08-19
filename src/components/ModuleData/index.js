
import {Link} from 'react-router-dom'
import  './index.css'


const ModuleData = (props) => {
    const {details, updateActId, isActive} = props
    const { id, IconComponent , linkTo, colorName} = details
    const ActiveModule = isActive && "active-id"
    const etarctActId = () => {
        updateActId(id)
    }
    return(
        <Link to={linkTo} className="Link-card">
            <button type="button" className='module-btn' onClick={etarctActId}>
            <li className={`list-card ${ActiveModule}`}>
                <IconComponent className='icon' color={colorName} />
                {/* <p className='list-name'>{IconName}</p> */}
            </li>
            </button>
        </Link>
    )
}

export default ModuleData