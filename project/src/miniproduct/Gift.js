import React from 'react'
import { BsEnvelopeHeart } from "react-icons/bs";
import the01 from '../image/the01.webp';
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";


import './Gift.css'
import Gifts from '../product/Gifts';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
const Gift = () => {
  const cartProducts=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch();

  const addCart=(items)=>{
    dispatch(addToCart(items))
  }
  const deleteCart=(items)=>{
    dispatch(deleteFromCart(items))

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
      <section class="add">
        <div class="add01">
        <div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src={the01}/>
    </div>
    
    <div class="col-lg-6">
      <h6 class="space">The Kawaii Shoppu Gift Card</h6>
      <p class="space01">Rs. 1,208.84</p>
      <div class="star01"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
      <h6 class="space00"><GoHeart /> ADD TO WHITELIST</h6>
      <div class="drop">
      <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Your Gift Card Amount
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">10</a></li>
    <li><a class="dropdown-item" href="#">20</a></li>
    <li><a class="dropdown-item" href="#">30</a></li>
    <li><a class="dropdown-item" href="#">40</a></li>
    <li><a class="dropdown-item" href="#">50</a></li>
    <li><a class="dropdown-item" href="#">100</a></li>
  </ul>
</div>
<div class="check01">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I want to send this as a gift
  </label>
</div>
</div>
<button class="pink">Add To Cart</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
      <section class="qus">
        <div class="qus01">
            <p class="qus02">Shopping for someone else but not sure what to give them? Give them the gift of choice with a Kawaii Shoppu Gift Voucher. <br/>With 100's of items to choose from give them a gift they'll love.</p>
        <p class='qus03'><strong>Choose a Gift Card from £10 - £200 GBP</strong></p>
        <p class="qus04"><strong>***Please note:</strong>Our Gift Cards are originally listed in GBP but <strong>will be converted to your local currency.</strong>You will<br/> be able to shop with your gift code in any currency</p>
        <p class="qus05">Gift cards are delivered to yourself or to a recipient of your choice by email and includes the option to <br/>schedule the delivery.</p>
        <p class="ans01"><strong>Q: How do I redeem my gift card?</strong><br/>
       <strong> A:</strong>You can redeem your gift card by entering its unique code at checkout.</p>
        </div>
      </section>
      <section class="space">
        <div class="space01">
        <div class="container">
  <div class="row">
  {Gifts.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card" key={item.id} >
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    {cartProducts.find(Items=>Items.id===item.id)?(
      <button class="hello00"onClick={()=>{deleteCart(item)}}>Remove From Cart</button>)
      :
      (<button class="hello00"onClick={()=>{addCart(item)}}>Add To Cart</button>)
    
  

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

export default Gift