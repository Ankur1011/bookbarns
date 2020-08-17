import React from 'react';


function AboutScreen(props) {
  return <div>
  <div className ="head">
      <h1>We are Book Barns</h1> 
       <h4>Providing Best Online Reading Experience</h4>
       </div>
       <section className="container">
           <div className="one">
                <img className="product-image" src="images/img1.svg" />
            </div>
            <div className="two">
                <h4>OUR SERVICE</h4>
                <p>Being the best seller in bargain books is about more than providing great selection and fantastic value on new books. As amazing as a bounty of bargain books is, you can also expect an enjoyable shopping experience. Unlike big box retailers, Book Outlet can get a little more personal.</p>
                <p>When you call during business hours you will speak to a friendly, helpful person (hey, isn’t that a novel idea). If you email, a real person will respond to your inquiry within eight business hours.Our mission is to make your experience enjoyable and ultimately save you money. When you find yourself with a relatively unscathed wallet and eager to crack open some great new books, we know that you have enjoyed the shopping and the value.</p>
            </div>
        </section>
        <section className="container1">
            <div class="three">
                <img className="product-image" src="images/img2.svg" />
            </div>
            <div className="four">
                <h4>OUR PROMISE</h4>
                <p> At Book Barns we love reading as much as you do, so we know what it’s like to get a book home only to find something wrong with it.Therefore we promise you the We're Readers Too 110% Guarantee: Your book will always be new and in good condition.</p>
                <p>Should you receive any book that is a misprint, damaged beyond repair or for any reason structurally compromised, please send us pictures of the damages along with the title, damage description and the order number here and we will be happy to assist you further.</p>
            </div>
        </section>
    </div>
}

export default AboutScreen;