import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';

const Cart = () => {
    const cartProduct=useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();
    const deleteCart=(items)=>{
        dispatch(deleteFromCart(items));
    }

        const incrementCart=(id,quantity)=>{
            dispatch (updateQuantity({id,quantity:quantity+1}))
        }
        const decrementCart=(id,quantity)=>{
            if(quantity>1){
                dispatch(updateQuantity({id,quantity:quantity-1}))
            }
        }
    
  return (
    <div>
        <div class="books01">
            {cartProduct.map((items)=>(
                <div class="books02"key={items.id}>
                    <img src={items.img}/>
                    <h2 class="books03">{items.title}</h2>
                    <p class="book04">{items.des}</p>
                    <h2 class="book05">{items.price}</h2>
                    <button onClick={()=>{decrementCart(items.id,items.quantity)}}>-</button>
                    {items.quantity}
                    <button onClick={()=>{incrementCart(items.id,items.quantity)}}>+</button>
                    <button class="btn"onClick={()=>{deleteCart(items)}}>Delete</button>
                    </div>
            )
            )}
        </div>

    </div>
  )
}

export default Cart