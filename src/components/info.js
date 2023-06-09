import React from 'react'
import logoDMA from './logo1DMA.png'
import CARDS from './cardgroup';

const INFO = () =>
{
    return(
        <div id="divinfo">
           <div className='divlogo'>            
                <img className="Logo" src={logoDMA} alt="Logo DMA"/>
           </div> 

            <div className='info' class="aside">
                <div>
                    <p>We are refurbishing our site...</p>
                    <h1><strong>We support knowledge generation accross sectors and organizations</strong></h1>
                </div>

                <CARDS></CARDS> 
            </div>
        </div>
    );
}

export default INFO