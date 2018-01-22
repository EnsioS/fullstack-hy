import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    let persons = this.state.persons        
    const isNewName = !(persons.find((person) => person.name === this.state.newName))
    

    if (isNewName) {     
      const person = {
        name: this.state.newName
      }
    
      persons = persons.concat(person)  
    }  

    this.setState({
        persons: persons,
        newName: ''
      })   
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })    
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: 
            <input 
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        < Numerot persons={this.state.persons} />
      </div>
    )
  }
}

const Numerot = (props) => {
  return (
    <div>  
      <h2>Numerot</h2>
      <ul>  
         {props.persons.map(person => <li key={person.name}>{person.name}</li> )}
      </ul>
    </div>       
  )
}

export default App
