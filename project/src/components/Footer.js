import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import logo02 from '../image/logo02.webp';
import { FaRegHeart } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <section class="one01">
        <div class="one02">
          <h5 class="one03">Subscribe and get 10% OFF now!</h5>
          <p class="one04">Subscribe to our Newsletter and be the first to know about the latest news, fun blogs, sales and<br/>discounts, plus <strong>GET 10% OFF</strong> in your email inbox right now..</p>
          <form class="d-flex two02">
        <input class="form-control me-2 two03" type="search" placeholder="Enter email here-then hit subscribe" aria-label="Search"/>
        <button class="btn two01">SUBSCRIBE</button>
      </form>
        </div>
        
        </section>
      
      <section class="buttom01">
        <div class="buttom02">
       
        <div class="container">
        
  <div class="row">
    
    <div class="col-lg-3 hh00">
      <ol>
        <p class="heading01">Shop Collections</p>
        <li>Home Decor</li><br/><br/>
        <li>Kawaii Fashion</li><br/><br/>
        <li>Accessories</li><br/><br/>
        <li>Stationery & School Supplies</li><br/><br/>
        <li>Soft Toys & Plushies</li><br/><br/>
        <li>Mystery Stationery Lucky Bag</li><br/><br/>
        <li>Gift Card 💜</li>
      </ol>
    
    </div>
    <div class="col-lg-3 hh00">
    <ol>
        <p class="heading01">Useful links</p>
        <li>About Us</li><br/><br/>
        <li>Reviews ⭐️</li><br/><br/>
        <li>F.A.Q</li><br/><br/>
        <li>Sizing Chart</li><br/><br/>
        <li>Shipping & Delivery</li><br/><br/>
        <li>Kawaii News Blog</li><br/><br/>
        <li>Track Your Order</li>
      </ol>
    </div>
    <div class="col-lg-3">
      <p class="heading02">Contact us</p>
     <p class="heading03">Have questions or need help with an order.<br/> Please contact us using our contact form and a <br/>member of the team will be very happy to help.</p>
    <a class="rr9">Contact Us</a>
    </div>
    <div class="col-lg-3">
      <p class="heading04">Join over 100K on Instagram and Follow Us @thekawaiishoppu</p>
      <div class="heading05"><ImFacebook2/><FaInstagram/><FaTiktok/><FaPinterest/><FaThreads/><img src={logo02}/></div>
      <button class="shop01"><FaRegHeart /> Follow On <strong>Shop</strong></button>
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  )
}

export default Footer