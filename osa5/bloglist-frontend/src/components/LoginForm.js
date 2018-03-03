import React from 'react'

const LoginForm = ({ login, username, password, handleValueChange }) => {
  return (
  <div>
    <h2>Kirjaudu</h2>
  
    <form onSubmit={login}>
      <div>
        käyttäjätunnus
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleValueChange}
      />
      </div>
      <div>
        salasana
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleValueChange}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
  </div>
  )
}

export default LoginForm 

