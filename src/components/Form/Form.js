import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            imgUrl: "",
            name: "",
            price: ""
        }
        this.handleImg = this.handleImg.bind(this);
        this.handleProduct = this.handleProduct.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.addProd = this.addProd.bind(this);
        
    }

    addProd = () => {
        let{ name, price, imgUrl } = this.state
        axios.post('/api/inventory', {name, price, imgUrl}).then(response => {
            this.setState({
                name: name,
                price: price,
                imgUrl: imgUrl

            })
        }).catch(() => {console.log('error! you did not add to DB!!')})
        this.props.getInv();
        this.clearForm();
    }

    handleImg(e) {
        this.setState({
            imgUrl: e.target.value
        })
    }

    handleProduct(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value
        })
    }


    clearForm() {
        this.setState({
            imgUrl: "",
            name: "",
            price: ""
        })
    }


    render() {
        return (
            <div>
                <input value={this.state.imgUrl} type="text" onChange={this.handleImg} />
                <input value={this.state.name} type="text" onChange={this.handleProduct} />
                <input value={this.state.price} type="text" onChange={this.handlePrice} placeholder="0"/>
                <button onClick={this.clearForm}>Cancel</button>
                <button onClick={this.addProd}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form