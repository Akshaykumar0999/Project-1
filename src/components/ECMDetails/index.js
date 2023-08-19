import './index.css'
import ECMHeader from '../ECMHeader'

const ECMDetails = () => {
    return(
        <div className='ECM-home-container'>
            <ECMHeader />
            <div className='ECM-Data-container'>
                <h1 className='ECM-Heading'>Create Category</h1>
                <hr className='br-line' />
                <form className='ECM-form-container'>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='ID' className='ECM-label'>ID</label>
                        <input id="ID" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='company-ID' className='ECM-label'>CompanyID</label>
                        <select id="company-ID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryName' className='ECM-label'>CategoryName</label>
                        <input id="CategoryName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryDescription' className='ECM-label'>CategoryDescription</label>
                        <input id="CategoryDescription" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryImage' className='ECM-label'>CategoryImage</label>
                        <input id="CategoryImage" className="ECM-input" type="text"/>
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

export default ECMDetails