import React, { Component } from 'react'
import CProductList from '../Product/ProductList'
import CAdd from '../Form/Add'
import CEdit from '../Form/Edit'
import CDelete from '../Form/Delete'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class Home extends Component {

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
