import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Category from './components/category'
import SubCategories from './components/SubCategories';
import Dummy from './components/Dummy'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Dummy} />
          <Route exact path="/dashboard/category" Component={Category} />
          <Route exact path="/dashboard/category/subcategories" Component={SubCategories} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
