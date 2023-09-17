import React, { useState } from 'react'
import Sidenavbar from '../Sidenavbar'
import Header from '../Header/index.js'
import {AiFillHome} from 'react-icons/ai'
import PurchaseEditPopUpPage from '../PurchaseEditPopUpPage'
import './index.css'
const defaultList = [
    {
        id: 1,
        supId: 1,
        ProId: 1,
        rate: 100,
        qty: 10,
        disPercantege: "22%",
        cgst: 10.00,
        sgst: 9.00,
        Company: "Company-1",
    },
    {
        id: 2,
        supId: 2,
        ProId: 2,
        rate: 200,
        qty: 10,
        disPercantege: "12%",
        cgst: 10.00,
        sgst: 9.00,
        Company: "Company-2",
    },
    {
        id: 3,
        supId: 3,
        ProId: 3,
        rate: 300,
        qty: 20,
        disPercantege: "10%",
        cgst: 10.00,
        sgst: 9.00,
        Company: "Company-3",
    }
]
const Purchase = () => {
    
    const [supplier, setSupplier] = useState('')
    const [product , setProduct] = useState('')
    const [Rate, setRate] = useState('')
    const [Qty, setQty] = useState('')
    const [Discount, setDiscount] =useState('')
    const [SGst, setSGst] = useState('')
    const [CGst, setCGst] = useState('')
    const [Company, setComapny] = useState('')

    const [date, setDate] = useState("")
    const [InvoiceNum, setInvoiceNum] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [packageSize, setPakageQty] = useState('')
    const [retailsPrice, setRetailsPrice] = useState('')
    const [MfgDate, setMfgDate] = useState('')

    const [PurchasedList , setPurchasedList] = useState(defaultList)


    const [rowToEdit, setRowToEdit] = useState('')
    const [openModel, setOpenModule] = useState(false)

    //Error msgs hooks for validtaion ....

    const [ErrorRate, setErrorRate] = useState('')
    const [ErrorQty, setErrorQty] = useState('')
    const [ErrorDiscount, setErrorDiscount] =useState('')
    const [ErrorSGst, setErrorSGst] = useState('')
    const [ErrorCGst, setErrorCGst] = useState('')

    const onChangeSupplier = (event) => {
        setSupplier(event.target.value)
    }
    const onChangeCompany = (event) => {
        setComapny(event.target.value)
    }
    const onChangeProduct = (event) => {
        setProduct(event.target.value)
    } 
    const onChangeDate = (event) => {
        setDate(event.target.value)
    }
    const onChangeInvoiceNum = (event) => {
        setInvoiceNum(event.target.value)
    }
    const onChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const onChangePackageSize = (event) => {
        setPakageQty(event.target.value)
    }
    const onChangeRetailPrice = (e) => {
        setRetailsPrice(e.target.value)
    }
    const onChangeRate = (e) => {
        setRate(e.target.value)
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
    const onChangeMfgDate = (e) => {
        setMfgDate(e.target.value)
    }

    const onSubmitPurchaseDetails = (event) => {
        event.preventDefault()
        const newId = PurchasedList.length + 1
        const newPurchasedItem = {
            id: newId,
            supId: supplier,
            ProId: product,
            rate: Rate,
            qty: Qty,
            disPercantege: Discount,
            cgst: CGst,
            sgst: SGst,
            Company: Company,
        }

        if (supplier !== '' && product !== '' && Rate !== '' && Qty !== '' && Discount !== '' && CGst !== '' && SGst !== '' && Company !== '' ) {
            setErrorRate(false)
            setErrorDiscount(false)
            setErrorQty(false)
            setErrorSGst(false)
            setErrorCGst(false)
            setPurchasedList((prevList) => [...prevList, newPurchasedItem])
        }else {
            setErrorRate(true)
            setErrorDiscount(true)
            setErrorQty(true)
            setErrorSGst(true)
            setErrorCGst(true)
        }
    }

    //onClick Edit row...
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    } 
    //onClick Remove Item funtion...
    const onClickRemoveItem = (id) => {
        const deletedList = PurchasedList.filter(e => e.id !== id)
        setPurchasedList(deletedList)
    }
    //Update the newRow...
    const updateTheNewRow = (product,Qty, Discount, SGst, CGst) => {
        const newRow = {
            product,Qty, Discount, SGst, CGst
        }
        setPurchasedList(PurchasedList.map((e, i) => {
            if (i !== rowToEdit) {
                return e
            }
            return newRow
        }))
    }

    return(
        <div className='app-card-container-classname'>
            <div className="app-container">
                <Sidenavbar />
                <div className="Home-app-container">
                    <Header />
                    <div className='categories-card-container'>
                        <div className='categories-header'>
                            <h1 className='sub-category-heading'>Purchase</h1>
                            <p className='category-name-des'><AiFillHome /> Dashboard / Purchase</p>
                        </div>
                        <form className='inputs-container-cards-is' onSubmit={onSubmitPurchaseDetails}>
                            <div className='purchase-information-card'>
                                <h1 className='Purchase-information'>Purchase Information</h1>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='Company' className='label'>Company</label>
                                        <select className='input' id="Company" value={Company} onChange={onChangeCompany}>
                                            <option selected value="Company1">Company1</option>
                                            <option value="Company2">Company2</option>
                                        </select>
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='supplier' className='label'>Supplier</label>
                                        <select className='input' id="supplier" value={supplier} onChange={onChangeSupplier}>
                                            <option selected value="supplier1">supplier1</option>
                                            <option value="supplier2">supplier2</option>
                                        </select>
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='Product' className='label'>Product</label>
                                        <select className='input' id="Product" value={product} onChange={onChangeProduct}>
                                            <option selected value="Product1">Product1</option>
                                            <option value="Product2">Product2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="date" className='label'>Date</label>
                                        <input id='date' value={date} className='input' type='date' placeholder='DD/MM/YY' onChange={onChangeDate} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="InvoiceNum" className='label'>Purchase Inv No</label>
                                        <input id='InvoiceNum' value={InvoiceNum} className='input' type='number' placeholder='Enter Purchase Invoice No' onChange={onChangeInvoiceNum} />
                                    </div>
                                </div>
                            </div>
                            <div className='purchase-information-card'>
                                <h1 className='Purchase-information'>Product Details</h1>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Quantity" className='label'>Qty/Unit:</label>
                                        <input id='Quantity' value={Quantity} className='input' type='number' placeholder='Enter Qty/Unit' onChange={onChangeQuantity} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="packageSize" className='label'>Pakage Size</label>
                                        <input id='packageSize' value={packageSize} className='input' type='number' placeholder='Enter Pakage Size' onChange={onChangePackageSize} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="retailsPrice" className='label'>Retail Price</label>
                                        <input id='retailsPrice' value={retailsPrice} className='input' type='number' placeholder='Enter Retail Price' onChange={onChangeRetailPrice} />
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Rate" className='label'>Rate</label>
                                        <input id='Rate' value={Rate} className='input' type='number' placeholder='Enter Rate' onChange={onChangeRate} />
                                        {ErrorRate && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Qty" className='label'>Qty</label>
                                        <input id='Qty' value={Qty} className='input' type='number' placeholder='Enter Qty' onChange={onChangeQty} />
                                        {ErrorQty && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Discount" className='label'>Discount</label>
                                        <input id='Discount' value={Discount} className='input' type='number' placeholder='Enter Discount' onChange={onChangeDiscount} />
                                        {ErrorDiscount && <p className='error-msg'>required feild</p>}
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="SGst" className='label'>SGst</label>
                                        <input id='SGst' value={SGst} className='input' type='number' placeholder='Enter SGst' onChange={onChangeSGst} />
                                        {ErrorSGst && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="CGst" className='label'>CGst</label>
                                        <input id='CGst' value={CGst} className='input' type='number' placeholder='Enter CGst' onChange={onChangeCGst} />
                                        {ErrorCGst && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="MfgDate" className='label'>Mfg Date</label>
                                        <input id='MfgDate' value={MfgDate} className='input' type='date' placeholder='Enter Mfg Date' onChange={onChangeMfgDate} />
                                    </div>
                                </div>
                                <button className='Add-category-button' type='submit'>Add Products Purchased</button>
                            </div>
                        </form>
                        <div className='ul-purchase-conatiner'>
                                <p className='Purchase-information'>Purchase List</p>
                                <table className='tabel-card'>
                                    <thead className='tabel-headers-card'>
                                        <tr>
                                            <th className='td-data-card'>Supplier ID</th>
                                            <th className='td-data-card'>Product ID</th>
                                            <th className='td-data-card'>Quantity</th>
                                            <th className='td-data-card'>Discount</th>
                                            <th className='td-data-card'>CGst</th>
                                            <th className='td-data-card'>SGst</th>
                                            <th className='td-data-card'>Company</th>
                                            <th className='td-data-card'>Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody className='tabel-data-details'>
                                        {PurchasedList.map((eachItem, index ) => (
                                            <tr className='row-table' key={index}>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.supId}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.ProId}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.qty}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.disPercantege}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.cgst}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.sgst}</p>
                                                </td>
                                                <td>
                                                    <p className='paragraph-name'>{eachItem.Company}</p>
                                                </td>
                                                <td className='buttons-card'>
                                                    <button className='edit-botton-class'onClick={() => handelEditRow(eachItem.id)}>Edit</button>
                                                    <button className='remove-botton-class' onClick={() => onClickRemoveItem(eachItem.id)}>Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='button-save-all-card'>
                                    <button className='save-all-botton-class'>Save All</button>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
            <div className='app-container'>
                {openModel && <PurchaseEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && PurchasedList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
    )
}
export default Purchase
