import React, {useState} from 'react'
import './index.css'

const ProductEditPopUpPage = ({closePopup, defaultValues, updateTheNewRow}) => {
    const [PId, setProductId] = useState(defaultValues.PId || '')
    const [Pcode, setPcode] = useState(defaultValues.Pcode || '')
    const [Pname , setPName] = useState(defaultValues.Pname || '')
    const [PDescription, setProductDescription] = useState(defaultValues.PDescription || '')
    const [companyId, setCompanyId] = useState(defaultValues.companyId || '')
    const [categoryId, setCategoryId] = useState(defaultValues.categoryId || '')
    const [categoryTypeId , setCategoryTypeId] = useState(defaultValues.categoryTypeId || '')
    const [supplierId, setSupplierId] = useState(defaultValues.supplierId || '')
    const [QtyPerUnt , setQntPerUnt] = useState(defaultValues.QtyPerUnt || '')
    const [Rprice, setRetailPrice] = useState(defaultValues.Rprice || '')
    const [MrpPrice, setMrpPrice] = useState(defaultValues.MrpPrice || '')
    const [selectedImage, setSelectedImage] = useState(defaultValues.selectedImage || null);
    
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


    const OnSaveChanges = () => {
        updateTheNewRow(PId, Pcode, Pname, PDescription, categoryId, companyId, categoryTypeId, supplierId, QtyPerUnt, Rprice, MrpPrice, selectedImage)

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
                            <label htmlFor="id" className='label'>Product Id</label>
                            <input id='id' value={PId} className='input' type='number' placeholder='Enter the product Id' onChange={onChangeProductId} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="Pcode" className='label'>Product code</label>
                            <input id='Pcode' value={Pcode} className='input' type='number' placeholder='Enter the product code' onChange={onChnagePcode} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="name" className='label'>Product Name</label>
                            <input id='name' value={Pname} className='input' type='text' placeholder='Enter the product name' onChange={onChnageName} />
                        </div>                
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="des" className='label'>Product Description</label>
                            <input id='des' value={PDescription} className='input' type='text' placeholder='Enter the product Descrition' onChange={onChangeProductDes} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor='companyId' className='label'>Company Id</label>
                            <select className='input' id="companyId" value={companyId} onChange={onChangeCompanyId}>
                                <option >Com1</option>
                                <option >Com2</option>
                            </select>
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor='categoryId' className='label'>Category Id</label>
                            <select className='input' id="categoryId" value={categoryId} onChange={onChangeCategoryId}>
                                <option >Category1</option>
                                <option >Category2</option>
                            </select>
                        </div>             
                    </div>
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor='categoryTypeId' className='label'>Category Type Id</label>
                            <select className='input' id="categoryTypeId" value={categoryTypeId} onChange={onChangeCategoryTypeId}>
                                <option >Cat1</option>
                                <option >Cat2</option>
                            </select>
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor='SupplierId' className='label'>Supplier Id</label>
                            <select className='input' id="SupplierId" value={supplierId} onChange={onChangeSupplierId}>
                                <option >Supplier1</option>
                                <option >Supplier2</option>
                            </select>
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="QunatityPerUnit" className='label'>Quantity Per Unit</label>
                            <input id='QunatityPerUnit' value={QtyPerUnt} className='input' type='number' placeholder='Quantity Per Unit' onChange={onChnageQtyPruUnit} />
                        </div>     
                    </div> 
                    <div className='inputs-card-container'>
                        <div className='input-card-company'>
                            <label htmlFor="Rprice" className='label'>Retail Price</label>
                            <input id='Rprice' value={Rprice} className='input' type='number' onChange={RetailPrice} />
                        </div>
                        <div className='input-card-company'>
                            <label htmlFor="MPrice" className='label'>MRP Price</label>
                            <input id='MPrice' value={MrpPrice} className='input' type='number' onChange={MRPPrice} />
                        </div>
                        <div className='input-card-company'>
                            <label className='label' htmlFor='image-file'>Image</label>
                            <input type="file" id='image-file' onChange={handleImageChange} />
                            {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
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

export default ProductEditPopUpPage