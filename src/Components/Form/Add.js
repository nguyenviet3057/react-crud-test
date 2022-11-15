import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import ProductListController from '../../Controller/ProductListController';
import Product from '../../Model/Product';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      category : "",
      description : "",
      isRedirect : false
    };
  }
  handleOnChangeName = (event) => {
    var e =  event.target.value;
    this.setState({
      name : e
    })
  }
  handleOnChangeCategory = (event) => {
    var e =  event.target.value;
    this.setState({
      category : e
    })
  }
  handleOnChangeDescription = (event) => {
    var e =  event.target.value;
    this.setState({
      description : e
    })
  }

  AddProduct = (event) => {
    if (this.state.name=="" || this.state.category=="" || this.state.description=="") {
      event.preventDefault();
      alert("Please fill the form !!!");
    } else {
      var newProduct = new Product(ProductListController().getInstance().getCount(), this.state.category, this.state.description, this.state.name);
      ProductListController().getInstance().getList().push(newProduct);
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
        <span className='lead mb-2 '><b>Add new product</b></span>
        <form className='form-control' style={{paddingTop:'20px', width:'500px'}}>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Name: </label>
            <input name='name' className='form-control' value={this.state.name} onChange={(event) => this.handleOnChangeName(event)}></input>
          </div>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Category: </label>
            <input name='category' className='form-control' value={this.state.category} onChange={(event) => this.handleOnChangeCategory(event)}></input>
          </div>
          <div className='input-group mb-3'>
            <label className='input-group-text'>Description: </label>
            <input name='description' className='form-control' value={this.state.description} onChange={(event) => this.handleOnChangeDescription(event)}></input>
          </div>
          <button className='btn btn-success' style={{marginRight:'10px'}} onClick={(event) => this.AddProduct(event)}>Add</button>
          <Link to="/"><button className='btn btn-secondary'>Cancel</button></Link>
        </form>
      </div>
    )
  }
}