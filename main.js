import './style.css'
import products from './apis/product.json'
import { showproduct } from './productdisplay';
showproduct(products); 

const buynow  = document.querySelector(".buynow_button")
const up  = document.querySelector(".buynow_button")
const down  = document.querySelector(".buynow_button")
console.log(products);
quantity = products.quantity
const { id , tittle , category , discription , price , quantity , img} = element
products.forEach((Element) => {
    buynow.addEventListener("click" , (e)=>{
console.log( this.Element);
       
    })
}  )


