import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid'

import './index.css'

import Header from '../Header/index.js'
import Modules from '../Modules'
import Pagenation from '../pagenation'
import EditPopUp from '../EditPopup'
import {AiFillHome} from 'react-icons/ai'
import {GiWaterRecycling} from 'react-icons/gi'
import {MdOutlineSpeakerNotes} from 'react-icons/md'
import { GrFormPrevious} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdNavigateNext} from 'react-icons/md'

const SubCategories = () => {
    const [searchName , setSearchNames] = useState([])
    const [name , setName] = useState('')
    const [categoryType , setCategoryType] = useState('')
    const [subCategoryList , setSubCategoryList] = useState([])
    const [nameErrroMsg, setNameErrorMsg] = useState(false)
    const [ImageErrroMsg, setImageErrorMsg] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const [perPage, setPerpage] = useState(subCategoryList.slice(0, 10))
    const [firstCount , setFirstCount] = useState([])
    const [LastCount , setLastCount] = useState([])
    const pageHandler = (pageNum) => {
        setPerpage(subCategoryList.slice((pageNum*10)-10, pageNum*10))
        setFirstCount((pageNum*10)-10)
        setLastCount((pageNum*10))
    }
    const SearchedList = perPage.filter(each => each.name.includes(searchName))

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

    const onChangeSearch = (event) => {
        setSearchNames(event.target.value)
    }
    const onChnageName = (event) => {
        setName(event.target.value)
    }
    const onChangeCategory = (event) => {
        setCategoryType(event.target.value)
        console.log(event.target.value)
    }

    const onClickReset=()=> {
        setCategoryType('')
        setName('')
        setSelectedImage('')
    }
    
    const onSubmitSubCategory = (event) => {
        event.preventDefault()
        const newSubCategory = {
            id: uuidV4(),
            name,
            categoryType,
            imageUrl: selectedImage,
            active: true,
        }

        if (name.length === 0) {
            setNameErrorMsg(true)
        }if (selectedImage === null) {
            setImageErrorMsg(true)
        }else {
            setSubCategoryList((prevList) => [...prevList, newSubCategory])
            setImageErrorMsg(false)
            setNameErrorMsg(false)
        }
    }
    // const onClickDeleteItem = (id) => {
    //     const updatedList = categoryList.map(each => each.id !== id)
    //     setCategoryList(updatedList)
    // }

    return(
        <div className='Home-app-conatiner'>
            <Modules />
            <div className='home-card-container'>
                <Header />
                <div className='categories-card-container'>
                    <div className='categories-header'>
                        <h1 className='sub-category-heading'>Sub Categories</h1>
                        <p className='category-name-des'><AiFillHome /> Dashboard / Category / SubCategories</p>
                    </div>
                    <div className='categories-details-card'>
                        <div className='categories-input-card'>
                            <div className='category-input-header'>
                                <p className='category-name'>Sub Category</p>
                                <input type="checkbox"/>
                            </div>
                            <form className='form-container' onSubmit={onSubmitSubCategory}>
                                <div className='inputs-froms'>
                                    <div className='input-card'>
                                        <label htmlFor="name" className='label'>Name</label>
                                        <input id='name' value={name} className='input' type='text' placeholder='Enter the name of category' onChange={onChnageName} />
                                        {nameErrroMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='select' className='label'>Type</label>
                                        <select className='input' id="select" value={categoryType} onChange={onChangeCategory}>
                                            <option selected value="category1">SubCategory1</option>
                                            <option value="category2">SubCategory2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='input-card'>
                                    <label className='label' htmlFor='image-file'>Image</label>
                                    <input type="file" id='image-file' onChange={handleImageChange} />
                                    {ImageErrroMsg && <p className='error-msg'>required feild</p>}
                                    {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
                                </div>
                                
                                <div className='buttons-container'>
                                    <button className='reset-button' type='button' onClick={onClickReset}>Reset</button>
                                    <button className='Add-category-button' type='submit'>Add SubCategory</button>
                                </div>
                            </form>
                        </div>
                        <div className='categories-input-card'>
                            <div className='categories-card-lists'>
                                <p className='shape'></p>
                                <p className='category-name'>SubCategories List</p>
                            </div>
                            <div className='lists-container'>
                                <input type='search' placeholder='Search' onChange={onChangeSearch}/>
                                <button><GiWaterRecycling /></button>
                                <button><MdOutlineSpeakerNotes /></button>
                            </div>
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
                                                                <EditPopUp categoryName="Sub Category"/>
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
                                            <Pagenation data={subCategoryList} pageHandler={pageHandler} />
                                            <MdNavigateNext />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
   
export default SubCategories
