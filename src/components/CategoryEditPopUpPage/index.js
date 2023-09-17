import React, {useState} from 'react'
import './index.css'

const CategoryEditPopUpPage = ({closePopup, defaultValues, updateTheNewRow}) => {
    const [editName, setEditName] = useState(defaultValues.name || '')
    const [editDes, setEditDes] = useState(defaultValues.description || '')
    const [EStatus, setEStatus] = useState(false)
    const [selectedImage, setSelectedImage] = useState(defaultValues.selectedImage || null);
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedImage(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
    };
    const onChangeEditName = (e) => {
        setEditName(e.target.value)
    }
    const onChangeEditDes = (e) => {
        setEditDes(e.target.value)
    }
    const onChangeEditStatus = () => {
        setEStatus(PrevState => (!PrevState))
    }
    const OnSaveChanges = () => {
        updateTheNewRow(editDes,editName,EStatus,selectedImage)

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
            <form className='popup-details-card'>
                    <h1 className='edit-heading'>Category</h1>
                    <br />
                    <div className='inputs-card-container'>
                        <div className='input-card-edit'>
                            <label htmlFor="name" className='label'>Name</label>
                            <input id='name' className='input-edit-cards-item' type='text' value={editName} placeholder='Enter the name' onChange={onChangeEditName} />
                        </div>
                        <div className='input-card-edit'>
                            <label htmlFor="des" className='label'>Description</label>
                            <input id='des' className='input-edit-cards-item' type='text' value={editDes} placeholder='Enter a small note on category' onChange={onChangeEditDes} />
                        </div>
                    </div>
                    <div className='switch-card'>
                        <label className="switch">
                            <input type="checkbox" onChange={onChangeEditStatus} value={EStatus}/>
                            <span className="slider round"></span>
                        </label>
                        <p className='label-card'>{EStatus ? "Active" : "InActive"}</p>
                    </div>
                    <div className='input-card-edit'>
                        <label className='label' htmlFor='image-file'>Image</label>
                        <input type="file" id='image-file' onChange={handleImageChange} />
                        {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
                    </div>

                    <div className='edit-cart-buttons-card'>
                        <button className='save-changes-btn' onClick={OnSaveChanges}>Save changes</button>
                        <button type="button" className="close-btn" onClick={OnCancelPage}>Close</button>
                    </div>
            </form>
        </div>
    )
}

export default CategoryEditPopUpPage