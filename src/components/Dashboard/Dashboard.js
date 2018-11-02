import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        let { list } = this.props;
       const listDisplay = list.map((prod, i) => {
          return  <Product 
            key={i}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            />
        })
        return (
            <div>
                {listDisplay}
                DashBoard Component
            </div>
        )
    }
}

export default Dashboard