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
            <button onClick={this.kasvataHyvia}>hyvä</button>
            <button onClick={this.kasvataNeutraaleja}>neutraali</button>
            <button onClick={this.kasvataHuonoja}>huono</button>
          </div>   
        <h1>statistiikka</h1>
          <div>
              <p>hyvä: {this.state.hyvia}<br/> 
                 neutraali: {this.state.neutraaleja}<br/>
                 huono: {this.state.huonoja}<br/>
                 keskiarvo: {this.state.keskiarvo} <br/>
                 positiivisia: {(this.state.positiivisia * 100).toFixed(1)} %
              </p>
          </div>  
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
