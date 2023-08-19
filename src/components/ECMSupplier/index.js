import './index.css'
import ECMHeader from '../ECMHeader'

const ECMSupplier = () => {
    return(
        <div className='ECM-home-container'>
            <ECMHeader />
            <div className='ECM-Data-container'>
                <h1 className='ECM-Heading'>Create Supplier</h1>
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
                        <label htmlFor='supplierCompanyName' className='ECM-label'>supplierCompanyName</label>
                        <input id="supplierCompanyName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='SupplierName' className='ECM-label'>SupplierName</label>
                        <input id="SupplierName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='SupplierEmail' className='ECM-label'>SupplierEmail</label>
                        <input id="SupplierEmail" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='SupplierBussinessPh' className='ECM-label'>SupplierBussinessPh</label>
                        <input id="SupplierBussinessPh" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='SupplierMobilePh' className='ECM-label'>SupplierMobilePh</label>
                        <input id="SupplierMobilePh" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='Supplier_D' className='ECM-label'>Supplier_D</label>
                        <input id="Supplier_D" className="ECM-input" type="text"/>
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

export default ECMSupplier