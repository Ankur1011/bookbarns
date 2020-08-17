import React from 'react';


function ContactUsScreen(props) {
  return <div>
      <main className="main">
          <section className="container1">
              <div className="one">
                  <img className="product-image" src="images/img3.svg" height="200px" width="400px"/>
                  <p>   <br/> </p>
                   <h4>OUR LOCATIONS</h4>
                   <p>1265, Steels Road<br/>West State <br/> Toronto, ON <br/>N4R7Y5</p>
                   <p>   <br/> </p>
                   <h4>Phone</h4>
                   <p>+1 672-889-00011<br/>+1 672-789-00311</p>

                    <p>   <br/></p>
                    <h4>Enail</h4>
                    <p>Booksbarns@support.com</p>
                </div>
                <div className="two">
                    <div className="container-contact100">
                        <div className="wrap-contact100">
                            <div className="contact100-form-title">
                                <span className="contact100-form-title-1">Contact Us</span>
                                <span className="contact100-form-title-2">Feel free to drop us a line below!</span>
                        </div>
                        <form className="contact100-form validate-form">
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Full Name:</span>
                                <input className="input100" type="text" name="name" placeholder="Enter full name"/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <span className="label-input100">Email:</span>
                                <input className="input100" type="text" name="email" placeholder="Enter email addess"/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <span className="label-input100">Phone:</span>
                                <input className="input100" type="text" name="phone" placeholder="Enter phone number"/>
                                <span className="focus-input100"></span>
                            </div>
                            
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Message:</span>
                                <textarea className="input100" name="message" placeholder="Your Comment..."></textarea>
                                <span class="focus-input100"></span>
                            </div>
                            
                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn">
                                    <span id="submit">Submit</span>
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>


                </div>

</section>











</main>
    </div>
}

export default ContactUsScreen;