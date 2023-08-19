import Header from '../Header'
import Modules from '../Modules'

import './index.css'

const Dummy = () => (
    <div className='Home-app-conatiner'>
        <Modules />
        <div  className='home-card-container'>
            <Header />
            <div>
                <h1>Not Found</h1>
            </div>
        </div>
    </div>
)
export default Dummy