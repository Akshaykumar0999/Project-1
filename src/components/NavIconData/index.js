import React from "react";
import { Link } from 'react-router-dom'
import './index.css'

const NavIconData = ({ details, updateActId, isActive }) => {
    const { id, IconComponent, linkTo, colorName } = details
    const ActiveModule = isActive ? "active-id" : "list-card"

    const activeBtnId = () => {
        updateActId(id)
    }

    return (
        <Link to={linkTo} className="Link-card">
            <button type="button" className={`module-btn ${ActiveModule}`} onClick={activeBtnId}>
                <IconComponent className='icon' color={colorName} />
                {/* {displaySideNavNames && <p className='list-name'>{IconName}</p>} */}
            </button>
        </Link>
    )
}

export default NavIconData