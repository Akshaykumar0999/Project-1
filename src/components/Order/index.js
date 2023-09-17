import React, { useState } from 'react'
import Sidenavbar from '../Sidenavbar'
import Header from '../Header/index.js'
import {AiFillHome} from 'react-icons/ai'
import OrderEditPopUpPage from '../OrderEditPopUpPage'

import './index.css'
const defaultList = [
    {
        id:1,
        Product: 'Product-1',
        Rate: 100,
        Qty: 10,
        Discount: "22%",
        SGst: 10.00,
        CGst: 9.00,
    },
    {
        id:2,
        Product: 'Product-2',
        Rate: 200,
        Qty: 10,
        Discount: "12%",
        SGst: 10.00,
        CGst: 9.00,
    },
    {
        id:3,
        Product: 'Product-3',
        Rate: 300,
        Qty: 20,
        Discount: "10%",
        SGst: 10.00,
        CGst: 9.00,
    }
]
const Order = () => {
    const [Customer , setCustomer] = useState('')
    const [TrCharges, setTrCharges] = useState('')
    const [Company, setComapny] = useState('')
    
    const [date, setDate] = useState("")
    const [MRP, setMRP] = useState('')
    const [orderNo, setOrderNo] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [packageSize, setPakageQty] = useState('')
    const [retailsPrice, setRetailsPrice] = useState('')
    const [GST, setGst] = useState('')
    
    //OrderItems From hooks
    const [Product, setProduct] = useState('') 
    const [Rate, setRate] = useState('')
    const [Qty, setQty] = useState('')
    const [Discount, setDiscount] =useState('')
    const [SGst, setSGst] = useState('')
    const [CGst, setCGst] = useState('')


    const [rowToEdit, setRowToEdit] = useState('')
    const [openModel, setOpenModule] = useState(false)

    const [OrderItemsList , setOrderDetailsItemsList] = useState(defaultList)

    //onChnage order Items Functions ....
    const onChangeProduct = (e) => {
        setProduct(e.target.value)
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

    const onChangeTransportcharges = (event) => {
        setTrCharges(event.target.value)
    }
    const onChangeCompany = (event) => {
        setComapny(event.target.value)
    }
    const onChangeCustomer = (event) => {
        setCustomer(event.target.value)
    } 
    const onChangeDate = (event) => {
        setDate(event.target.value)
    }
    const onChangeorderNo = (event) => {
        setOrderNo(event.target.value)
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
    const onChangeGST = (e) => {
        setGst(e.target.value)
    }
    const onChangeMRP = (e) => {
        setMRP(e.target.value)
    }
    
    //Error Msgs For order Items Details hooks.....
    const [errorRate, setErrorRate] = useState(false)
    const [errorQty, setErrorQty] = useState(false)
    const [errorDiscount, setErrorDiscount] = useState(false)
    const [errorSGst, setErrorSGst] = useState(false)
    const [errorCGst, setErrorCGst] = useState(false)

    //onSubmit functions...
    const onSubmitOrderDetails = (event) => {
        event.preventDefault()
        const newId = OrderItemsList.length + 1
        const newObject = {
            id: newId,
            Product,
            Rate,
            Qty,
            Discount,
            SGst,
            CGst,
        }

        if (Product !== '' && Rate !== '' && Qty !== '' && Discount !== '' && CGst !== '' && SGst !== '') {
            setErrorRate(false)
            setErrorQty(false)
            setErrorDiscount(false)
            setErrorSGst(false)
            setErrorCGst(false)
            setOrderDetailsItemsList(prevState => [...prevState, newObject])
        }else {
            setErrorRate(true)
            setErrorQty(true)
            setErrorDiscount(true)
            setErrorSGst(true)
            setErrorCGst(true)
        }
    }

    //onClick Remove Item funtion...
    const onClickRemoveItem = (id) => {
        const deletedList = OrderItemsList.filter(e => e.id !== id)
        setOrderDetailsItemsList(deletedList)
    }

    //onClick Edit row...
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    } 

    //onBlur Funtions...
    const onBlurRate = () => {
        if (Rate !== ''){
            setErrorRate(false)
        }else{
            setErrorRate(true)
        }
    }
    const onBlurQty = () => {
        if (Qty !== ''){
            setErrorQty(false)
        }else{
            setErrorQty(true)
        }
    }
    const onBlurDiscount = () => {
        if (Discount !== ''){
            setErrorDiscount(false)
        }else{
            setErrorDiscount(true)
        }
    }
    const onBlurSGst = () => {
        if (SGst !== ''){
            setErrorSGst(false)
        }else{
            setErrorSGst(true)
        }
    }
    const onBlurCGst = () => {
        if (CGst !== ''){
            setErrorCGst(false)
        }else{
            setErrorCGst(true)
        }
    }



    //Update the newRow...
    const updateTheNewRow = (Product,Qty,Rate, Discount, SGst, CGst) => {
        const newRow = {
            Product,
            Rate,
            Qty,
            Discount,
            SGst,
            CGst,
        }
        setOrderDetailsItemsList(OrderItemsList.map((e, i) => {
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
                            <h1 className='sub-category-heading'>Order</h1>
                            <p className='category-name-des'><AiFillHome /> Dashboard / Order</p>
                        </div>
                        <form className='inputs-container-cards-is' onSubmit={onSubmitOrderDetails}>
                            <div className='purchase-information-card'>
                                <h1 className='Purchase-information'>Order</h1>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="orderNo" className='label'>Order No</label>
                                        <input id='orderNo' value={orderNo} className='input' type='number' placeholder='Enter Order No' onChange={onChangeorderNo} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='Company' className='label'>Company</label>
                                        <select className='input' id="Company" value={Company} onChange={onChangeCompany}>
                                            <option selected value="Company1">Company1</option>
                                            <option value="Company2">Company2</option>
                                        </select>
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='Customer' className='label'>Customer</label>
                                        <select className='input' id="Customer" value={Customer} onChange={onChangeCustomer}>
                                            <option selected value="Customer1">Customer1</option>
                                            <option value="Customer2">Customer2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="date" className='label'>Ordered Date</label>
                                        <input id='date' value={date} className='input' type='date' placeholder='DD/MM/YY' onChange={onChangeDate} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="InvoiceNum" className='label'>DC#</label>
                                        <input id='InvoiceNum'  className='input' type='number' placeholder='Enter Purchase Invoice No' />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="InvoiceNum" className='label'>Dummy#</label>
                                        <input id='InvoiceNum' className='input' type='number' />
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="TrCharges" className='label'>Transport Charges</label>
                                        <input id='TrCharges' value={TrCharges} className='input' type='number'  onChange={onChangeTransportcharges} />
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
                                        <label htmlFor="MRP" className='label'>MRP Price</label>
                                        <input id='MRP' value={MRP} className='input' type='number' placeholder='Enter MRP' onChange={onChangeMRP} />
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="retailsPrice" className='label'>Retail Price</label>
                                        <input id='retailsPrice' value={retailsPrice} className='input' type='number' placeholder='Enter Retail Price' onChange={onChangeRetailPrice} />
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="GST" className='label'>GST</label>
                                        <input id='GST' value={GST} className='input' type='number' placeholder='Enter GST' onChange={onChangeGST} />
                                    </div>
                                </div>
                            </div>
                            <div className='purchase-information-card'>
                                <h1 className='Purchase-information'>Order Items</h1>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor='Product' className='label'>Product</label>
                                        <select className='input' id="Product" value={Product} onChange={onChangeProduct}>
                                            <option value="Product1">Product1</option>
                                            <option value="Product2">Product2</option>
                                        </select>
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Rate" className='label'>Rate</label>
                                        <input id='Rate' value={Rate} className='input' type='number' placeholder='Enter Rate' onChange={onChangeRate} onBlur={onBlurRate}/>
                                        {errorRate && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Qty" className='label'>Qty</label>
                                        <input id='Qty' value={Qty} className='input' type='number' placeholder='Enter Qty' onChange={onChangeQty} onBlur={onBlurQty} />
                                        {errorQty && <p className='error-msg'>required feild</p>}
                                    </div>
                                </div>
                                <div className='purchase-information-containers'>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="Discount" className='label'>Discount</label>
                                        <input id='Discount' value={Discount} className='input' type='number' placeholder='Enter Discount' onChange={onChangeDiscount} onBlur={onBlurDiscount} />
                                        {errorDiscount && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="SGst" className='label'>SGst</label>
                                        <input id='SGst' value={SGst} className='input' type='number' placeholder='Enter SGst' onChange={onChangeSGst} onBlur={onBlurSGst} />
                                        {errorSGst && <p className='error-msg'>required feild</p>}
                                    </div>
                                    <div className='purchase-input-card'>
                                        <label htmlFor="CGst" className='label'>CGst</label>
                                        <input id='CGst' value={CGst} className='input' type='number' placeholder='Enter CGst' onChange={onChangeCGst} onBlur={onBlurCGst} />
                                        {errorCGst && <p className='error-msg'>required feild</p>}
                                    </div>
                                </div>
                                <button className='Add-category-button' type='submit'>Add</button>
                            </div>
                        </form>
                        <div className='ul-purchase-conatiner'>
                            <p className='Purchase-information'>Purchase List</p>
                            <table className='tabel-card'>
                                <thead className='tabel-headers-card'>
                                    <tr>
                                        <th className='td-data-card'>Product</th>
                                        <th className='td-data-card'>Rate</th>
                                        <th className='td-data-card'>Quantity</th>
                                        <th className='td-data-card'>Discount</th>
                                        <th className='td-data-card'>SGst</th>
                                        <th className='td-data-card'>CGst</th>
                                        <th className='td-data-card'>Operations</th>
                                    </tr>
                                </thead>
                                <tbody className='tabel-data-details'>
                                    {OrderItemsList.map((eachItem, index ) => (
                                        <tr className='row-table' key={index}>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.Product}</p>
                                            </td>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.Rate}</p>
                                            </td>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.Qty}</p>
                                            </td>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.Discount}</p>
                                            </td>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.SGst}</p>
                                            </td>
                                            <td>
                                                <p className='paragraph-name'>{eachItem.CGst}</p>
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
                {openModel && <OrderEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && OrderItemsList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
    )
}
export default Order