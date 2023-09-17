import React, { useState } from 'react'
import {GrEdit} from 'react-icons/gr'

import './index.css'

import Header from '../Header/index.js'
import Sidenavbar from '../Sidenavbar'
import {AiFillHome} from 'react-icons/ai'
import {GiWaterRecycling} from 'react-icons/gi'
import {MdOutlineSpeakerNotes} from 'react-icons/md'
import { GrFormPrevious} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdNavigateNext} from 'react-icons/md'
import SupplierEditPopUpPage from '../SupplierEditPopUpPage'

const defaultList = [
    {
        id: 1,
        supplierId: "234",
        Cid: '200',
        SupComName: "Sup com1",
        SupName: 'sup1',
        SupEmail: 'Email.1',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 2,
        supplierId: "34",
        Cid: '20',
        SupComName: "Sup com2",
        SupName: 'sup2',
        SupEmail: 'Email.2',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 3,
        supplierId: "23",
        Cid: '2000',
        SupComName: "Sup com3",
        SupName: 'sup3',
        SupEmail: 'Email.3',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 4,
        supplierId: "2340",
        Cid: '201',
        SupComName: "Sup com4",
        SupName: 'sup4',
        SupEmail: 'Email.4',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 5,
        supplierId: "235",
        Cid: '205',
        SupComName: "Sup com5",
        SupName: 'sup5',
        SupEmail: 'Email.5',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 6,
        supplierId: "216",
        Cid: '20',
        SupComName: "Sup com6",
        SupName: 'sup6',
        SupEmail: 'Email.6',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    },
    {
        id: 7,
        supplierId: "434",
        Cid: '202',
        SupComName: "Sup com7",
        SupName: 'sup7',
        SupEmail: 'Email.7',
        BPhno: '0000000000',
        SupMobNo: '88888888888',
        SupD: 'fjfuu',
    }
]
const Supplier = () => {
    const [searchName , setSearchNames] = useState('')
    const [SupplierList , setSupplierList] = useState(defaultList)

    //Input Values Hooks for form....
    const [supplierId, setSupplierId] = useState('')
    const [Cid, setCompanyId] = useState('')
    const [SupComName, setSupplierComName] = useState('')
    const [SupName , setSupName] = useState('')
    const [SupEmail, setSupEmail] = useState('')
    const [BPhno, setPhNo] = useState('')
    const [SupMobNo, setMobileNO] = useState('')
    const [SupD, setSupplierD] = useState('')

    //input value error msgs for validation of form....
    const [ErrorsupplierId, setErrorSupplierId] = useState(false)
    const [ErrorCid, setErrorCompanyId] = useState(false)
    const [ErrorSupComName, setErrorSupplierComName] = useState(false)
    const [ErrorSupName , setErrorSupName] = useState(false)
    const [ErrorSupEmail, setErrorSupEmail] = useState(false)
    const [ErrorBPhno, setErrorPhNo] = useState(false)
    const [ErrorSupMobNo, setErrorMobileNO] = useState(false)
    const [ErrorSupD, setErrorSupplierD] = useState(false)

    //tabel edit hooks....
    const [rowToEdit, setRowToEdit] = useState('')
    const [openModel, setOpenModule] = useState(false)

    // Pagenation.....
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = SupplierList.slice(firstIndex, lastIndex)
    const nPages = Math.ceil(SupplierList.length / recordsPerPage)
    const numbers = [...Array(nPages + 1).keys()].slice(1)

    //Supplier Input setting functions
    const onChangeSupplierId = (event) => {
        setSupplierId(event.target.value)
    }
    const ChangeCompanyId = (event) => {
        setCompanyId(event.target.value)
    }
    const SupplierCompanyName = (event) => {
        setSupplierComName(event.target.value)
    } 
    const supplierName = (event) => {
        setSupName(event.target.value)
    }
    const supplierEmail = (event) => {
        setSupEmail(event.target.value)
    }
    const supplierPhNumber = (event ) => {
        setPhNo(event.target.value)
    } 
    const supplierMobileNo = (event) => {
        setMobileNO(event.target.value)
    }
    const onChangesupplierD = (e) => {
        setSupplierD(e.target.value)
    }

    //onBlur funtions....
    const onBlurSupID = () => {
        if (supplierId !== ''){
            setErrorSupplierId(false)
        }else {
            setErrorSupplierId(true)
        }
    }
    const onBlurSupComId = () => {
        if (Cid !== ''){
            setErrorCompanyId(false)
        }else {
            setErrorCompanyId(true)
        }
    }
    const onBlurSupComName = () => {
        if (SupComName !== ''){
            setErrorSupplierComName(false)
        }else {
            setErrorSupplierComName(true)
        }
    }
    const onBlurSupName = () => {
        if (SupName !== ''){
            setErrorSupName(false)
        }else {
            setErrorSupName(true)
        }
    }
    const onBlurSupEmail = () => {
        if (SupEmail !== ''){
            setErrorSupEmail(false)
        }else {
            setErrorSupEmail(true)
        }
    }
    const onBlurSupPhno = () => {
        if (BPhno !== ''){
            setErrorPhNo(false)
        }else {
            setErrorPhNo(true)
        }
    }
    const onBlurSupMbNo = () => {
        if (SupMobNo !== ''){
            setErrorMobileNO(false)
        }else {
            setErrorMobileNO(true)
        }
    }
    const onBlurSupDis = () => {
        if (SupD !== ''){
            setErrorSupplierD(false)
        }else {
            setErrorSupplierD(true)
        }
    }

    //search Funtions....
    const onChangeSearch = (event) => {
        setSearchNames(event.target.value)
    }
    const SearchedList = records.filter(each => each.SupName.includes(searchName))

    //Reset Funtion.....
    const onClickReset=()=> {
        setSupplierId('')
        setCompanyId('')
        setSupplierComName('')
        setSupName('')
        setSupEmail('')
        setPhNo('')
        setMobileNO('')
        setSupplierD('')
    }

    //Deletting rows function.......
    const onClickDeleteItem = (id) => {
        const deletedLists = SupplierList.filter(e => e.id !== id)
        setSupplierList(deletedLists)
    }

    //edit Row function......
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    }
    
    //UpDate the Edited Row...
    const updateTheNewRow = (supplierId, Cid, SupComName, SupName, SupEmail, BPhno, SupMobNo, SupD) => {
        const newRow = {
            supplierId,
            Cid,
            SupComName,
            SupName,
            SupEmail,
            BPhno,
            SupMobNo,
            SupD,
        }
        setSupplierList(SupplierList.map((e, i) => {
            if (i !== rowToEdit) {
                return e
            }
            return newRow
        }))
    }

    //onSubmit function of supplier list....
    const onSubmitSupplierList = (event) => {
        event.preventDefault()
        const newId = SupplierList.length + 1
        const newObject = {
            id: newId,
            supplierId,
            Cid,
            SupComName,
            SupName,
            SupEmail,
            BPhno,
            SupMobNo,
            SupD,
        }
        if (supplierId !== '' && Cid !== '' && SupComName !== '' && SupName !== ''  && SupEmail !== '' && BPhno !== '' && SupMobNo !== '' && SupD !== null ) {
            setErrorSupplierId(false)
            setErrorCompanyId(false)
            setErrorSupplierComName(false)
            setErrorSupName(false)
            setErrorSupEmail(false)
            setErrorPhNo(false)
            setErrorMobileNO(false)
            setErrorSupplierD(false)
            setSupplierList((prevList) => [...prevList, newObject])
        }else {
            setErrorSupplierId(true)
            setErrorCompanyId(true)
            setErrorSupplierComName(true)
            setErrorSupName(true)
            setErrorSupEmail(true)
            setErrorPhNo(true)
            setErrorMobileNO(true)
            setErrorSupplierD(true)
        }
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

    return(
        <div className='app-card-container-classname'>
            <div className='app-conatiner'>
                <Sidenavbar />
                <div className='Home-card-container'>
                    <Header />
                    <div className='categories-card-container'>
                        <div className='categories-header'>
                            <h1 className='sub-category-heading'>Supplier</h1>
                            <p className='category-name-des'><AiFillHome /> Dashboard / Supplier</p>
                        </div>
                        <div className='categories-details-card'>
                            <div className='categories-input-card'>
                                <div className='category-input-header'>
                                    <p className='category-name'>Supplier</p>
                                    <input type="checkbox"/>
                                </div>
                                <form className='form-container' onSubmit={onSubmitSupplierList}>
                                    <div className='input-card'>
                                        <label htmlFor="id" className='label'>Supplier Id</label>
                                        <input id='id' value={supplierId} className='input' type='number' placeholder='Enter the supplier Id' onChange={onChangeSupplierId} onBlur={onBlurSupID} />
                                        {ErrorsupplierId && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="Cid" className='label'>Company Id</label>
                                        <input id='Cid' value={Cid} className='input' type='text' placeholder='Enter the Company Id' onChange={ChangeCompanyId} onBlur={onBlurSupComId} />
                                        {ErrorCid && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="s-c-name" className='label'>Supplier Company Name</label>
                                        <input id='s-c-name' value={SupComName} className='input' type='text' placeholder='Enter the supplier company name' onChange={SupplierCompanyName} onBlur={onBlurSupComName} />
                                        {ErrorSupComName && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="name" className='label'>Supplier Name</label>
                                        <input id='name' value={SupName} className='input' type='text' placeholder='Enter the supplier name' onChange={supplierName} onBlur={onBlurSupName} />
                                        {ErrorSupName && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="Email" className='label'>Supplier Email</label>
                                        <input id='Email' value={SupEmail} className='input' type='text' placeholder='Enter the supplier Email' onChange={supplierEmail} onBlur={onBlurSupEmail} />
                                        {ErrorSupEmail && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="BPhno" className='label'>Supplier Bussiness PH-Number</label>
                                        <input id='BPhno' value={BPhno} className='input' type='number' placeholder='Enter the supplier Ph no' onChange={supplierPhNumber} onBlur={onBlurSupPhno} />
                                        {ErrorBPhno && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="SupMobNo" className='label'>Supplier Mobile No</label>
                                        <input id='SupMobNo' value={SupMobNo} className='input' type='number' placeholder='Enter the Mobile No' onChange={supplierMobileNo} onBlur={onBlurSupMbNo} />
                                        {ErrorSupMobNo && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='input-card'>
                                        <label htmlFor="SupD" className='label'>Supplier Dis</label>
                                        <input id='SupD' value={SupD} className='input' type='text' placeholder='Enter the Mobile No' onChange={onChangesupplierD} onBlur={onBlurSupDis} />
                                        {ErrorSupD && <p className='error-msg'>required feild</p>}
                                    </div>
                                    
                                    <div className='buttons-container'>
                                        <button className='reset-button' type='button' onClick={onClickReset}>Reset</button>
                                        <button className='Add-category-button' type='submit'>Add Supplier</button>
                                    </div>
                                </form>
                            </div>
                            <div className='categories-input-ul-card'>
                                <div className='categories-card-lists'>
                                    <p className='shape'></p>
                                    <p className='category-name'>Supplier List</p>
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
                                                    <tr>
                                                        <th>SupID</th>
                                                        <th>Sup_ComName</th>
                                                        <th>SupName</th>
                                                        <th>SupMobNo</th>
                                                        <th>Operations</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='tabel-data-details'>
                                                    {SearchedList.map((eachItem , index) => (
                                                        <tr className='row-table' key={index}>
                                                            <td className='image-icon'>
                                                                <p className='paragraph-name'>{eachItem.supplierId}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.SupComName}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.SupName}</p>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.SupMobNo}</p>
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
                {openModel && <SupplierEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && SupplierList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
    )
}
   
export default Supplier
