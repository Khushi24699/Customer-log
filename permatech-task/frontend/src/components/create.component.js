import React, { Component } from 'react';
import axios from 'axios'

export default class Create extends Component {
    constructor(props) {
        super(props);
        // this.onChangeid = this.onChangeid.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        this.onChangeproduct_id = this.onChangeproduct_id.bind(this);
        this.onChangeorderId = this.onChangeorderId.bind(this);
        this.onChangeorder_status = this.onChangeorder_status.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // id: '',
            name: '',
            quantity: '',
            product_id: '',
            orderId: '',
            order_status: '',
            //order_completed: false

        }
    }

    // onChangeid(e) {
    //     this.setState({
    //         id: e.target.value
    //     });
    // }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangequantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeproduct_id(e) {
        this.setState({
            product_id: e.target.value
        });
    }

    onChangeorderId(e) {
        this.setState({
            orderId: e.target.value
        });
    }

    onChangeorder_status(e) {
        this.setState({
            order_status: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        const newProduct = {
            name: this.state.name,
            quantity: this.state.quantity,
            product_id: this.state.product_id,
            orderId: this.state.orderId,
            order_status: this.state.order_status,
            order_completed: this.state.order_completed

        };

        axios.post('http://localhost:4000/products/add', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            // id: '',
            name: '',
            quantity: '',
            product_id: '',
            orderId: '',
            order_status: '',
            order_completed: false

        })
    }

    render() {
        return ( 
        <div>
            <h3 align="center">Create</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}
                            />
                </div>
                <div className="form-group">
                   <label>Quantity: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.quantity}
                        onChange={this.onChangequantity}
                        />
                  </div>

                  <div className="form-group">
                     <label>Enter product id: </label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={this.state.product_id}
                        onChange={this.onChangeproduct_id}
                        />
                   </div>

                   <div className="form-group">
                     <label>Enter order id: </label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={this.state.orderId}
                        onChange={this.onChangeorderId}
                        />
                    </div>
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                            type="radio" 
                            name="statusOptions" 
                            id="statuspro" 
                            value="processing"
                            checked={this.state.order_status==='processing'} 
                            onChange={this.onChangeorder_status}
                            />
                       <label className="form-check-label">processing</label>
                   </div>
                   <div className="form-check form-check-inline">
                     <input  className="form-check-input" 
                            type="radio" 
                            name="statusOptions" 
                            id="statuspro" 
                            value="Done" 
                            checked={this.state.order_status==='Done'} 
                            onChange={this.onChangeorder_status}
                            />
                    <label className="form-check-label">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg>
                    </label>
                </div>
                
            </div>
                
            <br />

                <div className="form-group">
                    <input type="submit" value="Update" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
}