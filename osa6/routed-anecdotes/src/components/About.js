import React from 'react'
import imgDijkstra from'../EdsgerDijkstra.jpg'

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <div className="row">
      <div className="col-sm-8" >
        <p>According to Wikipedia:</p>
      
        <em>An anecdote is a brief, revealing account of an individual person or an incident. 
          Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself, 
          such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative. 
          An anecdote is "a story with a point."</em>
  
        <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
      </div>
      <div className="col-sm-4">
        <img src={imgDijkstra} alt="Dijkstra" height="240" width="180"/>
      </div>  
    </div>
  </div>
)

export default About