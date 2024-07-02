import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
    <div className="footer ">

        <div className="Ftext">
            <h4 className="header">Home</h4>
          <a href = "/">Formats</a>
          <a href = "/">Compression</a>
          <a href = "/">Pricing</a>
          <a href = "/">FAQ</a>
          <a href = "/">Status</a>
          <a href = "/">Policy</a>
          </div>
        <div className="Ftext">
            <h4 className="header">Getting started</h4>
           <a href="/">Introduction</a>
           <a href="/">Themes</a>
           <a href="/">Documentation</a>
           <a href="/">Usages</a>
           <a href="/">Elements</a>
           <a href="/">Global</a>
        </div>
    
       <div className="Ftext">
            <h4 className="header">Resources</h4>
           <a href="/">Api</a>
           <a href="/">Form Validation</a>
           <a href="/">Accesibility</a>
           <a href="/">Market place</a>
           <a href="/">Visibility</a>
           <a href="/">Community</a>
        </div>
        <div className="Ftext border">
            <h4 className="header">Newsletter</h4>
            <p>Subscribe to our newsletter for a weekly dose of news,updates,helpful tips and exclussive offers.</p>
            <input type="text" placeholder="Email"></input>
            <button>Subscribe</button>
            <div className="icon-container"> <i className="fa-brands fa-facebook icon1"></i>
            <i className="fa-brands fa-github icon2" ></i>
            <i className="fa-brands fa-linkedin icon3"></i>
            <i className="fa-brands fa-twitter icon4"></i>
            </div>
           
            
            </div>
    </div>
   </>
  )
}
export default Footer