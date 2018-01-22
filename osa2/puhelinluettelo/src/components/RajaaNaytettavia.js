import React from 'react'

const RajaaNaytettavia = ({ filter, handleValueChange }) => {
  return (
    <div>  
      rajaa näytettäviä 
      <input
        id="filter"
        value={filter}
        onChange={handleValueChange}        
      />
    </div>    
  )
}

export default RajaaNaytettavia

  