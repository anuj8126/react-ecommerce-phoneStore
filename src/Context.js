
import React, { Component } from 'react';
import {storeProducts,detailProduct} from './Components/data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products : [],
    details : detailProduct,
    cart :[],
    modelOpen : false,
    modelProduct : [],
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0 
 } 
 componentDidMount(){
     this.setProducts();
 };

 setProducts = ()=> {
     let tempProducts  =[];
     storeProducts.forEach(item => {
         const singleItem = {...item};
         tempProducts = [...tempProducts,singleItem];
     });
     this.setState(
         ()=>{return {products : tempProducts} 
         
        
        }
         
     );


 };


 getItem = (id)=>{
     const product = this.state.products.find(item=>item.id === id);
     return product;
 }
 

 handleDetail  = (id)=>{
     const product = this.getItem(id);
    
     this.setState (()=>{
        return {details : product};
        
     });

 }

 addtoCart =(id)=>{
     let tempProducts = [...this.state.products];
     const index = tempProducts.indexOf(this.getItem(id));
     const product = tempProducts[index];
     product.inCart = true;
     product.count = 1;
     const price = product.price;
     product.total = price;
     this.setState(
         ()=>{
             return {product:tempProducts,cart:[...this.state.cart,product]} 
         },
         ()=>{

            return this.addTotals();
        }
     );
     

 }
 
 openModel = (id)=>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {modelProduct:product , modelOpen:true}
    },
    ()=>{
        console.log(this.state.modelProduct); 
    }

)


 }
closeModel =(id) =>{
    this.setState(
        ()=>{
            return {modelOpen:false}
        }
    )
}

increment = (id)=>{
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const inProduct = tempCart[index];
    
    inProduct.count = inProduct.count + 1;
    inProduct.total = inProduct.count * inProduct.price;

    this.setState(()=>{
        return {cart : [...tempCart]}
    } , ()=>{this.addTotals()})
}
decrement = (id)=>{
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const inProduct = tempCart[index];

    inProduct.count = inProduct.count - 1;

    if(inProduct.count === 0){
        this.removeItem(id);
    }else{
        inProduct.total = inProduct.count * inProduct.price;

        this.setState(()=>{
            return {cart : [...tempCart]}
        } , ()=>{this.addTotals()})
    }

}
removeItem = (id)=>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=>item.id !== id);
    console.log(tempCart);
  

    const index = tempProducts.indexOf(this.getItem(id)) ;
    let removeProduct = tempProducts[index];
    removeProduct.inCart= false;
    removeProduct.total = 0;
    removeProduct.count = 0;

    this.setState(()=>{
        return {
            cart : [...tempCart],
            products : [...tempProducts]
        }
    },
    ()=>{
        this.addTotals();
    }

)

}

clearCart =()=>{
    this.setState(()=>{
        return {cart :[]}
    },
    ()=>{
         this.setProducts(); 
         this.addTotals();
    }
)
   
}

addTotals =()=>{
    let subTotal = 0;
     this.state.cart.map(item=>(subTotal += item.total));   
     const tempTax = subTotal* 0.1;
     const Tax = parseFloat(tempTax.toFixed(2));
     const total = subTotal + Tax;
     this.setState(()=>{
         return{cartSubtotal:subTotal,
                 cartTax : Tax,
                 cartTotal:total
        
        }
         

     });

}

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail : this.handleDetail,
                addtoCart : this.addtoCart,
                openModel : this.openModel,
                closeModel : this.closeModel,
                increment : this.increment,
                decrement : this.decrement,
                removeItem:this.removeItem,
                clearCart : this.clearCart
             
                
            }}>
            {this.props.children}

            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export{ProductProvider,ProductConsumer};
