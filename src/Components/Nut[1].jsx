import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nu[1].css';

function Nut(){
    return(
        <div className='entire'>
            <p class="title" > <b> Nut flavours </b></p>  
            <div class="single">
               <img src="https://static.toiimg.com/thumb/53520122.cms?width=1200&height=900" alt="Roasted Almond"/>  
               <p class="side"> <h2 class="heading"> Roasted Almond </h2> <br/> Savor the exquisite blend of textures in every spoonful –
                our Roast Almond ice cream is a delightful marriage of creamy decadence and the irresistible crunch of perfectly roasted almonds.</p>
                <Link to='/basd'> <a  class="button-link">Details</a></Link> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=62138&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="single">
               <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/CQ/JZ/KK/60135453/green-pista-500x500.jpg" alt="kesar"/> 
               <p class="side"> <h2 class="heading"> Kesar Pista </h2> <br/> Indulge in the regal symphony of our Kesar Pista ice cream, where the 
               royal flavors of saffron and the richness of pistachios come together in a velvety frozen treat. </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=55628&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>

            <div class="single">
               <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/9f/10/83/anjeer-ice-cream.jpg" alt="anjeer"/> 
               <p class="side"> <h2 class="heading"> Anjeer  </h2> <br/>Experience the richness of our Anjeer ice cream, a frozen delight that captures
                the essence of figs, offering a symphony of creamy texture and the natural sweetness of this Mediterranean gem. </p>
               <a href="https://www.example.com" class="button-link">Details</a> &emsp; &emsp; &emsp;
               <a href="https://www.zomato.com/vijayawada/restaurants?dishv2_id=61066&category=1" class="button-link">Order now</a>
               <br/>
               <br/>
            </div>
        </div>
    );
}

export default Nut;