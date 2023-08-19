import './index.css'
import ECMHeader from '../ECMHeader'

const ECMProduct = () => {
    return(
        <div className='ECM-Comapny-Home-card'>
            <ECMHeader />
            <div className='ECM-Data-container'>
                <h1 className='ECM-Heading'>Create Product</h1>
                <hr className='br-line' />
                <form className='ECM-form-container'>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='ID' className='ECM-label'>ID</label>
                        <input id="ID" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='PCode' className='ECM-label'>PCode</label>
                        <input id="PCode" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='PName' className='ECM-label'>PName</label>
                        <input id="PName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='PDesc' className='ECM-label'>PDesc</label>
                        <input id="PDesc" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='company-ID' className='ECM-label'>CompanyID</label>
                        <select id="company-ID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryID' className='ECM-label'>CategoryID</label>
                        <select id="CategoryID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryTypeID' className='ECM-label'>CategoryTypeID</label>
                        <select id="CategoryTypeID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='SupplierID' className='ECM-label'>SupplierID</label>
                        <select id="SupplierID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='QtyPerUnit' className='ECM-label'>QtyPerUnit</label>
                        <input id="QtyPerUnit" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='RetailerPrice' className='ECM-label'>RetailerPrice</label>
                        <input id="RetailerPrice" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='MRPPrice' className='ECM-label'>MRPPrice</label>
                        <input id="MRPPrice" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='PImage' className='ECM-label'>PImage</label>
                        <input id="PImage" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-buttons-conatiner'>
                        <div className='ECM-btns-card'>
                            <button type='button' className='ECM-back-btn'>
                                Back to List
                            </button>
                            <button type='button' className='ECM-create-btn'>
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ECMProduct