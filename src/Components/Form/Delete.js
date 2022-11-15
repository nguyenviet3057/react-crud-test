import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import ProductListController from '../../Controller/ProductListController';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    const path = window.location.pathname;
    const product_id = path.substring(path.lastIndexOf("/")+1);
    var product = ProductListController().getInstance().getList().filter(data=>data.id==product_id)[0];
    this.state = {
      product : product,
      isRedirect : false
    };
  }

  DeleteProduct = (product, event) => {
    let choice = window.confirm("Are you sure to delete this product ?");
    if (!choice) {
      event.preventDefault();
    } else {
      ProductListController().getInstance().getList().splice(ProductListController().getInstance().getList().indexOf(product),1);
      this.setState({
        isRedirect : true
      })
    }
  }

  render() {
    if (this.state.isRedirect) {
      return <Navigate to="/" />
    }
    return (
      <div className='container d-flex flex-column justify-content-center' style={{height:'100vh', alignItems:'center'}}>
        <span className='lead mb-2 '><b>Delete this product</b></span>
        <form className='form-control' style={{paddingTop:'20px', width:'500px'}}>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Name: </label>
            <input name='name' className='form-control' value={this.state.product.name} disabled></input>
          </div>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Category: </label>
            <input name='category' className='form-control' value={this.state.product.category} disabled></input>
          </div>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Description: </label>
            <input name='description' className='form-control' value={this.state.product.description} disabled></input>
          </div>
          <button className='btn btn-success' type='submit' style={{marginRight:'10px'}} onClick={(event) => this.DeleteProduct(this.state.product, event)}>Delete</button>
          <Link to="/"><button className='btn btn-secondary'>Cancel</button></Link>
        </form>
      </div>
    )
  }
}
