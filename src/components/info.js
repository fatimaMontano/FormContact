import React from 'react'
import imagen1 from './1market-intelligence.png'
import imagen2 from './2economic-research.png'
import imagen3 from './3data-analysis.png'
import imagen4 from './4business-intelligence.png'
import imagen5 from './5monitoring-evaluation.png'
import logoDMA from './logo1DMA.png'

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

            <div class="card-group">

            <div class="card">
                <img src={imagen1} class="card-img-top" alt="Market Intelligence icon"/>
                <div class="card-body">
                <h5 class="card-title">Market Intelligence</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen2} class="card-img-top" alt="Economic Research icon"/>
                <div class="card-body">
                <h5 class="card-title">Economic Research</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen3} class="card-img-top" alt="Data Analytics and Machine Learning icon"/>
                <div class="card-body">
                <h5 class="card-title">Data Analytics and Machine Learning</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen4} class="card-img-top" alt="Business Intelligence icon"/>
                <div class="card-body">
                <h5 class="card-title">Business Intelligence</h5>
                </div>
            </div>

            <div class="card">
                <img src={imagen5} class="card-img-top" alt="Monitoring and evaluation icon"/>
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