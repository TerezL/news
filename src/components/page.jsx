import React from "react";
import Mainpic from "./images/image-web-3-desktop.jpg";
import Retro from "./images/image-retro-pcs.jpg";
import Laptop from "./images/image-top-laptops.jpg";
import Gaming from "./images/image-gaming-growth.jpg";

function Page() {
    return(
        <>


 {/* <div class="container">
  
    
      <div class="row row-cols-2">
        <div class="col-sm-9"><img src={Mainpic} className="mainpic" /></div>
        <div class="col-sm-3 blackbox"><h2>New</h2>
    <h3>Hydrogen VS Electric Cars</h3>
    <p>Will hydrogen-fuled cars ever catch up to EVs?</p>
    <hr />
    <h3>The Downside of AI Artistry</h3>
    <p>What are the possible adverse effects of on-demand AI image generation?</p>
    <hr />
    <h3>Is VC Funding Drying Up?</h3>
    <p>Private funding by VC firms is dow 50% YOY. We take a look at what that means.</p></div>
      
        <div class="col-sm-3 futurebox"><h1>The Bright <br /> Future of <br /> Web 3.0?</h1></div>
        <div class="col-sm-3 textbox"><p>We dive into the next evolution of the web that claims 
    to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
    <button>READ MORE</button></div>
    </div>  
      </div>
     */}

     <div class="container justify-content-center">
     <div class="row">
  <div class="col-sm-8">
    <div class="pb-4">
    <img src={Mainpic} className="mainpic" />
    </div>
    <div class="row">
      <div class="col-sm-6 futurebox"><h1>The Bright Future of Web 3.0?</h1></div>
      <div class="col-sm-6 textbox"><p>We dive into the next evolution of the web that claims 
    to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
    <button>READ MORE</button></div>
    </div>
  </div>
  <div class="col-sm-3 blackbox"><h2>New</h2>
    <h3><a href="#" className="link">Hydrogen VS Electric Cars</a></h3>
    <p>Will hydrogen-fuled cars ever catch up to EVs?</p>
    <hr />
    <h3><a href="#" className="link">The Downside of AI Artistry</a></h3>
    <p>What are the possible adverse effects of on-demand AI image generation?</p>
    <hr />
    <h3><a href="#" className="link">Is VC Funding Drying Up?</a></h3>
    <p>Private funding by VC firms is dow 50% YOY. We take a look at what that means.</p></div>
</div>

<div class="row">
  <div class="col-sm-4 bottom"><img src={Retro}/><div className="btm-text"><h2>01</h2><h3><a href="#" className="btm-link">Reviving Retro PCs</a></h3><p>What happens when old PCs are given modern updates?</p></div></div>
  <div class="col-sm-4 bottom"><img src={Laptop} /><div className="btm-text"><h2>02</h2><h3><a href="#" className="btm-link">Top 10 Laptops of 2022</a></h3><p>Our top picks for various needs and budgets.</p></div></div>
  <div class="col-sm-4 bottom"><img src={Gaming} /><div className="btm-text"><h2>03</h2><h3><a href="#" className="btm-link">The Growth of Gaming</a></h3><p>How the pandemic has sparked fresh opportunities.</p></div></div>
</div>
    
    </div>


        </>
    )
}

export default Page;