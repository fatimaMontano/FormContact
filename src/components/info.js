import React from 'react'
import logoDMA from './logo1DMA.png'
import CARDS from './cardgroup';

const INFO = () =>
{
    return(
        <div>
           <div className='divlogo'>            
                <img className="Logo" src={logoDMA} alt="Logo DMA"/>
           </div> 

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