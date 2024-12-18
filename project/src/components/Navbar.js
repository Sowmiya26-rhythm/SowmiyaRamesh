import React from 'react'
import kawaiilogo from '../image/kawaiilogo.avif';
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import { BsEnvelopeHeart } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { MdEdit } from "react-icons/md";


import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <section class="icon02">
            <div class="icon03">
        <nav class="navbar navbar-light bg-light">
  <div class="container">
    <form class="d-flex">
   <div class="icon01"> <FiSearch /></div>
      <input class="form-control me-2 search001" type="search" placeholder="Search our Store" aria-label="Search"/>
    <Link to='/'><img src={kawaiilogo}/></Link>
    

    </form>
    <Link to='/upload'><div class="icon04"><GoPerson /> </div></Link>
    <Link to='/cart'><div class="icon05"><FaOpencart /></div></Link>
    <Link to='/update'><div class="icon06"><RxUpdate /></div></Link>
    <Link to='/edit'><div class="icon06"><MdEdit /></div></Link>
    <div class="full">
<nav class="navbar navbar-expand-lg navbar-light bg-light full">
  <div class="container ">
    
    
    <div class="collapse navbar-collapse i99" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link to='/'> <a class="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to='/popular'><a class="nav-link" href="#">Popular!</a></Link>
        </li>
       
        <li class="nav-item">
          <Link to='/shop'><a class="nav-link"href="#">Shop Now</a></Link>
        </li>
          
        <li class="nav-item">
         <Link to='/gift'><a class="nav-link" >Gift Card<BsEnvelopeHeart /></a></Link>
        </li>
        <li class="nav-item">
          <Link to='/shoppu'><a class="nav-link">Shoppu Points</a></Link>
        </li>
        <li class="nav-item">
          <Link to='/contact'><a class="nav-link">Contact Us</a></Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>


</div>
  </div>
  </nav>
</div>

</section>

    </div>
  )
}

export default Navbar