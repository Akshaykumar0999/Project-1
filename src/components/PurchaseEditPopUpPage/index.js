import React, {useState} from 'react'
import './index.css'

const PurchaseEditPopUpPage = ({closePopup, defaultValues, updateTheNewRow}) => {
    const [supplier, setSupplier] = useState(defaultValues.supplier || '')
    const [product , setProduct] = useState(defaultValues.product || '')
    const [Qty, setQty] = useState(defaultValues.Qty || '')
    const [Discount, setDiscount] =useState(defaultValues.Discount || '')
    const [SGst, setSGst] = useState(defaultValues.SGst || '')
    const [CGst, setCGst] = useState(defaultValues.CGst || '')
    const [Company, setComapny] = useState(defaultValues.Company || '')
    

    const onChangeSupplier = (event) => {
        setSupplier(event.target.value)
    }
    const onChangeCompany = (event) => {
        setComapny(event.target.value)
    }
    const onChangeProduct = (event) => {
        setProduct(event.target.value)
    }
    const onChangeQty = (e) => {
        setQty(e.target.value)
    }
    const onChangeDiscount = (e) => {
        setDiscount(e.target.value)
    }
    const onChangeSGst = (e) => {
        setSGst(e.target.value)
    }
    const onChangeCGst = (e) => {
        setCGst(e.target.value)
    }


    const OnSaveChanges = () => {
        updateTheNewRow(product,Qty, Discount, SGst, CGst)

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
                        <div className='purchase-input-card'>
                            <label htmlFor='supplier' className='label'>Supplier ID</label>
                            <select className='input' id="supplier" value={supplier} onChange={onChangeSupplier}>
                                <option selected value="supplier1">supplier1</option>
                                <option value="supplier2">supplier2</option>
                            </select>
                        </div>
                        <div className='purchase-input-card'>
                            <label htmlFor='Product' className='label'>Product ID</label>
                            <select className='input' id="Product" value={product} onChange={onChangeProduct}>
                                <option selected value="Product1">Product1</option>
                                <option value="Product2">Product2</option>
                            </select>
                        </div>
                        <div className='purchase-input-card'>
                            <label htmlFor="Qty" className='label'>Qty</label>
                            <input id='Qty' value={Qty} className='input' type='number' placeholder='Enter Qty' onChange={onChangeQty} />
                        </div>                
                    </div>
                    <div className='inputs-card-container'>
                        <div className='purchase-input-card'>
                            <label htmlFor="Discount" className='label'>Discount</label>
                            <input id='Discount' value={Discount} className='input' type='number' placeholder='Enter Discount' onChange={onChangeDiscount} />
                        </div>
                        <div className='purchase-input-card'>
                            <label htmlFor="SGst" className='label'>SGst</label>
                            <input id='SGst' value={SGst} className='input' type='number' placeholder='Enter SGst' onChange={onChangeSGst} />
                        </div>
                        <div className='purchase-input-card'>
                            <label htmlFor="CGst" className='label'>CGst</label>
                            <input id='CGst' value={CGst} className='input' type='number' placeholder='Enter CGst' onChange={onChangeCGst} />
                        </div>
                    </div>
                    <div className='inputs-card-container'>
                        <div className='purchase-input-card'>
                            <label htmlFor='Company' className='label'>Company</label>
                            <select className='input' id="Company" value={Company} onChange={onChangeCompany}>
                                <option selected value="Company1">Company1</option>
                                <option value="Company2">Company2</option>
                            </select>
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

export default PurchaseEditPopUpPage