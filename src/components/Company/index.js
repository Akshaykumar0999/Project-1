import React, { useState } from 'react'
import './index.css' 

import CompanyEditPopUpPage from '../CompanyEditPopUpPage'

import Header from '../Header/index.js'
import Sidenavbar from '../Sidenavbar'
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
        ComId: "nnkbb",
        CName: "Ak Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 2,
        ComId: "nnkbb",
        CName: "Rk Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 2,
        ComId: "nnkbb",
        CName: "ck Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 4,
        ComId: "nnkbb",
        CName: "Dk Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 5,
        ComId: "nnkbb",
        CName: "Pk Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 6,
        ComId: "nnkbb",
        CName: "Uk Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },{
        id: 7,
        ComId: "nnkbb",
        CName: "vk Sol",
        CAddress: "panjagutta",
        CCity: "hyd",
        CState: "Ts",
        CPostCode: "50034",
        CPhno: '0000000000',
        CBank: "SBI",
        CCgst: "40.0",
        CBankBranch: "s-1",
        CBanckAccount: "8685884",
    },
]
const Company = () => {
    const [searchName , setSearchNames] = useState([])
    const [ComId, setComId] = useState('')
    const [CName , setComName] = useState('')
    const [CAddress, setComAddress] = useState('')
    const [CCity, setCity] = useState('')
    const [CState, setStateofCom] = useState('')
    const [CPostCode, setCompanyPcode] = useState('')
    const [CPhno, setCompanyPhNo] = useState('')
    const [CCgst, setCompanyCGST] = useState('')
    const [CBank, setCompanyBank] = useState('')
    const [CBanckAccount, setCompanyAccountNo] =useState('')
    const [CBankBranch, setBranch] = useState('')

    const [companyDetailsList , setCompnayDetailsList] = useState(defaultList)

    //setProductsList, ProductsList

    const [errorComId, setErrorComId] = useState(false)
    const [ComNameErrorMsg, setComNameErrorMsg] = useState(false)
    const [ComAddressErrorMsg, setComAddressErrorMsg] = useState(false)
    const [ComCityErrorMsg, setComCityErrorMsg] = useState(false)
    const [ComStateErrorMsg, setComStateErrorMsg] = useState(false)
    const [ComPCodeErrorMsg, setComPCodeErrorMsg] = useState(false)
    const [ComPhnoErrorMsg, setComPhnoErrorMsg] = useState(false)
    const [ComCgstErrorMsg, setComCgstErrorMsg] = useState(false)
    const [ComBankErrorMsg, setComBankErrorMsg] = useState(false)
    const [ComBankAccErrorMsg, setComBankAccErrorMsg] = useState(false)
    const [ComBankBranchErrorMsg, setComBankBranchErrorMsg] = useState(false)

    // const [ImageErrroMsg, setImageErrorMsg] = useState(false)
    // const [selectedImage, setSelectedImage] = useState(null);

    const [rowToEdit, setRowToEdit] = useState('')
    
    const [openModel, setOpenModule] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = companyDetailsList.slice(firstIndex, lastIndex)
    const nPages = Math.ceil(companyDetailsList.length / recordsPerPage)
    const numbers = [...Array(nPages + 1).keys()].slice(1)

    const searchResults = records.filter(e => e.CName.toLowerCase().includes(searchName)) 

    // const handleImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         setSelectedImage(e.target.result);
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //     }
    // };

    
    const onChangeSearch = (event) => {
        setSearchNames(event.target.value)
    }

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
    
    const onChangeCompanyId = (event) => {
        setComId(event.target.value)
    }
    const companyName = (event) => {
        setComName(event.target.value)
    }
    const companyAddress = (event) => {
        setComAddress(event.target.value)
    }
    const companyCity = (event ) => {
        setCity(event.target.value)
    } 
    const companyState = (event) => {
        setStateofCom(event.target.value)
    }
    const ChangeCompanyPcode = (event) => {
        setCompanyPcode(event.target.value)
    }
    const CompanyPhno = (e) => {
        setCompanyPhNo(e.target.value)
    }
    const CompanyCGST = (e) => {
        setCompanyCGST(e.target.value)
    }
    const CompanyBank = (e) => {
        setCompanyBank(e.target.value)
    }
    const companyAccountNo = (e) => {
        setCompanyAccountNo(e.target.value)
    }
    const ComapnyBankBranchName = (event) => {
        setBranch(event.target.value)
    } 
    

    const onClickReset=()=> {
        setComName('')
        setComId('')
        setComAddress('')
        setCity('')
        setStateofCom('')
        setCompanyPcode('')
        setCompanyPhNo('')
        setCompanyCGST('')
        setCompanyBank('')
        setCompanyAccountNo('')
        setBranch('')
    }

    const onIdBlur = () => {
        if (ComId !== '') {
            setErrorComId(false)
        }else {
            setErrorComId(true)
        }
    }    
    const onBlurComName = () => {
        if (CName !== "") {
            setComNameErrorMsg(false)
        }
        else {
            setComNameErrorMsg(true)
        }
    }
    const onBlurComAddress = () => {
        if (CAddress !== ''){
            setComAddressErrorMsg(false)
        }
        else{
            setComAddressErrorMsg(true)
        }
    }
    const onBlurComCity = () => {
        if (CCity !== ''){
            setComCityErrorMsg(false)
        }
        else{
            setComCityErrorMsg(true)
        }
    }
    const onBlurComstate = () => {
        if (CState !== ''){
            setComStateErrorMsg(false)
        }
        else{
            setComStateErrorMsg(true)
        }
    }
    const onBlurComPCode = () => {
        if (CPostCode !== ''){
            setComPCodeErrorMsg(false)
        }
        else{
            setComPCodeErrorMsg(true)
        }
    }
    const onBlurComPhno = () => {
        if (CPhno !== ''){
            setComPhnoErrorMsg(false)
        }
        else{
            setComPhnoErrorMsg(true)
        }
    }
    const onBlurComCgst = () => {
        if (CCgst !== ''){
            setComCgstErrorMsg(false)
        }
        else{
            setComCgstErrorMsg(true)
        }
    }
    const onBlurComBank = () => {
        if (CBank !== ''){
            setComBankErrorMsg(false)
        }
        else{
            setComBankErrorMsg(true)
        }
    }
    const onBlurComBankAccount = () => {
        if (CBanckAccount !== ''){
            setComBankAccErrorMsg(false)
        }
        else{
            setComBankAccErrorMsg(true)
        }
    }
    const onBlurComBankBranch = () => {
        if (CBankBranch !== ''){
            setComBankBranchErrorMsg(false)
        }
        else{
            setComBankBranchErrorMsg(true)
        }
    }

    const onSubmitCompanyDetails = (event) => {
        event.preventDefault()
        const newId = companyDetailsList.length + 1
        const newObject = {
            id: newId,
            ComId,
            CName,
            CAddress,
            CCity,
            CState,
            CPostCode,
            CPhno,
            CBank,
            CCgst,
            CBankBranch,
            CBanckAccount,
        }

        if (ComId !== "" && CAddress !== "" && CCity !== '' && CState !== '' && CPostCode !== '' && CPhno !== '' && CBanckAccount !== '' && CBankBranch !== '' && CCgst !== '' ) {
            setComNameErrorMsg(false)
            setComAddressErrorMsg(false)
            setComCityErrorMsg(false)
            setComStateErrorMsg(false)
            setComPCodeErrorMsg(false)
            setComPhnoErrorMsg(false)
            setComCgstErrorMsg(false)
            setComBankErrorMsg(false)
            setComBankAccErrorMsg(false)
            setComBankBranchErrorMsg(false)
            setCompnayDetailsList((prevList) => [...prevList, newObject])
        }else {
            setComNameErrorMsg(true)
            setComAddressErrorMsg(true)
            setComCityErrorMsg(true)
            setComStateErrorMsg(true)
            setComPCodeErrorMsg(true)
            setComPhnoErrorMsg(true)
            setComCgstErrorMsg(true)
            setComBankErrorMsg(true)
            setComBankAccErrorMsg(true)
            setComBankBranchErrorMsg(true)
        }
    }

    const onClickDeleteItem = (id) => {
        const deletedLists = companyDetailsList.filter(e => e.id !== id)
        setCompnayDetailsList(deletedLists)
    }
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    } 

    const updateTheNewRow = (EditComId,EditCName,EditCAddress, EditCCity, EditCState, EditCPostCode, EditCPhno, EditCCgst, EditCBank, EditCBanckAccount, EditCBankBranch) => {
        const newRow = {
            id: EditComId,
            CName: EditCName,
            CAddress: EditCAddress,
            CCity: EditCCity,
            CState: EditCState,
            CPostCode: EditCPostCode,
            CPhno: EditCPhno,
            CBank: EditCBank,
            CCgst: EditCCgst,
            CBankBranch: EditCBankBranch,
            CBanckAccount: EditCBanckAccount,
        }
        setCompnayDetailsList(companyDetailsList.map((e, i) => {
            if (i !== rowToEdit) {
                return e
            }
            return newRow
        }))
    }

    return(
        <div className='app-card-container-classname'>
            <div className='app-conatiner'>
                    <Sidenavbar />
                    <div className='Home-card-container'>
                        <Header />
                        <div className='categories-card-container'>
                            <div className='categories-header'>
                                <h1 className='sub-category-heading'>Company</h1>
                                <p className='category-name-des'><AiFillHome /> Dashboard / Company</p>
                            </div>
                            <div className='categories-details-card'>
                                <div className='categories-input-card'>
                                    <div className='category-input-header'>
                                        <p className='category-name'>Company</p>
                                        <input type="checkbox"/>
                                    </div>
                                    <form className='form-container' onSubmit={onSubmitCompanyDetails}>
                                        <div className='input-card'>
                                            <label htmlFor="id" className='label'>Company Id</label>
                                            <input id='id' value={ComId} className='input' type='text' placeholder='Enter the Company Id' onChange={onChangeCompanyId} onBlur={onIdBlur} />
                                            {errorComId && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="name" className='label'>Company Name</label>
                                            <input id='name' value={CName} className='input' type='text' placeholder='Enter the supplier name' onChange={companyName} onBlur={onBlurComName} />
                                            {ComNameErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="address" className='label'>Company Address</label>
                                            <input id='address' value={CAddress} className='input' type='text' placeholder='Enter the company address' onChange={companyAddress} onBlur={onBlurComAddress} />
                                            {ComAddressErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="city" className='label'>Company City</label>
                                            <input id='city' value={CCity} className='input' type='text' placeholder='Enter the company city' onChange={companyCity} onBlur={onBlurComCity}/>
                                            {ComCityErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="state" className='label'>Company State</label>
                                            <input id='state' value={CState} className='input' type='text' placeholder='Enter the company state' onChange={companyState} onBlur={onBlurComstate}/>
                                            {ComStateErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="Pcode" className='label'>Company Postal Code</label>
                                            <input id='Pcode' value={CPostCode} className='input' type='text' placeholder='Enter the Company Pcode' onChange={ChangeCompanyPcode} onBlur={onBlurComPCode}/>
                                            {ComPCodeErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="PhNumber" className='label'>Company Bussiness Ph no</label>
                                            <input id='PhNumber' value={CPhno} className='input' type='number' placeholder='Enter the company Ph No' onChange={CompanyPhno} onBlur={onBlurComPhno}/>
                                            {ComPhnoErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="Cgst" className='label'>CGST</label>
                                            <input id='Cgst' value={CCgst} className='input' type='number' placeholder='Enter the company CGST' onChange={CompanyCGST} onBlur={onBlurComCgst}/>
                                            {ComCgstErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="CBank" className='label'>Company Bank</label>
                                            <input id='CBank' value={CBank} className='input' type='text' placeholder='Enter the company Bank' onChange={CompanyBank} onBlur={onBlurComBank} />
                                            {ComBankErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="AccountNo" className='label'>Company Bank Account</label>
                                            <input id='AccountNo' value={CBanckAccount} className='input' type='number' placeholder='Enter the Company Bank Accounyt No' onChange={companyAccountNo} onBlur={onBlurComBankAccount} />
                                            {ComBankAccErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>
                                        <div className='input-card'>
                                            <label htmlFor="branch" className='label'>Company Bank Branch</label>
                                            <input id='branch' value={CBankBranch} className='input' type='text' placeholder='Enter the Bank Branch' onChange={ComapnyBankBranchName} onBlur={onBlurComBankBranch}/>
                                            {ComBankBranchErrorMsg && <p className='error-msg'>required feild</p>}
                                        </div>

                                        {/* <div className='input-card'>
                                            <label className='label' htmlFor='image-file'>Image</label>
                                            <input type="file" id='image-file' onChange={handleImageChange} />
                                            {ImageErrroMsg && <p className='error-msg'>required feild</p>}
                                            {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
                                        </div> */}
                                        
                                        <div className='buttons-container'>
                                            <button className='reset-button' type='button' onClick={onClickReset}>Reset</button>
                                            <button className='Add-category-button' type='submit'>Add Company</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='categories-input-ul-card'>
                                    <div className='categories-card-lists'>
                                        <p className='shape'></p>
                                        <p className='category-name'>Companies List</p>
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
                                                            <th>CompanyName</th>
                                                            <th>CompanyAddress</th>
                                                            <th>Company(city, State)</th>
                                                            <th>Phone no</th>
                                                            <th>Company Bank</th>
                                                            <th>Company CGSt</th>
                                                            <th>Operations</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='tabel-data-details'>
                                                        {searchResults.map((eachItem, index ) => (
                                                            <tr className='row-table' key={index}>
                                                                <td className='image-icon'>
                                                                    <p className='paragraph-name'>{eachItem.CName}</p>
                                                                </td>
                                                                <td className='name-data-card'>
                                                                    <p className='paragraph-name'>{eachItem.CAddress}</p>
                                                                </td>
                                                                <td className='is-active'>{eachItem.CCity}, {eachItem.CState}</td>
                                                                <td className='is-active'>{eachItem.CPhno}</td>
                                                                <td className='is-active'>{eachItem.CBank}</td>
                                                                <td className='is-active'>{eachItem.CCgst}</td>
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
                {openModel && <CompanyEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && companyDetailsList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
        
    )
}
   
export default Company