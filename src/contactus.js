
import React from 'react';
import axios from "axios";
import './Cont.css';

function Cont(){

const handleContact = (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    console.log({ 
        name: data.get('name'), 
        email: data.get('email'), 
        fb : data.get('fb'),
    }); 
axios.post('http://localhost:8081/cont',{ 
    name: data.get('name'), 
    email: data.get('email'), 
    fb : data.get('fb'),
 
}).then((response)=>{ 
    alert('Your feedback has been successfully recorded!');
    window.location.href = '/';
    console.log(response.data);
 })
}

    return (
        <div className='Cont'>
            <h1>Contact Us</h1>
    <form onSubmit={handleContact} method="post">
        <label for="name"> Name </label>
        <input type="text" id="name" name="name" placeholder='Your name'/>
        
        <label for="email">Email</label> <br/> <br/>
        <input type="email" id="email" name="email" placeholder="Your email"/> 
        <label for="fb">Feedback</label> <br/> <br/>
        <textarea id="fb" name="fb" placeholder="Your feedback" rows="5"></textarea>
        <div class="click"> <br/>
        <button>Submit</button>
        </div>
    </form>
    <br/> 
    
    <div class="loc">
        <p>Phone: <a href="tel:9876543210">987-654-3210</a></p>
        <p>Email: <a href="mailto:company@gmail.com">company@gmail.com</a></p>
        <p>Address: 1-2/34 St, Vijayawada,Andhra Pradesh,India</p> <br/>
    </div>
   
        </div>
    );
};

export default Cont;
