import React from 'react'
import "./businessCard.css";

const BusinessCard = ({name, about, interests, linkedinUrl, twitterUrl, }) => {
  return (
    <div className='card'>
      <h2 className='user-name'>{name}</h2>
      <p className='user-about'>{about}</p>

      <h5 style={{fontSize: "25px", color: "#333"}}>Interests</h5>
      <ul className='interest-list'>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>

      <div className='user-links'>
        <a href={linkedinUrl} target='_blank'><button className='btn'>LinkedIn</button></a>
        <a href={twitterUrl} target='_blank'><button className='btn'>Twitter</button></a>
      </div>
    </div>
  )
}

export default BusinessCard
