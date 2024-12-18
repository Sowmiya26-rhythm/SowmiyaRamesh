import React from 'react'
import thing01 from '../image/thing01.webp';
import { BsEnvelopeHeart } from "react-icons/bs";
import cat01 from '../image/cat01.webp';
import cat05 from '../image/cat05.webp';
import cat03 from '../image/cat03.webp';
import cat04 from '../image/cat04.webp';
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import keyboard01 from '../image/keyboard01.webp';
import keyboard02 from '../image/keyboard02.webp';
import keyboard03 from '../image/keyboard03.webp';
import the01 from '../image/the01.webp';
import light01 from '../image/light01.webp';
import light03 from '../image/light03.avif';
import light02 from '../image/light02.avif';
import light04 from '../image/light04.avif';
import chain01 from '../image/chain01.avif';
import chain02 from '../image/chain02.avif';
import chain03 from '../image/chain03.avif';
import chain04 from '../image/chain04.avif';
import './Home.css'
const Home = () => {
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
      <section class="pics03">
      <div class="pics04">
      <img src={thing01}/>
      <div class="position-relative note01">
        
  <div class="position-absolute top-50 start-50 translate-middle">
      
        <h6 class="note02">SHOP CUTE</h6>
        <h6 class="notes03">LIVE CUTE</h6>
        
        
        
        </div>
        </div>
        <div class="position-relative note01">
        
  <div class="position-absolute top-50 start-50 translate-middle"> 
  <div class="container">
  <div class="row">
    <div class="col">
      <button class="notes04">BLACK FRIDAY SALE</button>
    
    </div>
    
    <div class="col">
    <button class="notes05">GIFT CARD</button>
    </div>
  </div>
</div>
    </div>
  </div>
       
        </div>
      </section>
      <section class="line01">
        <div class="line02">
          <h3 class="line03">Trending This Week</h3>
          <a class="line04">Shop Most Popular</a>
          
        </div>
      </section>
      <section class="next01">
        <div class="next02">
          
        <div class="container">
  <div class="row">
    <div class="col-lg-3">
    <div class="card mini01" >
      
  <img src={cat01} class="card-img-top" alt="..."/>
  
    
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  
  <div class="card-body">
    <p class="title01">Kawaii Fox Plush Hoodie Blanket Robe</p>
    <p class="price01 ">From Rs.5,300.00<p class="price00">Rs.6,000.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
    
  </div>
</div>
    </div>
    
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={cat05} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Kawaii Cute Stationery Pencil Case</p>
    <p class="price01 ">From Rs.3,400.00<p class="price00">Rs.4,300.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={cat03} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Cute Space Mini Claw Machine Game</p>
    <p class="price01 ">From Rs.6,500.00<p class="price00">Rs.8,200.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01">
  <img src={cat04} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">My Flame Friend Cozy Lamp</p>
    <p class="price01 ">From Rs.2,700.00<p class="price00">Rs.3,400.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
      </section>
      <section class="key01">
        <div class="key02">
        <div class="card hii01">
        <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="card key03" >
  <img src={keyboard01} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-title gifts03">SHOP GIFTS</p>
    <p class="card-text gifts02">Kawaii gifts for Kawaii cuties!</p>
    <a href="#" class="btn gifts01">SHOP GIFTS</a>
  </div>
</div>
    </div>
    <div class="col-lg-4">
    <div class="card key03" >
  <img src={keyboard02} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title gifts03">Winter Collection</h5>
    <p class="card-text gifts02">Shop Pjs, Bedding, Lights and more!</p>
    <a href="#" class="btn gifts01">SHOP GIFTS</a>
  </div>
</div>
    </div>
    <div class="col-lg-4">
    <div class="card key03">
  <img src={keyboard03}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title gifts03">Desk Accessories</h5>
    <p class="card-text gifts02">Study in Kawaii style..</p>
    <a href="#" class="btn gifts01">SHOP GIFTS</a>
  </div>
</div>
    </div>
  </div>
</div>
  
</div>
        </div>
      </section>
      <section class="line01">
        <div class="line02">
          <h3 class="line03">NEW IN</h3>
          <a class="line04">Shop New Collection</a>
          
        </div>
      </section>
      <section class="next01">
        <div class="next02">
          
        <div class="container">
  <div class="row">
    <div class="col-lg-3">
    <div class="card mini01" >
      
  <img src={light01} class="card-img-top" alt="..."/>
  
    
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  
  <div class="card-body">
    <p class="title01">Cute Cat Bedside Night Light</p>
    <p class="price01 ">From Rs.2,200.00 <p class="price00">Rs.2,800.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
    
  </div>
</div>
    </div>
    
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={light02} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Super Soft Giant Leaf Blanket for Bed</p>
    <p class="price01 ">From Rs.4,500.00<p class="price00">Rs.5,000.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={light03} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Anime LED Beautiful Night View Light</p>
    <p class="price01 ">From Rs.2,000.00<p class="price00">Rs.2,500.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01">
  <img src={light04} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Kawaii Bear Coffee Cup Tumbler</p>
    <p class="price01 ">From Rs.2,800.00<p class="price00">Rs.3,200.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
      </section>
          <section class="there01">
            <div class="there02">
            <div class="card mmm01">
            <div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src={the01}/>
    </div>
    <div class="col-lg-6">
      <h6 class="side01">The Kawaii Shoppu Gift Card</h6>
      <p class="side02">From <strong>Rs. 1,203.54</strong></p>
      <p class="side03">Last minute shopping? Give them the gift of choice! Sent straight to their inbox on a date of your choice! (Listed in GBP, available to spend in all currencies)</p>
   <button class="side04">SHOP NOW</button>
    </div>
   
  </div>
</div>
</div>
            </div>
          </section>
          <section class="line01">
        <div class="line02">
          <h3 class="line03">SOFT TOYS AND PLUSHIES</h3>
          <a class="line04">Shop Adorable Plushies</a>
          
        </div>
      </section>
      <section class="next01">
        <div class="next02">
          
        <div class="container">
  <div class="row">
    <div class="col-lg-3">
    <div class="card mini01" >
      
  <img src={chain01} class="card-img-top" alt="..."/>
  
    
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  
  <div class="card-body">
    <p class="title01">Mini Baby Otter Tapanyaki Plushie Keychain</p>
    <p class="price01 ">From Rs.1,100.00 <p class="price00">Rs.1,600.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
    
  </div>
</div>
    </div>
    
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={chain02} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">10cm Kawaii Mushroom Pearl Ring Plushie</p>
    <p class="price01 ">From Rs.1,000.00<p class="price00">Rs.1,500.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01" >
  <img src={chain03} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">Kawaii Capybara Turtle Shell Backpack Soft Toy Plushie</p>
    <p class="price01 ">From Rs.2,000.00<p class="price00">Rs.2,800.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
    <div class="col-lg-3">
    <div class="card mini01">
  <img src={chain04} class="card-img-top" alt="..."/>
  <div class="position-relative">
  <div class="position-absolute top-0 start-100 translate-middle">
    <button class="hello01">On Sale</button>
  </div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
    <div class="heart01"><GoHeart /></div>
  </div>
  </div>
  <div class="card-body">
  <p class="title01">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
    <p class="price01 ">From Rs.1,400.00 <p class="price00">Rs.1,900.00</p></p>
    <div class="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><div class="five">5 reviews</div></div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
      </section>
          
        
    </div>
  )
}

export default Home