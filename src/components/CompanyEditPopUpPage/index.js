import React, {useState} from 'react'
import './index.css'

const CompanyEditPopUpPage = ({closePopup, defaultValues, updateTheNewRow}) => {
    const [EditComId, setEditComId] = useState(defaultValues.ComId ||'')
    const [EditCName , setEditComName] = useState(defaultValues.CName ||'')
    const [EditCAddress, setEditComAddress] = useState(defaultValues.CAddress ||'')
    const [EditCCity, setEditCity] = useState(defaultValues.CCity ||'')
    const [EditCState, setStateofEditCom] = useState(defaultValues.CState ||'')
    const [EditCPostCode, setCompanyEditPcode] = useState(defaultValues.CPostCode ||'')
    const [EditCPhno, setEditCompanyPhNo] = useState(defaultValues.CPhno || '')
    const [EditCCgst, setEditCompanyCGST] = useState(defaultValues.CCgst || '')
    const [EditCBank, setEditCompanyBank] = useState(defaultValues.CBank ||'')
    const [EditCBanckAccount, setEditCompanyAccountNo] =useState(defaultValues.CBanckAccount || '')
    const [EditCBankBranch, setEditBranch] = useState(defaultValues.CBankBranch ||'')
    
    const onChangeEditCompanyId = (event) => {
        setEditComId(event.target.value)
    }
    const editCompanyName = (event) => {
        setEditComName(event.target.value)
    }
    const editCompanyAddress = (event) => {
        setEditComAddress(event.target.value)
    }
    const editCompanyCity = (event ) => {
        setEditCity(event.target.value)
    } 
    const editCompanyState = (event) => {
        setStateofEditCom(event.target.value)
    }
    const ChangeEditCompanyPcode = (event) => {
        setCompanyEditPcode(event.target.value)
    }
    const EditCompanyPhno = (e) => {
        setEditCompanyPhNo(e.target.value)
    }
    const EditCompanyCGST = (e) => {
        setEditCompanyCGST(e.target.value)
    }
    const EditCompanyBank = (e) => {
        setEditCompanyBank(e.target.value)
    }
    const EditCompanyAccountNo = (e) => {
        setEditCompanyAccountNo(e.target.value)
    }
    const EditComapnyBankBranchName = (event) => {
        setEditBranch(event.target.value)
    } 


    const OnSaveChanges = () => {
        updateTheNewRow(EditComId,EditCName,EditCAddress, EditCCity, EditCState, EditCPostCode, EditCPhno, EditCCgst, EditCBank, EditCBanckAccount, EditCBankBranch)

        closePopup()
    }
    const OnCancelPage = () => {
        closePopup()
    }
    return(
        <div 
        className='popup-container' 
        onClick={(e) => {
            if (e.target.className === 'popup-container') 
                closePopup()
            }}
        >
            <form className='popup-details-card-company'>
                    <h1 className='edit-heading'>Category</h1>
                    <br />
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="id" className='label'>Company Id</label>
                            <input id='id' value={EditComId} className='input' type='text' placeholder='Enter the Company Id' onChange={onChangeEditCompanyId} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="name" className='label'>Company Name</label>
                            <input id='name' value={EditCName} className='input' type='text' placeholder='Enter the supplier name' onChange={editCompanyName} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="address" className='label'>Company Address</label>
                            <input id='address' value={EditCAddress} className='input' type='text' placeholder='Enter the company address' onChange={editCompanyAddress} />
                        </div>                  
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="city" className='label'>Company City</label>
                            <input id='city' value={EditCCity} className='input' type='text' placeholder='Enter the company city' onChange={editCompanyCity} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="state" className='label'>Company State</label>
                            <input id='state' value={EditCState} className='input' type='text' placeholder='Enter the company state' onChange={editCompanyState} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="Pcode" className='label'>Company Postal Code</label>
                            <input id='Pcode' value={EditCPostCode} className='input' type='text' placeholder='Enter the Company Pcode' onChange={ChangeEditCompanyPcode} />
                        </div>             
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="PhNumber" className='label'>Company Bussiness Ph no</label>
                            <input id='PhNumber' value={EditCPhno} className='input' type='number' placeholder='Enter the company Ph No' onChange={EditCompanyPhno} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="Cgst" className='label'>CGST</label>
                            <input id='Cgst' value={EditCCgst} className='input' type='number' placeholder='Enter the company CGST' onChange={EditCompanyCGST} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="CBank" className='label'>Company Bank</label>
                            <input id='CBank' value={EditCBank} className='input' type='text' placeholder='Enter the company Bank' onChange={EditCompanyBank} />
                        </div>  
                    </div> 
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="AccountNo" className='label'>Company Bank Account</label>
                            <input id='AccountNo' value={EditCBanckAccount} className='input' type='number' placeholder='Enter the Company Bank Accounyt No' onChange={EditCompanyAccountNo} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="branch" className='label'>Company Bank Branch</label>
                            <input id='branch' value={EditCBankBranch} className='input' type='text' placeholder='Enter the Bank Branch' onChange={EditComapnyBankBranchName} />
                        </div>
                             
                    </div>
                    <div className='edit-cart-buttons-card'>
                        <button className='save-changes-btn' onClick={OnSaveChanges}>Save changes</button>
                        <button type="button" className="close-btn" onClick={OnCancelPage}>Close</button>
                    </div>
            </form>
        </div>
    )
}

export default CompanyEditPopUpPage