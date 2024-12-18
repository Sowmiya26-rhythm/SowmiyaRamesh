import React from 'react'
import { BsEnvelopeHeart } from "react-icons/bs";
import './Shop.css'
import Doll from '../product/Doll';
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import Bottles from '../product/Bottles';
import Cups from '../product/Cups';

const Shop = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch();

  const addCart=(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <div>
        <section class="pics01">
        <div class="pics02">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner slideall">
    <div class="carousel-item active">
      <h6 class="slide01">Get a Instant Card Gift  <BsEnvelopeHeart /></h6>
    </div>
    <div class="carousel-item">
      <h6 class="slide02">Black Friday Sale Shop up to 30% OFF!</h6>
    </div>
    <div class="carousel-item">
    <h6 class="slide03">FREE Shipping to USA| UK |AU |EU+</h6>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      </section>
      <section>
        <div  class="trending">
          <h1 class="treding01">Bottles and Cups</h1>
          <p class="treding02">Shop now and make every sip, kawaii cute! 🌸🥤💕</p>
        </div>
      </section>
      <section class="treding03">
        <div class="treding04">
        <div class="container">
  <div class="row">
    <div class="col-lg-6">
    <div class="dropdown">
  <button class="btn dropdown-toggle hello" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
Availability
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <div class="card">
      <h6 class="head01">533 results</h6>
      </div>
      <div class="card-body">
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  In stock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Out of stock
  </label>
</div>
   
    </div>
  </ul>
</div> 
    </div>
   
    <div class="col-lg-6">
    <div class="dropdown lock">
  <button class="btn dropdown-toggle hello" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Featured
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    
      <div class="card">
      <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Featured

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Best Selling

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Title, A-Z

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Title, Z-A

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Price, low to high

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Price, high to low

  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Date, new to old
  
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Date, old to new
  </label>
</div>
   
    </div>
  </ul>
</div> 
    </div>
  </div>
</div>
</div>
        
      </section>
      <section class="space">
        <div class="space01">
        <div class="container">
  <div class="row">
  {Bottles.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card" key={item.id} >
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    {cartProducts.find(Items=>Items.id===item.id)?(
    <button class="hello03" onClick={()=>(deleteCart(item))}>Remove From Cart</button>)
    :
    (<button class="hello03" onClick={()=>(addCart(item))}>Add To Cart</button>)
    }
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
                  
                  
                  
                  
                </div>
                </div>
                </div>
                
                ))}
   
    
  </div>
</div>
        </div>
      </section>
      <section class="space">
        <div class="space01">
        <div class="container">
  <div class="row">
  {Cups.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card" key={item.id} >
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    {cartProducts.find(Items=>Items.id===item.id)?(
    <button class="hello03" onClick={()=>(deleteCart(item))}>Remove From Cart</button>)
    :
    (<button class="hello03" onClick={()=>(addCart(item))}>Add To Cart</button>)
    }
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
                  
                  
                  
                  
                </div>
                </div>
                </div>
                
                ))}
   
    
  </div>
</div>
        </div>
      </section>
    </div>
  )
}

export default Shop