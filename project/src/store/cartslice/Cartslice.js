import{createSlice} from "@reduxjs/toolkit";

const storedItems=localStorage.getItem("cartItems")
const initialState={
    cartItems:storedItems?JSON.parse(storedItems):[]
};
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItems=action.payload
            const existingItem=state.cartItems.find(Items=>Items.id===newItems.id)
            if(existingItem){
                existingItem.quantity=newItems.quantity
            }else
            {
                state.cartItems.push({
                    id:newItems.id,
                    title:newItems.title,
                    img:newItems.img,
                    des:newItems.des,
                    price:newItems.price,
                    quantity:newItems.quantity
                });
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        deleteFromCart:(state,action)=>{
           state.cartItems=state.cartItems.filter(Items=>Items.id !==action.payload.id);
           localStorage.setItem("cartItems=",JSON.stringify(state.cartItems));
        },
        updateQuantity:(state,action)=>{
            const{id,quantity}=action.payload;
            const itemToUpdate=state.cartItems.find(Item=>Item.id===id);
        
        if(itemToUpdate)
        {
            itemToUpdate.quantity=quantity;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        }
    }
    }
})

export default CartSlice.reducer
export const{addToCart,deleteFromCart,updateQuantity}=CartSlice.actions