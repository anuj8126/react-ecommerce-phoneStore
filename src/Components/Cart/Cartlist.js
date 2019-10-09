import React ,{Component} from 'react';

import Cartitem from './Cartitem' 


export default function cartlist({value}){
    const {cart} = value;
   return(
   <div className="container-fluid">
   {
       cart.map(item=>{
           return  <Cartitem key ={item.id} item={item} value={value}/>
       })
   }
   
 


   </div>);

}