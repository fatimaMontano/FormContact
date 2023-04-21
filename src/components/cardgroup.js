import imagen1 from './1market-intelligence.png'
import imagen2 from './2economic-research.png'
import imagen3 from './3data-analysis.png'
import imagen4 from './4business-intelligence.png'
import imagen5 from './5monitoring-evaluation.png'

const CARDS = () =>
{
    return(
        <div>
            <div class="card-group">

            <div class="card">
                <img src={imagen1} class="card-img-top" alt="Market Intelligence icon"/>
                
                <h5 class="card-title">Market Intelligence</h5>
              
            </div>

            <div class="card">
                <img src={imagen2} class="card-img-top" alt="Economic Research icon"/>
                
                <h5 class="card-title">Economic Research</h5>
                
            </div>

            <div class="card">
                <img src={imagen3} class="card-img-top" alt="Data Analytics and Machine Learning icon"/>
                
                <h5 class="card-title">Data Analytics and Machine Learning</h5>

            </div>

            <div class="card">
                <img src={imagen4} class="card-img-top" alt="Business Intelligence icon"/>
                
                <h5 class="card-title">Business Intelligence</h5>
                
            </div>

            <div class="card">
                <img src={imagen5} class="card-img-top" alt="Monitoring and evaluation icon"/>
                
                <h5 class="card-title">Monitoring and evaluation</h5>
                
            </div>
            </div>

        </div>
    )
}

export default CARDS