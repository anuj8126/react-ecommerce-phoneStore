import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

class Model extends Component {
    render() {
        return (
           <ProductConsumer>
               {
        (value)=>{
            const {modelOpen , closeModel} = value;
            const{img,title,price,id,inCart} = value.modelProduct;
            

            if(!modelOpen){
                return null;
            }else{
                return(
               <ModelContainer>
                  
                 <div className="container">
                 <div className="row">
                
                 <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3">
                          <h5>Item Added To The Cart</h5>
                          <img src={img} className="img-fluid"/>
                          <h5>{title}</h5>
                          <h2 className="text-muted">Price : ${price}</h2>

                          <Link to="/">
                          <ButtonContainer  onClick={()=>{value.closeModel()}}>
                              Continue Shopping 
                          </ButtonContainer>
                          </Link>
                          <Link to="/cart">
                          <ButtonContainer
                              cart 
                      onClick={()=>{
                   
                    value.closeModel();
                         }}
>
     Add to cart
</ButtonContainer>
                          </Link>
                 </div>

                 </div>

                 </div>
               </ModelContainer>

                );
            }
        }
               }
           </ProductConsumer>
        );
    }
}

export default Model;

const ModelContainer = styled.div`
position : fixed ;
top:0;
bottom:0;
right:0;
left:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;

#modal{
   background: var(--mainwhite) ;
}



`;
const ButtonContainer =  styled.button   
`
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