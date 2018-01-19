import React from 'react'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => {
  return (
    <div>
      {props.osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
    </div>
  )
}

const Osa = (props) => <p>{props.osa.nimi} {props.osa.tehtavia}</p>

const Yhteensa = (props) => {
  const tehtavia = props.osat.reduce( (sum, osa) => sum + osa.tehtavia, 0)

  return (
    <p>yhteensä {tehtavia} tehtävää</p>
  )
}

const Kurssi = (props) => {
  return (
    <div>
      <Otsikko kurssi={props.kurssi} />
      <Sisalto osat={props.kurssi.osat} />
      <Yhteensa osat={props.kurssi.osat} />
    </div>
  )
}

export default Kurssi