import React from 'react'
import {data} from "../restApi.json"
const Team = () => {
  return (
    <section className='team' id='team'>
    <div className="container">
        <div className="heading section">
            <h1 className='heading'>OUR TEAM</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita id necessitatibus magni harum aut nisi libero minus itaque fugit esse?</p> 
        </div>
         <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                        <img src={element.image} alt={element.name}/>
                        <h3>{element.name}</h3>
                        <p>{element.designation}</p>
                        </div>
                    )
                })
            }
         </div>
    </div>
    </section>
  )
}

export default Team
