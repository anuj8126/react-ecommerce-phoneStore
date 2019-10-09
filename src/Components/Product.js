import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropsTypes from 'prop-types';
class Product extends Component {
    render() {
        const {id,title ,img ,price ,inCart} = this.props.product;
        return (
           
             
           <ProductWrapper className="col-9 mx-auto  col-lg-3 my-3">
           
           <div className="card">
           <ProductConsumer>
               {
                  
                  (value) => (
                    
                    
                    <div className="img-container p-5" onClick={()=>{
                        console.log(value.handleDetail(id));
                       
                        
                    }}>
                    <Link to="/detail">
                    <img src={img} className="card-img-top"></img>
                    </Link>
                    <button className="btn-cart" disabled={inCart ? true : false} onClick={()=>{
                    value.addtoCart(id);
                    value.openModel(id);
                    
                    }}>
                    
                    {inCart ? (<p className="text-capitalize mb-0">in cart</p>):
                    (<i className="fas fa-cart-plus"/>)}
                     
                     
                    </button>
                   
                    
                    </div>
                   
                


                  

)
               }
           
           </ProductConsumer>
           <div className="card-footer d-flex justify-content-between ">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span>{price}
                    </h5>
         
                </div>
           </div>

           </ProductWrapper> 
           
           
        );
    }
}
Product.PropsTypes = {
    product:PropsTypes.shape({
        id : PropsTypes.number,
        img : PropsTypes.string,
        inCart: PropsTypes.bool,
        title: PropsTypes.string,
        price : PropsTypes.number
       

    }).isRequired
};

export default Product;


const ProductWrapper = styled.div`


.card{
    border-color: transparent;
    
    transition-property:  border-radius;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}
.card-footer{
    background: transparent;
        border-top:transparent;
        transition-property:  border-radius;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgb(0,0,0,0.2);
        box-shadow : 2px  2px  5px 0px rgb(0,0,0,0.2);
        
    }
    .card-footer{
        background: rgb(247,247,247);
       
    }
}
.img-container{
    position : relative;
    overflow: hidden;

}
.card-img-top{
    
    transition-duration: 0.8s;
    transition-property:  transform;
}
.img-container:hover .card-img-top{
    transform : scale(1.2);
}

.btn-cart {
    position: absolute;
    padding: 0.4rem 0.6em;
    bottom:0;
    right:0;
    background:var(--mainblue);
    color:var( --mainwhite);
    border: none;
    border-radius: 0.5rem 0 0 0;
    transition-duration: 0.8s;
    transform:translate(100%,100%);
    transition-property: transform;


}

.img-container:hover .btn-cart  {
    
    transform : translate(0,0);
}
.btn-cart : hover{
    cursor:pointer;
    color: #f05E23;
}

`; 

