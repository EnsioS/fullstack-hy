import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
        hyvia: 0,
        neutraaleja: 0,
        huonoja: 0,
        keskiarvo: 0,
        positiivisia: 0.0 
    }
  }
  
  kasvataHyvia = () => {
    const n = this.state.hyvia + this.state.neutraaleja + this.state.huonoja
    this.setState({ hyvia: this.state.hyvia +1})
    this.asetaKeskiarvo(1, n)
    this.asetaPositiivisia(1, n)
  }

  kasvataNeutraaleja = () => {
    const n = this.state.hyvia + this.state.neutraaleja + this.state.huonoja  
    this.setState({ neutraaleja: this.state.neutraaleja +1})
    this.asetaKeskiarvo(0, n)
    this.asetaPositiivisia(0, n)
  }

  kasvataHuonoja = () => {
    const n = this.state.hyvia + this.state.neutraaleja + this.state.huonoja  
    this.setState({ huonoja: this.state.huonoja +1})
    this.asetaKeskiarvo(-1, n)
    this.asetaPositiivisia(0, n)
 }

  asetaKeskiarvo = (uusi, n) => {
    this.setState({ keskiarvo: (n * this.state.keskiarvo + uusi)/(n + 1)})
  }

  asetaPositiivisia = (onko, n) => {
    this.setState({ positiivisia: (n * this.state.positiivisia + onko)/(n + 1)})
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
            <Button 
              handleClick={this.kasvataHyvia}
              text="hyvä"
            />
            <Button 
              handleClick={this.kasvataNeutraaleja}
              text="neutraali"
            />
            <Button 
              handleClick={this.kasvataHuonoja}
              text="huono"
            />
        </div>   
        <h1>statistiikka</h1>
        <Statistics state={this.state}/>     
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>     
    {text}
  </button>
)

const Statistics = ({state}) => {
   if (state.hyvia + state.neutraaleja + state.huonoja === 0) {
     return (
        <div>
           <p>yhtään palautetta ei ole annettu</p>        
        </div>
     )
   }  
   return (
     <div>  
       <Statistic label="hyvä" value={state.hyvia}/> 
       <Statistic label="neutraali" value={state.neutraaleja}/>
       <Statistic label="huono" value={state.huonoja}/>
       <Statistic label="keskiarvo" value={state.keskiarvo}/>
       <Statistic label="positiivisia" value={(state.positiivisia * 100).toFixed(1) + " %"}/>
     </div>
   )
}

const Statistic = ({ label, value }) => (
    <p> {label}: {value} </p>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
