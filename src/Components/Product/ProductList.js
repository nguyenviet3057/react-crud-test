import React, { Component } from 'react'
import CProduct from './Product'
import ProductListController from '../../Controller/ProductListController'
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : ProductListController().getInstance().getList()
    }
  }
  
  render() {
    let row = []
    this.state.products.forEach((product) => {
      row.push(<CProduct key={product.id} product={product} functEditProduct={this.props.functEditProduct}/>)
    })
    return (
      <div className='container d-flex flex-column justify-content-center' style={{height:'100vh'}}>
        <div style={{marginBottom:'10px'}}>
          <Link to="/add"><button className='btn btn-success'>Add</button></Link>
        </div>
        <div className='container d-flex justify-content-center' style={{padding:'0px'}}>
          <table className='table table-bordered'>
            <thead className='bg-info text-center'>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th style={{width:'200px'}}></th>
              </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
