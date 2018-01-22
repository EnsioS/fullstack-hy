import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    let persons = this.state.persons        
    const isNewName = !(persons.find((person) => person.name === this.state.newName))
    
    if (isNewName) {     
      const person = {
        name: this.state.newName,
        number: this.state.newNumber
      }
    
      persons = persons.concat(person)  
    }  

    this.setState({
        persons: persons,
        newName: '',
        newNumber: ''
      })   
  }

  handleValueChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })    
  }

  render() {
    const personsToShow =
      this.state.persons
      .filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        rajaa näytettäviä 
        <input
          id="filter"
          value={this.state.filter}
          onChange={this.handleValueChange}        
        />
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input 
              id="newName"
              value={this.state.newName}
              onChange={this.handleValueChange}
            />
          </div>
          <div>
            numero:
            <input
              id="newNumber"
              value={this.state.newNumber}
              onChange={this.handleValueChange}
            />    
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        < Numerot persons={personsToShow} />
      </div>
    )
  }
}

const Numerot = (props) => {
  return (
    <div>  
      <h2>Numerot</h2>
      <table>
        <tbody>    
          {props.persons.map(person => < TableLine key={person.name} person={person} /> )}
        </tbody> 
      </table>
    </div>       
  )
}

const TableLine = (props) => {
  return (
    <tr key={props.person.name}>
      <td>{props.person.name}</td>
      <td>{props.person.number}</td>
    </tr>
  )
}

export default App
