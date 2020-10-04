import React, { Component } from 'react';
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.onChangename= this.onChangename.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        this.onChangeproduct_id = this.onChangeproduct_id.bind(this);
        this.onChangeorderId = this.onChangeorderId.bind(this);
        this.onChangeorder_status = this.onChangeorder_status.bind(this);
        //this.onChangeorder_completed = this.onChangeorder_completed.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        
        this.state = {
            name: '',
            quantity: '',
            product_id: '',
            orderId:'',
            order_status: '',
            //order_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/produts/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: this.state.name,
                    quantity: this.state.quantity,
                    product_id: this.state.product_id,
                    orderId: this.state.orderId,
                    order_status: this.state.order_status,
                    //order_completed: this.state.order_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
        const obj = {
            name: this.state.name,
            quantity: this.state.quantity,
            product_id: this.state.product_id,
            orderId: this.state.orderId,
            order_status: this.state.order_status,
            //order_completed: this.state.order_completed

        };
        console.log(obj);
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update</h3>
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
                       <label>New quantity: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangequantity}
                            />
                      </div>

                      <div className="form-group">
                         <label>New product id: </label>
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
                            <label className="form-check-label">Done</label>
               
                          
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