import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'

import Header from '../Header/index.js'
import Modules from '../Modules'
import {AiFillHome} from 'react-icons/ai'
import {GiWaterRecycling} from 'react-icons/gi'
import {MdOutlineSpeakerNotes} from 'react-icons/md'
import Categories from '../categories'

const Category = () => {
    const [searchName , setSearchNames] = useState([])
    const [name , setName] = useState('')
    const [categoryType , setCategoryType] = useState('')
    const [categoryList , setCategoryList] = useState([])
    const [nameErrroMsg, setNameErrorMsg] = useState(false)
    const [ImageErrroMsg, setImageErrorMsg] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

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
    
    const onSubmitCategory = (event) => {
        event.preventDefault()
        const newCategory = {
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
            setCategoryList((prevCategoryList) => [...prevCategoryList, newCategory])
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
                        <h1 className='category-name-heading'>Categories</h1>
                        <p className='category-name-des'><AiFillHome /> Dashboard / Category</p>
                    </div>
                    <div className='categories-details-card'>
                        <div className='categories-input-card'>
                            <div className='category-input-header'>
                                <p className='category-name'>Category</p>
                                <input type="checkbox"/>
                            </div>
                            <form className='form-container' onSubmit={onSubmitCategory}>
                                <div className='inputs-froms'>
                                    <div className='input-card'>
                                        <label htmlFor="name" className='label'>Name</label>
                                        <input id='name' value={name} className='input' type='text' placeholder='Enter the name of category' onChange={onChnageName} />
                                        {nameErrroMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='select' className='label'>Type</label>
                                        <select className='input' id="select" value={categoryType} onChange={onChangeCategory}>
                                            <option selected value="category1">Category1</option>
                                            <option value="category2">Category2</option>
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
                                    <button className='Add-category-button' type='submit'>Add Category</button>
                                </div>
                            </form>
                        </div>
                        <div className='categories-input-card'>
                            <div className='categories-card-lists'>
                                <p className='shape'></p>
                                <p className='category-name'>Category List</p>
                            </div>
                            <div className='lists-container'>
                                <input type='search' placeholder='Search' onChange={onChangeSearch}/>
                                <button><GiWaterRecycling /></button>
                                <button><MdOutlineSpeakerNotes /></button>
                            </div>
                            <Categories searchName={searchName} categoryList={categoryList} selectedImage={selectedImage} 
                            // onClickDeleteItem={onClickDeleteItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
   
export default Category