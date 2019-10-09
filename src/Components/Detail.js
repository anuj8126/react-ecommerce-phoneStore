import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
class Detail extends Component {
    render() {
        return (
           
           <ProductConsumer>
               {
                   (value) =>{
                    const {id,company,img,info,price,title,inCart} = value.details;
                    return (
                        <div className="container py-5">
                        <div className="row">
                        
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        {/* <h1>{title}</h1> */}

                        <div className="col-10 mx-auto col-md-6 my-1">
                        <img src={img} className="img-fluid" alt="Product"></img>
                        </div>

                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                          <h2>Model : {title}</h2>
                          <h2>Company : {company}</h2>                      
                          <h2>Price : ${price}</h2>
                          <p className="font-weight-bold mt-3 mb-0" >
                          Product Info :
                          <p className="text-muted lead">{info}</p>
                          </p>
                          <Link to="/">
                          <ButtonContainer>
                              Back to details
                          </ButtonContainer>
                          </Link>
                          <ButtonContainer disabled={inCart?true:false}

                          cart 
                          onClick={()=>{
                              value.addtoCart(id);
                              value.openModel(id);
                          }}
                          >
                              {inCart?"inCart" : "Add to cart"}
                          </ButtonContainer>
                        </div>
                     
                      
                        </div>
                        </div>
                        </div>
                    )
                   }
               }
           </ProductConsumer>
          
        );
        
    }
}

export default Detail;
const ButtonContainer =  styled.button`
background-color:white;
color: ${props=>
    props.cart?"var(--mainyellow)":"var(--lightblue)"};;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid ${props=>
    props.cart?"var(--mainyellow)":"var(--lightblue)"};
border-radius: 3px;`
;
