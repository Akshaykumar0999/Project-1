import {BiMenu} from 'react-icons/bi'
// import {IoMdArrowDropdown} from 'react-icons/io'
import './index.css'

const Header = ({toggleSideNavbar}) => {
    return(
        <div className='Header-container-card'>
            <nav className='nav-container'>
                    <div className='first-header-container'>
                        <button type="button" className='menu-button' onClick={toggleSideNavbar}>
                            <BiMenu className='icon-menu'/>
                        </button>
                        <p className='Paragraph-card'>Demo Mode</p>
                    </div>
                    <div className='name-select'>
                        <select className='language-selector-card'>
                            <option>EN</option>
                            <option>HI</option>
                        </select>
                        <div className='profile-card'>
                            <img  src="https://picsum.photos/seed/picsum/200/300" alt="p" className='profile-image' />
                            <select className='profiles-selector-card'>
                                <option className='profiles-selector-card'>Hi Admin</option>
                                <option className='profiles-selector-card'>Hi User</option>
                            </select>
                        </div>
                    </div>
            </nav>
        </div>
    )
    
}
export default Header