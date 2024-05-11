// Filename: App.js

import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import "./popp.css"

export default function Pop() {
  return (
    <div className='pops'>
      <h1>Customized</h1>
      <div className='popup-container'>
        <Popup
          trigger={<button className='popup-button'>Select your flavor</button>}
          modal
          nested
        >
          {(close) => (
            <div className='modal'>
              <div className='content'>
                <br />
                <br />
                {/* Your popup content goes here */}
                <br />
              </div>
              <div>
                <button onClick={() => close()}>
                  <Link to='/basic'>
                    <button>Click to know more</button>
                  </Link>
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};
