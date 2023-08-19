import './index.css'
import ECMHeader from '../ECMHeader'

const ECMCategoryType = () => {
    return(
        <div className='ECM-home-container'>
            <ECMHeader />
            <div className='ECM-Data-container'>
                <h1 className='ECM-Heading'>Create Category Type</h1>
                <hr className='br-line' />
                <form className='ECM-form-container'>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='ID' className='ECM-label'>ID</label>
                        <input id="ID" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CategoryID' className='ECM-label'>CategoryID</label>
                        <select id="CategoryID" className="ECM-Select-input">
                            <option selected className='ECM-Select-input'>option1</option>
                            <option className='ECM-Select-input'>option2</option>
                        </select>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CatTypeName' className='ECM-label'>CatTypeName</label>
                        <input id="CatTypeName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CatTypeDes2' className='ECM-label'>CatTypeDes2</label>
                        <input id="CatTypeDes2" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CatTypeDes3' className='ECM-label'>CatTypeDes3</label>
                        <input id="CatTypeDes3" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CatTypeDes4' className='ECM-label'>CatTypeDes4</label>
                        <input id="CatTypeDes4" className="ECM-input" type="text"/>
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

export default ECMCategoryType