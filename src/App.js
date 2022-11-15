import React, { Component } from 'react'
import CProductList from './Components/Product/ProductList'
import CAdd from './Components/Form/Add'
import CEdit from './Components/Form/Edit'
import CDelete from './Components/Form/Delete'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={CProductList} />
          <Route exact path='/edit/:id' component={CEdit} />
          <Route exact path='/add' component={CAdd} />
          <Route exact path='/delete/:id' component={CDelete} />
        </Switch>
      </Router>
    )
  }
}