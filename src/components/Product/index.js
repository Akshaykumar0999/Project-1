import Sidenavbar from '../Sidenavbar'
import React, { useState } from 'react'

import './index.css'

import Header from '../Header/index.js'
import ProductEditPopUpPage from '../ProductEditPopUpPage'
import {AiFillHome} from 'react-icons/ai'
import {GiWaterRecycling} from 'react-icons/gi'
import {MdOutlineSpeakerNotes} from 'react-icons/md'
import { GrFormPrevious} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdNavigateNext} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

const defaultList = [
    {
        id: 1,
        PId: '10',
        Pcode: "6090",
        Pname: "computer table",
        PDescription: "Blue computer table",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        PId: '20',
        Pcode: "6090",
        Pname: "computer",
        PDescription: "Blue computer",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        PId: '30',
        Pcode: "6090",
        Pname: "chail",
        PDescription: "Blue chair",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        PId: '40',
        Pcode: "6090",
        Pname: "box",
        PDescription: "Blue box",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 5,
        PId: '50',
        Pcode: "6090",
        Pname: "blue box",
        PDescription: "Blue box",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 6,
        PId: '60',
        Pcode: "6090",
        Pname: "pants",
        PDescription: "Blue pants",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 7,
        PId: '70',
        Pcode: "6090",
        Pname: "shirt",
        PDescription: "Blue shirt",
        companyId: "com1",
        categoryId: 'cat1',
        categoryTypeId: 'catt1',
        supplierId: '9090',
        QtyPerUnt: '10',
        Rprice: '30.00',
        MrpPrice: '32.00',
        imageUrl: "https://picsum.photos/200/300"
    }
]
const Product = () => {
    const [PId, setProductId] = useState('')
    const [Pcode, setPcode] = useState('')
    const [Pname , setPName] = useState('')
    const [PDescription, setProductDescription] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categoryTypeId , setCategoryTypeId] = useState('')
    const [supplierId, setSupplierId] = useState('')
    const [QtyPerUnt , setQntPerUnt] = useState('')
    const [Rprice, setRetailPrice] = useState(0.00)
    const [MrpPrice, setMrpPrice] = useState(0.00)
    const [selectedImage, setSelectedImage] = useState(null);

    // setting ErrorMsgs For Products Details Exist 
    const [PNameErrorMsg, setPNameErrorMsg] = useState(false)
    const [PIdErrorMsg, setPIdErrorMsg] = useState(false)
    const [PCodeErrorMsg, setPCodeErrorMsg] = useState(false)
    const [PDesErrorMsg, setPDesErrorMsg] = useState(false)
    const [QtyPerUntErrorMsg, setQtyPerUntErrorMsg] = useState(false)
    const [RpriceErrorMsg, setRpriceErrorMsg] = useState(false)
    const [MrpPriceErrorMsg, setMrpPriceErrorMsg] = useState(false)
    const [PImageErrorMsg, setPImageErrorMsg] = useState(false)

    //tabel edit hooks....
    const [rowToEdit, setRowToEdit] = useState('')
    const [openModel, setOpenModule] = useState(false)

    const [ProductsList , setProductsList] = useState(defaultList)

    // Pagenation.....
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = ProductsList.slice(firstIndex, lastIndex)
    const nPages = Math.ceil(ProductsList.length / recordsPerPage)
    const numbers = [...Array(nPages + 1).keys()].slice(1)

    ///search function using Productname.... 
    const [searchName , setSearchNames] = useState('')
    const SearchedList = records.filter(each => each.Pname.includes(searchName))

    //Product Details inputs target.values functions.....
    const onChangeProductId = (event) => {
        setProductId(event.target.value)
    }
    const onChnagePcode = (event) => {
        setPcode(event.target.value)
    } 
    const onChnageName = (event) => {
        setPName(event.target.value)
    }
    const onChangeProductDes = (event) => {
        setProductDescription(event.target.value)
    }
    const onChangeCompanyId = (e) => {
        setCompanyId(e.target.value)
    }
    const onChangeCategoryId = (event) => {
        setCategoryId(event.target.value)
    }
    const onChangeCategoryTypeId = (e) => {
        setCategoryTypeId(e.target.value)
    }
    const onChangeSupplierId = (event) => {
        setSupplierId(event.target.value)
    }
    const onChnageQtyPruUnit = (event) => {
        setQntPerUnt(event.target.value)
    }
    const RetailPrice = (event) => {
        setRetailPrice(event.target.value)
    }
    const MRPPrice = (event) =>{
        setMrpPrice(event.target.value)
    }
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        }
    };

    // search Function ......
    const onChangeSearch = (event) => {
        setSearchNames(event.target.value)
    }

    //sumbitform function......
    const onSubmitProductList = (event) => {
        event.preventDefault()
        const newId = ProductsList.length + 1
        const newObject = {
            id: newId,
            PId,
            Pcode,
            Pname,
            PDescription,
            companyId,
            categoryId,
            categoryTypeId,
            supplierId,
            QtyPerUnt,
            Rprice,
            MrpPrice,
            imageUrl: selectedImage,
        }
        if (PId !== '' && Pcode !== '' && Pname !== '' && PDescription !== ''  && QtyPerUnt !== '' && Rprice !== '' && MrpPrice !== '' && selectedImage !== null ) {
            setPNameErrorMsg(false)
            setPImageErrorMsg(false)
            setPIdErrorMsg(false)
            setPCodeErrorMsg(false)
            setPDesErrorMsg(false)
            setRpriceErrorMsg(false)
            setMrpPriceErrorMsg(false)
            setQtyPerUntErrorMsg(false)
            setProductsList((prevList) => [...prevList, newObject])
        }else {
            setPImageErrorMsg(true)
            setPNameErrorMsg(true)
            setPIdErrorMsg(true)
            setPCodeErrorMsg(true)
            setPDesErrorMsg(true)
            setRpriceErrorMsg(true)
            setQtyPerUntErrorMsg(true)
            setMrpPriceErrorMsg(true)
        }
    }

    //resetFrom function .....
    const onClickReset=()=> {
        setProductId('')
        setPcode('')
        setSelectedImage('')
        setPName('')
        setProductDescription('')
        setCompanyId('')
        setCategoryId('')
        setCategoryTypeId('')
        setSupplierId('')
        setQntPerUnt('')
        setMrpPrice('')
        setRetailPrice('')
    }

    //Pagenation functions
    const onChangeCPage = (id) => {
        setCurrentPage(id)
    }
    const onPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const onNextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    //Deletting rows function.......
    const onClickDeleteItem = (id) => {
        const deletedLists = ProductsList.filter(e => e.id !== id)
        setProductsList(deletedLists)
    }

    //edit Row function......
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    } 


    //UpDate the Edited Row...

    const updateTheNewRow = (PId, Pcode, Pname, PDescription, categoryId, companyId, categoryTypeId, supplierId, QtyPerUnt, Rprice, MrpPrice, selectedImage) => {
        const newRow = {
            PId,
            Pcode,
            Pname,
            PDescription,
            companyId,
            categoryId,
            categoryTypeId,
            supplierId,
            QtyPerUnt,
            Rprice,
            MrpPrice,
            imageUrl: selectedImage,
        }
        setProductsList(ProductsList.map((e, i) => {
            if (i !== rowToEdit) {
                return e
            }
            return newRow
        }))
    }

    //onBlur functions for error Detection......
    const onBlurID = () => {
        if (PId !== '') {
            setPIdErrorMsg(false)
        }else {
            setPIdErrorMsg(true)
        }
    }
    const onBlurPCode = () => {
        if (Pcode !== ''){
            setPCodeErrorMsg(false)
        }else {
            setPCodeErrorMsg(true)
        }
    }
    const onBlurPDes = () => {
        if (PDescription !== '' ){
            setPDesErrorMsg(false)
        }else{
            setPDesErrorMsg(true)
        }
    }
    const onBlurPName = () => {
        if (Pname !== '') {
            setPNameErrorMsg(false)
        }
        else {
            setPNameErrorMsg(true)
        }
    }
    const onBlurQtyPerUnit = () => {
        if (QtyPerUnt !== ''){
            setQtyPerUntErrorMsg(false)
        }else{ 
            setQtyPerUntErrorMsg(true)
        }
    }
    const onBlurRetailPrice = () => {
        if (Rprice !== '') {
            setRpriceErrorMsg(false)
        }
        else {
            setRpriceErrorMsg(true)
        }
    }
    const onBlurMrpPrice = () => {
        if (MrpPrice !== '') {
            setMrpPriceErrorMsg(false)
        }else {
            setMrpPriceErrorMsg(true)
        }
    }

    return(
        <div className='app-card-container-classname'>
            <div className='app-conatiner'>
                <Sidenavbar />
                <div className='Home-card-container'>
                    <Header />
                    <div className='categories-card-container'>
                        <div className='categories-header'>
                            <h1 className='sub-category-heading'>Products</h1>
                            <p className='category-name-des'><AiFillHome /> Dashboard / Products</p>
                        </div>
                        <div className='categories-details-card'>
                            <div className='categories-input-card'>
                                <div className='category-input-header'>
                                    <p className='category-name'>Products</p>
                                    <input type="checkbox"/>
                                </div>
                                <form className='form-container' onSubmit={onSubmitProductList}>
                                    <div className='input-card'>
                                        <label htmlFor="id" className='label'>Product Id</label>
                                        <input id='id' value={PId} className='input' type='number' placeholder='Enter the product Id' onChange={onChangeProductId} onBlur={onBlurID} />
                                        {PIdErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="Pcode" className='label'>Product code</label>
                                        <input id='Pcode' value={Pcode} className='input' type='number' placeholder='Enter the product code' onChange={onChnagePcode} onBlur={onBlurPCode}/>
                                        {PCodeErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="Pname" className='label'>Product Name</label>
                                        <input id='Pname' value={Pname} className='input' type='text' placeholder='Enter the product name' onChange={onChnageName} onBlur={onBlurPName}/>
                                        {PNameErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="des" className='label'>Product Description</label>
                                        <input id='des' value={PDescription} className='input' type='text' placeholder='Enter the product Descrition' onChange={onChangeProductDes} onBlur={onBlurPDes} />
                                        {PDesErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='companyId' className='label'>Company Id</label>
                                        <select className='input' id="companyId" value={companyId} onChange={onChangeCompanyId}>
                                            <option  >Com1</option>
                                            <option >Com2</option>
                                        </select>
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='categoryId' className='label'>Category Id</label>
                                        <select className='input' id="categoryId" value={categoryId} onChange={onChangeCategoryId}>
                                            <option  >Category1</option>
                                            <option >Category2</option>
                                        </select>
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='categoryTypeId' className='label'>Category Type Id</label>
                                        <select className='input' id="categoryTypeId" value={categoryTypeId} onChange={onChangeCategoryTypeId}>
                                            <option >Cat1</option>
                                            <option >Cat2</option>
                                        </select>
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor='SupplierId' className='label'>Supplier Id</label>
                                        <select className='input' id="SupplierId" value={supplierId} onChange={onChangeSupplierId}>
                                            <option >Supplier1</option>
                                            <option >Supplier2</option>
                                        </select>
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="QunatityPerUnit" className='label'>Quantity Per Unit</label>
                                        <input id='QunatityPerUnit' value={QtyPerUnt} className='input' type='number' placeholder='Quantity Per Unit' onChange={onChnageQtyPruUnit} onBlur={onBlurQtyPerUnit}/>
                                        {QtyPerUntErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="Rprice" className='label'>Retail Price</label>
                                        <input id='Rprice' value={Rprice} className='input' type='number' onChange={RetailPrice} onBlur={onBlurRetailPrice}/>
                                        {RpriceErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="MPrice" className='label'>MRP Price</label>
                                        <input id='MPrice' value={MrpPrice} className='input' type='number' onChange={MRPPrice} onBlur={onBlurMrpPrice} />
                                        {MrpPriceErrorMsg && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label className='label' htmlFor='image-file'>Image</label>
                                        <input type="file" id='image-file' onChange={handleImageChange} />
                                        {PImageErrorMsg && <p className='error-msg'>required feild</p>}
                                        {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
                                    </div>
                                    <div className='buttons-container'>
                                        <button className='reset-button' type='button' onClick={onClickReset}>Reset</button>
                                        <button className='Add-category-button' type='submit'>Add Product</button>
                                    </div>
                                </form>
                            </div>
                            <div className='categories-input-ul-card'>
                                <div className='categories-card-lists'>
                                    <p className='shape'></p>
                                    <p className='category-name'>Products List</p>
                                </div>
                                <div className='lists-container'>
                                    <input type='search' placeholder='Search' onChange={onChangeSearch} />
                                    <button><GiWaterRecycling /></button>
                                    <button><MdOutlineSpeakerNotes /></button>
                                </div>
                                <div className='add-categories-conatiner'>
                                    <div className='category-input-card'>
                                        <div className='tabel-container'>
                                        <div className='tabel-card-container'>
                                            <table className='tabel-card'>
                                                <thead className='tabel-headers-card'>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>PName</th>
                                                        <th>PCode</th>
                                                        <th>Company ID</th>
                                                        <th>Supplier ID</th>
                                                        <th>QtyPerUnit</th>
                                                        <th>Retail Price</th>
                                                        <th>MRP Price</th>
                                                        <th>Operations</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='tabel-data-details'>
                                                    {SearchedList.map((eachItem, index ) => (
                                                        <tr className='row-table' key={index}>
                                                            <td className='image-icon'>
                                                                <img src={eachItem.imageUrl} alt={eachItem.id} className='image-thumbnail'/>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.Pname}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.Pcode}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.companyId}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.supplierId}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.QtyPerUnt}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.Rprice}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.MRPPrice}</p>
                                                            </td>
                                                            <td className='buttons-card'>
                                                                <GrEdit className='edit-btn' size={15} onClick={() => handelEditRow(eachItem.id)} />
                                                                <RiDeleteBinLine size={15} className='delete-btn' onClick={() => (onClickDeleteItem(eachItem.id))}/>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <div className='pagenation-card'>
                                            <p>Showing {firstIndex +1} to {lastIndex} Pages</p>
                                            <ul className='next-page-icons'>
                                                <li className='page-item' onClick={onPrevPage}>
                                                    <GrFormPrevious />
                                                </li>
                                                {
                                                    numbers.map((n, i) => (
                                                    <li key={i} onClick={() => (onChangeCPage(n))} className={`page-item ${currentPage === n ? 'act-Id-page' : '' }`}  >
                                                    {n}
                                                    </li>
                                                    ))
                                                }     
                                                <li className='page-item' onClick={onNextPage}>
                                                    <MdNavigateNext />
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='app-container'>
                {openModel && <ProductEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && ProductsList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
    )
}
   
export default Product
