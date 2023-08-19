import { useState } from 'react'
import {GrEdit} from 'react-icons/gr'
import {Popup} from 'reactjs-popup'

import './index.css'

const EditPopUp = ({categoryName}) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
return(
  <div className="popup-container">
    <Popup
      modal
      trigger={
          <button className='edit-btn'>
              <GrEdit />
          </button>
      }
    >
      {close => (
        <>
          <div className='popup-details-card'>
              <h1 className='edit-heading'>{categoryName}</h1>
              <br />
              <div className='inputs-card-container'>
                <div className='input-card-edit'>
                    <label htmlFor='type' className='label'>Type</label>
                    <select className='input-edit-cards-item' id="type" >
                      <option value="category1">Category1</option>
                      <option value="category2">Category2</option>
                    </select>
                </div>
                <div className='input-card-edit'>
                  <label htmlFor="name" className='label'>Name</label>
                  <input id='name' className='input-edit-cards-item' type='text' placeholder='Enter the name of category' />
                </div>
              </div>
              <div className='switch-card'>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p className='label-card'>Enable</p>
              </div>

              <div className='input-card-edit'>
                  <label className='label' htmlFor='image-file'>Image</label>
                  <input type="file" id='image-file' onChange={handleImageChange} />
                  {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
              </div>

              <div className='edit-cart-buttons-card'>
                <button className='save-changes-btn'>Save changes</button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => close()}
                >
                  Close
                </button>
              </div>
          </div>
          
        </>
      )}
    </Popup>
  </div>
 )
} 
export default EditPopUp