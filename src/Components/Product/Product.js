import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.product;
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    handleEditClick = (id) => {
        let navigate = useNavigate();
        navigate('/', {replace: true});
    }
    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                    <Link to={"/edit/" + product.id}><button className='btn btn-warning' style={{ marginRight: '10px' }}>Edit</button></Link>
                    <Link to={"/delete/" + product.id}><button className='btn btn-danger' style={{ marginRight: '10px' }}>Delete</button></Link>
                </td>
            </tr>
        )
    }
}
