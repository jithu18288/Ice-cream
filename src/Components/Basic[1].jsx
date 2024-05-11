import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bas.css';
function Basic(){
    return(
        <div className='entire'>
            <p class="title" > <b> Basic flavours </b></p>  
            <div class="chembra">
               <img src="https://ketopots.com/wp-content/uploads/2019/05/5a-keto-chocolate-ice-cream-square.jpg" alt="choco ish"/>  
               <p class="side"> <h2 class="heading"> Chocolate </h2> <br/> Indulge in Decadence: Surrender to the Rich Delight of 
               our Heavenly Chocolate Ice Cream! 
               Experience the ultimate symphony of cocoa delights with our rich and creamy chocolate ice cream.</p>
            <Link to='/basd'><a  class="button-link">Details</a></Link> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=36143&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="chembra">
               <img src="https://c4.wallpaperflare.com/wallpaper/1018/577/268/ice-cream-chocolate-vanilla-balls-wallpaper-preview.jpg" alt="vanila ish"/> 
               <p class="side"> <h2 class="heading"> Vanilla </h2> <br/> Savor the smooth and creamy goodness of our premium vanilla ice cream, 
               a true classic reimagined known for its sweet and creamy flavor with a distinct and comforting aroma. </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=13025&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="chembra">
               <img src="https://media.30seconds.com/tip/lg/Creamy-Coconut-Chai-Ice-Cream-60170-35d6a3d772-1687447184.jpg" alt="butterscotch ish"/> 
               <p class="side"> <h2 class="heading"> ButterScotch </h2> <br/> Satisfy your sweet cravings with the golden allure 
               of our butterscotch ice cream, a decadent blend of buttery richness and caramel sweetness. </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=30557&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

        </div>

    );
}
export default Basic;