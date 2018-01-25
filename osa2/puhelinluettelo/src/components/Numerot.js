import React from 'react'

const Numerot = ({ persons, deletePerson }) => {
    return (
      <div>  
        <h2>Numerot</h2>
        <table>
          <tbody>    
            {persons.map(person => 
              < TableLine 
                key={person.id} 
                person={person} 
                deletePerson={deletePerson} 
              /> 
            )}
          </tbody> 
        </table>
      </div>       
    )
  }
  
  const TableLine = ({ person, deletePerson }) => {
    return (
      <tr>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={deletePerson(person)}>poista</button></td>
      </tr>
    )
  }

export default Numerot  