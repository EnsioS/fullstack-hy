import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component { 
  constructor(props) {
      super(props)
      this.state = {
        hyvia: 0,
        neutraaleja: 0,
        huonoja: 0
      }
  }
    
  // const kasvata = () => {hyvia += 1; console.log("kutsuttiin")}
  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
          <div>
            <button onClick={() => this.setState({ hyvia: this.state.hyvia + 1 })}>hyvä</button>
            <button onClick={() => this.setState({ neutraaleja: this.state.neutraaleja + 1 })}>neutraali</button>
            <button onClick={() => this.setState({ huonoja: this.state.huonoja + 1 })}>huono</button>
          </div>   
        <h1>statistiikka</h1>
          <div>
              <p>hyvä: {this.state.hyvia}<br/> 
                 neutraali: {this.state.neutraaleja}<br/>
                 huono: {this.state.huonoja}
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
