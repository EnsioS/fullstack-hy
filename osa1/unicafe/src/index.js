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
  
  kasvataArvoa = (minka) => {
    return () => {
        const n = this.state.hyvia + this.state.neutraaleja + this.state.huonoja
        this.setState({ [minka]: this.state[minka] + 1})
        this.asetaKeskiarvo(minka, n)
        this.asetaPositiivisia(minka, n) 
    }
  }

  asetaKeskiarvo = (uusi, n) => {
    let a = 0
    if (uusi === 'hyvia') {
       a = 1
    } else if (uusi === 'huonoja') {
        a = -1
    } 

    this.setState({ keskiarvo: (n * this.state.keskiarvo + a)/(n + 1)})
  }

  asetaPositiivisia = (uusi, n) => {
    let a = 0
    if (uusi === 'hyvia') {
        a = 1
    }
    
    this.setState({ positiivisia: (n * this.state.positiivisia + a)/(n + 1)})
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
            <Button 
              handleClick={this.kasvataArvoa('hyvia')}
              text="hyvä"
            />
            <Button 
              handleClick={this.kasvataArvoa('neutraaleja')}
              text="neutraali"
            />
            <Button 
              handleClick={this.kasvataArvoa('huonoja')}
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
     <table>  
       <tbody>  
         <Statistic label="hyvä" value={state.hyvia}/> 
         <Statistic label="neutraali" value={state.neutraaleja}/>
         <Statistic label="huono" value={state.huonoja}/>
         <Statistic label="keskiarvo" value={state.keskiarvo}/>
         <Statistic label="positiivisia" value={(state.positiivisia * 100).toFixed(1) + " %"}/>
       </tbody> 
     </table>
   )
}

const Statistic = ({ label, value }) => (
    <tr> 
      <td>{label}:</td> 
      <td>{value}</td> 
    </tr>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
