import React, { useState } from 'react'

import ModuleData from '../ModuleData'

import {AiFillHome, AiFillSetting, AiFillQuestionCircle} from 'react-icons/ai'
import { FaHandshake, FaTools, FaFlag, FaPuzzlePiece} from 'react-icons/fa'
import { MdOutlineWbTwilight, MdGroups2, MdOutlineSpeakerNotes} from 'react-icons/md'
import { BsPersonFill, BsFillBellFill} from 'react-icons/bs'
import {RiLuggageCartFill} from 'react-icons/ri'

import './index.css'

const VariousModulesDetailsList = [
    {
        id: 1,
        IconComponent: AiFillHome,
        IconName: "Dashboard",
        linkTo: '/',
        colorName: "#0d99b8"
    },
    {
        id: 2,
        IconComponent: FaHandshake,
        IconName: "Service Seekers",
        linkTo: '/',
        colorName: "#0c0d4a"
    },
    {
        id: 3,
        IconComponent: RiLuggageCartFill,
        IconName: "Service Providers",
        linkTo: '/',
        colorName: "#e1c62e"
    },
    {
        id: 4,
        IconComponent: MdOutlineSpeakerNotes,
        IconName: "Jobs",
        linkTo: '/dashboard/category',
        colorName: "#3ab13e"
    },
    {
        id: 5,
        IconComponent: FaTools,
        IconName: "Categories",
        linkTo: '/',
        colorName: "#93e8f7"
    },
    {
        id: 6,
        IconComponent: FaFlag,
        IconName: "Sub Categories",
        linkTo: '/',
        colorName: "#ed8489"
    },

    {
        id: 7,
        IconComponent: MdOutlineSpeakerNotes,
        IconName: "Earning",
        linkTo: '/dashboard/category/subcategories',
        colorName: "#4ebdd6"
    },
    {
        id: 8,
        IconComponent: MdGroups2,
        IconName: "Repots",
        linkTo: '/',
        colorName: "#e1c62e"
    },
    {
        id: 9,
        IconComponent: FaPuzzlePiece,
        IconName: "Tikects",
        linkTo: '/',
        colorName: "#0c0d4a"
    },
    {
        id: 10,
        IconComponent: AiFillSetting,
        IconName: "Notifications",
        linkTo: '/',
        colorName: "#0d99b8"
    },
    {
        id: 11,
        IconComponent: BsPersonFill,
        IconName: "Privacy And Polacy",
        linkTo: '/',
        colorName: "#ed8489"
    },
    {
        id: 12,
        IconComponent: BsFillBellFill,
        IconName: "FAQ's",
        linkTo: '/',
        colorName: "#dfee68"
    },
    {
        id: 13,
        IconComponent: AiFillQuestionCircle,
        IconName: "Settings",
        linkTo: '/',
        colorName: "#0d99b8"
    }

]

const Modules = () => {
    const [ActiveId, setModulesListActId] = useState([]);
    const updateActId = (id) => {
        setModulesListActId(id)
    }
    return(
        <div className='Dash-board-lists-container'>
            <MdOutlineWbTwilight className='logo-icon-is' />
            <ul className='app-dash-board-lists'>
                {VariousModulesDetailsList.map(eachItem => (<ModuleData key={eachItem.id} details={eachItem} updateActId={updateActId} isActive={ActiveId === eachItem.id} />))}
            </ul>
        </div>
    )
}

export default Modules