import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <section class="contact">
            <div class="contact01">
                <h3 class="pg">The Kawaii Shoppu - Contact Us</h3>
            </div>
        </section>
        <section class="f1">
            <div class="f2">
            <div class="container">
  <div class="row">
    
    <div class="col-lg-6">
      <ul>
        <li>Contact us using this form and we'll respond to you by email within 24-48 hours Monday - Friday.</li>
        <li>We're happy to answer any queries and help with any issues you may have.</li>
        <li>Please note we may be in different time zones so if we're sleeping, we’ll respond to you as soon as we’re back in the office.</li>
      </ul>
      <p class="home">Please include your<strong>order number</strong> (if applicable) ex.#12345, <strong>Email</strong>(which we can reply to and ideally the email you made your order with if applicable) and <strong>Details</strong>of your query. </p>
    </div>
    <div class="col-lg-6">
    <div class="f3">
    <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Name</label>
  </div>
</div>
<div class="f4">
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Odrer Number ex#1234(optional)</label>
</div>
<p class="enter">Please use the email you made the order with (if applicable)</p>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email</label>
  <p class="enter01">Please include as much details as possible to help us understand your requirements.</p>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Message</label>
  <p class="enter02">Thank you for your message, we will respond within 24 - 48 hours Monday - Friday via the email provided.</p>
  <button class="send">SEND</button>
  
</div>
</div>
    </div>
    </div>
  </div>
</div>
            </div>
            <section class="next000">
              <div class="next001">
                <p class="caps">Info@thekawaiishoppu.com</p>
              </div>
            </section>
        </section>
    </div>
  )
}

export default Contact