import React, { Component } from 'react';
import Product from  './Product'
import Title from './Title';

import {ProductConsumer} from '../Context';
class Productlist extends Component {

    render() {
        //console.log(this.state.product);
        return (
            <>
            <div className="py-5 my-2">
            <div className="conatiner">
            <Title  name="Our" title="Product"/>
            < div className ="row">
            <ProductConsumer>
                {
                    value => {
                       return value.products.map(product =>{
                           return <Product product={product} key ={product.id} />
                       });
                    }
                }
            </ProductConsumer>
            </ div>
            </div>
            </div>
            
            </>
        );
    }
}

export default Productlist;