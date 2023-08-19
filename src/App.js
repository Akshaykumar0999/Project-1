import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Category from './components/category'
import SubCategories from './components/SubCategories';
import ECMDetails from './components/ECMDetails'
import ECMCategoryType from './components/ECMCategoryType'
import ECMCompany from './components/ECMCompany'
import ECMProduct from './components/ECMProduct'
import ECMSupplier from './components/ECMSupplier'
import Dummy from './components/Dummy'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Dummy} />
          <Route exact path="/dashboard/category" Component={Category} />
          <Route exact path="/dashboard/category/subcategories" Component={SubCategories} />
          <Route exact path="/Ecm-details" Component={ECMDetails} />
          <Route exact path="/Ecm-category-type" Component={ECMCategoryType} />
          <Route exact path="/Ecm-company" Component={ECMCompany} />
          <Route exact path="/Ecm-product" Component={ECMProduct} />
          <Route exact path="/Ecm-supplier" Component={ECMSupplier} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
