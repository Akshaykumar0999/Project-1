import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Category from './components/Category';
import Company from './components/Company';
import Purchase from './components/Purchase';
import Product from './components/Product';
import Order from './components/Order';
import Supplier from './components/Supplier';
import SubCategories from './components/SubCategories';
import DummyOne from './components/DummyOne';
import DummyTwo from './components/DummyTwo';
import DummyThree from './components/DummyThree';
import DummyFour from './components/DummyFour';
import DummyFive from './components/DummyFive';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/home" Component={Home} />
          <Route path="/dashboard/category" Component={Category} />
          <Route path="/dashboard/company" Component={Company} />
          <Route path="/dashboard/product" Component={Product} />
          <Route path="/dashboard/supplier" Component={Supplier} />
          <Route path="/dashboard/order" Component={Order} />
          <Route path="/dashboard/category/sub-categories" Component={SubCategories} />
          <Route path="/dashboard/purchase" Component={Purchase} />
          <Route path="/dummy-1" Component={DummyOne} />
          <Route path="/dummy-2" Component={DummyTwo} />
          <Route path="/dummy-3" Component={DummyThree} />
          <Route path="/dummy-4" Component={DummyFour} />
          <Route path="/dummy-5" Component={DummyFive} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
