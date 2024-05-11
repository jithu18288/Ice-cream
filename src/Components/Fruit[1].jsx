import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fru[1].css';

function Fruit(){
    return(
        <div className='entire'>
            <p class="title" > <b> Fruit flavours </b></p>  
            <div class="ice">
               <img src="https://flavouricious.in/storage/media/UJIpD7vCEVDAeJe6fRhMmeqaZ8RK9O3WAAJDKJSw.jpg" alt="sitaphal ish"/>  
               <p class="side"> <h2 class="heading"> Sitaphal </h2> <br/> Elevate your dessert experience with the enchanting flavor of Sitaphal ice cream 
               – a tropical escape in every scoop, blending the creamy and the fruity for a truly delightful treat.</p>
               <Link to='/basd'> <a  class="button-link">Details</a></Link> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=26560&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="ice">
               <img src="https://www.milkmaid.in/sites/default/files/2020-08/chickoo-590.jpg" alt="chikoo ish"/> 
               <p class="side"> <h2 class="heading"> Chikoo </h2> <br/> Experience the magic of Chikoo in frozen form – our ice cream is a celebration 
               of Sapodilla's sweet notes, blended seamlessly with the velvety texture of cream. </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=3145&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="ice">
               <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/UZ/FD/XU/110446045/black-currant-ice-cream.jpeg" alt="butterscotch ish"/> 
               <p class="side"> <h2 class="heading"> Black Currant </h2> <br/> Our Black Currant ice cream is a celebration of the orchard's 
               treasures, capturing the essence of ripe berries in a frozen masterpiece that promises a burst of flavor in every spoonful </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=48051&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>
        </div>
    );
}

export default Fruit;