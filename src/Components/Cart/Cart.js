import React, { Component } from 'react';
import Title from '../Title';
import Cartcol from './Cartcol';
import Emptycart from './Emptycart';
import {ProductConsumer} from '../../Context';
import Cartlist from './Cartlist';
import Carttotal from './Carttotal'

class Cart extends Component {
    render() {
        return (
            <div>
    <ProductConsumer>
        {
            (value)=>{
                const {cart} = value;
                if(cart.length>0){
                  return(
                      <>
                    <Title name="Your" title="Cart"/>
                    <Cartcol/>
                    <Cartlist value={value}></Cartlist>
                    <Carttotal value={value}/>
                    </>
                  ) 
                }else{
                    return <Emptycart/>
                }
            }
        }
    </ProductConsumer>
               
               
               
            </div>
        );
    }
}

export default Cart;