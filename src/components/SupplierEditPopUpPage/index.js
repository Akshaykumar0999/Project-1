import React, {useState} from 'react'
import './index.css'

const SupplierEditPopUpPage = ({closePopup, defaultValues, updateTheNewRow}) => {
    const [supplierId, setSupplierId] = useState(defaultValues.supplierId || '')
    const [Cid, setCompanyId] = useState(defaultValues.Cid || '')
    const [SupComName, setSupplierComName] = useState(defaultValues.SupComName || '')
    const [SupName , setSupName] = useState(defaultValues.SupName || '')
    const [SupEmail, setSupEmail] = useState(defaultValues.SupEmail || '')
    const [BPhno, setPhNo] = useState(defaultValues.BPhno || '')
    const [SupMobNo, setMobileNO] = useState(defaultValues.SupMobNo || '')
    const [SupD, setSupplierD] = useState(defaultValues.SupD || '')
    
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


    const OnSaveChanges = () => {
        updateTheNewRow(supplierId, Cid, SupComName, SupName, SupEmail, BPhno, SupMobNo, SupD)

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
                    <h1 className='edit-heading'>Supplier</h1>
                    <br />
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="id" className='label'>Supplier Id</label>
                            <input id='id' value={supplierId} className='input' type='number' placeholder='Enter the supplier Id' onChange={onChangeSupplierId} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="Cid" className='label'>Company Id</label>
                            <input id='Cid' value={Cid} className='input' type='text' placeholder='Enter the Company Id' onChange={ChangeCompanyId} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="s-c-name" className='label'>Supplier Company Name</label>
                            <input id='s-c-name' value={SupComName} className='input' type='number' placeholder='Enter the supplier company name' onChange={SupplierCompanyName} />
                        </div>            
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="name" className='label'>Supplier Name</label>
                            <input id='name' value={SupName} className='input' type='text' placeholder='Enter the supplier name' onChange={supplierName} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="Email" className='label'>Supplier Email</label>
                            <input id='Email' value={SupEmail} className='input' type='text' placeholder='Enter the supplier Email' onChange={supplierEmail} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="BPhno" className='label'>Supplier Bussiness PH-Number</label>
                            <input id='BPhno' value={BPhno} className='input' type='number' placeholder='Enter the supplier Ph no' onChange={supplierPhNumber} />
                        </div>            
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="SupMobNo" className='label'>Supplier Mobile No</label>
                            <input id='SupMobNo' value={SupMobNo} className='input' type='number' placeholder='Enter the Mobile No' onChange={supplierMobileNo} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="SupD" className='label'>Supplier Dis</label>
                            <input id='SupD' value={SupD} className='input' type='text' placeholder='Enter the Mobile No' onChange={onChangesupplierD} />
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

export default SupplierEditPopUpPage