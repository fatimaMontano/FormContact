import React from 'react';
import imagen1 from './1market-intelligence.png';
import imagen2 from './2economic-research.png';
import imagen3 from './3data-analysis.png';
import imagen4 from './4business-intelligence.png';
import imagen5 from './5monitoring-evaluation.png';

const CARDS = () =>
{
    return(
        <div>
            <div className="card-group">

            <div className="card">
                <img src={imagen1} className="card-img-top" alt="Market Intelligence icon"/>
                
                <h5 className="card-title">Market Intelligence</h5>
              
            </div>

            <div className="card">
                <img src={imagen2} className="card-img-top" alt="Economic Research icon"/>
                
                <h5 className="card-title">Economic Research</h5>
                
            </div>

            <div className="card">
                <img src={imagen3} className="card-img-top" alt="Data Analytics and Machine Learning icon"/>
                
                <h5 className="card-title">Data Analytics and Machine Learning</h5>

            </div>

            <div className="card">
                <img src={imagen4} className="card-img-top" alt="Business Intelligence icon"/>
                
                <h5 className="card-title">Business Intelligence</h5>
                
            </div>

            <div className="card">
                <img src={imagen5} className="card-img-top" alt="Monitoring and evaluation icon"/>
                
                <h5 className="card-title">Monitoring and evaluation</h5>
                
            </div>
            </div>

        </div>
    )
}

export default CARDS