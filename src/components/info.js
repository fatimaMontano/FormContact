import React from 'react'
import logoDMA from './logo1DMA.png'
import CARDS from './cardgroup';

const INFO = () =>
{
    return(
        <div>
            
            <img className="Logo" src={logoDMA} alt="ogo DMA"/>

            <div className='info' class="aside">
                <div>
                    <p>We are refurbishing our site...</p>
                    <h1>We support knowledge generation accross sectors and organizations</h1>
                </div>

                <CARDS></CARDS> 
            </div>

        </div>
    );
}

export default INFO