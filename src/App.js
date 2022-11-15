import React, { Component } from 'react'
import CProductList from './Components/Product/ProductList'
import CAdd from './Components/Form/Add'
import CEdit from './Components/Form/Edit'
import CDelete from './Components/Form/Delete'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<CProductList />} />
          <Route path='/edit/:id' element={<CEdit />} />
          <Route path='/add' element={<CAdd />} />
          <Route path='/delete/:id' element={<CDelete />} />
        </Routes>
      </Router>
    )
  }
}