import './index.css'
import ECMHeader from '../ECMHeader'

const ECMCompany = () => {
    return(
        <div className='ECM-Comapny-Home-card'>
            <ECMHeader />
            <div className='ECM-Data-container'>
                <h1 className='ECM-Heading'>Create Company</h1>
                <hr className='br-line' />
                <form className='ECM-form-container'>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CName' className='ECM-label'>CName</label>
                        <input id="CName" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CAdress' className='ECM-label'>CAdress</label>
                        <input id="CAdress" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CCity' className='ECM-label'>CCity</label>
                        <input id="CCity" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CState' className='ECM-label'>CState</label>
                        <input id="CState" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CPostalCode' className='ECM-label'>CPostalCode</label>
                        <input id="CPostalCode" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CBussinessPhone' className='ECM-label'>CBussinessPhone</label>
                        <input id="CBussinessPhone" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CGST' className='ECM-label'>CGST</label>
                        <input id="CGST" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CBank' className='ECM-label'>CBank</label>
                        <input id="CBank" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CBankAccount' className='ECM-label'>CBankAccount</label>
                        <input id="CBankAccount" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CBankBranch' className='ECM-label'>CBankBranch</label>
                        <input id="CBankBranch" className="ECM-input" type="text"/>
                    </div>
                    <div className='ECM-input-card-Container'>
                        <label htmlFor='CISFC' className='ECM-label'>CISFC</label>
                        <input id="CISFC" className="ECM-input" type="text"/>
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

export default ECMCompany