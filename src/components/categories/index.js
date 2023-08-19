import React, {useState} from 'react'
import { GrFormPrevious} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdNavigateNext} from 'react-icons/md'

import EditPopUp from '../EditPopup'
import Pagenation from '../pagenation'
import './index.css' 




const Categories = ({searchName, categoryList, onClickDeleteItem}) => {
    const [perPage, setPerpage] = useState(categoryList.slice(0, 10))
    const [firstCount , setFirstCount] = useState([])
    const [LastCount , setLastCount] = useState([])
    const pageHandler = (pageNum) => {
        setPerpage(categoryList.slice((pageNum*10)-10, pageNum*10))
        setFirstCount((pageNum*10)-10)
        setLastCount((pageNum*10))
    }
    const SearchedList = perPage.filter(each => each.name.includes(searchName))
    
    return(
        <div className='add-categories-conatiner'>
            <div className='category-input-card'>
                <div className='tabel-container'>
                <div className='tabel-card-container'>
                    <table className='tabel-card'>
                        <thead className='tabel-headers-card'>
                            <th className='image-icon'>Image</th>
                            <th className='name-data'>Name</th>
                            <th className='is-active'>Status</th>
                            <th className='buttons-card'>Operations</th>
                        </thead>
                        <tbody className='tabel-data-details'>
                            {SearchedList.map((eachItem ) => (
                                <tr className='row-table' key={eachItem.id}>
                                    <td className='image-icon'>
                                        <img src={eachItem.imageUrl} alt={eachItem.id} className='image-thumbnail'/>
                                    </td>
                                    <td className='name-data-card'>
                                        <p className='paragraph-name'>{eachItem.name}</p>
                                    </td>
                                    <td className='is-active'>{eachItem.active && <p className='btn-card'>Active</p>}</td>
                                    <td className='buttons-card'>
                                        <button className='edit-button'>
                                            <EditPopUp categoryName="Category"/>
                                        </button>
                                        <button className='delete-btn' 
                                        // onClick={() => (onClickDeleteItem(eachItem.id))}
                                        >
                                            <RiDeleteBinLine />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <div className='pagenation-card'>
                    <p>Showing {firstCount} to {LastCount} Pages</p>
                    <div className='next-page-icons'>
                        <GrFormPrevious />
                        <Pagenation data={categoryList} pageHandler={pageHandler} />
                        <MdNavigateNext />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
    
}
export default Categories