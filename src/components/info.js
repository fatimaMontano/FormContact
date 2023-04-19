import React from 'react'
import imagen1 from './1market-intelligence.png'
import imagen2 from './2economic-research.png'
import imagen3 from './3data-analysis.png'
import imagen4 from './4business-intelligence.png'
import imagen5 from './5monitoring-evaluation.png'


const INFO = () =>
{
    return(
        <div>
            
            <div>
            </div> 

            <div className='info' class="aside">
            <p>We are refurbishing our site...</p>
            <h1>Wen support knowledge generation accross sectors and organizations</h1>
            

            <div class="card-group">

            <div class="card">
                <img src={imagen1} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Market Intelligence</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Economic Research</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen3} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Data Analytics and Machine Learning</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen4} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Business Intelligence</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen5} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Monitoring and evaluation</h5>
                </div>
            </div>
            </div>

</div>

        </div>
    );
}

export default INFO