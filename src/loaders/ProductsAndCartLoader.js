import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader= async()=>{
    const ProductsData=await fetch('products.json')
    const products= await ProductsData.json();
    const savedCart=getStoredCart()

    const initialCart=[]
   for(const id in savedCart){
    const addedProduct=products.find(product=>product.id === id)
    // console.log(addedProduct)
    if(addedProduct){
        const quantity=savedCart[id]
         addedProduct.quantity=quantity
         initialCart.push(addedProduct)
    }
   }
    return {products, initialCart};
}