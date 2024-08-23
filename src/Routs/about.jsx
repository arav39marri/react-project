import React from 'react'
import Data from '../Data'
import Info from './Info'


const about = () => {
  const  person = [
    {
        id: 1,
        name: "Aravind",
        title: "Software engineer",
        profilePic: "",
        email: "aravindmarripelli@gmail.com",
        about: "I am a computer science student from CMRCET who is interested in software engineering"
    },
    {
        id: 2,
        name: "Aravind",
        title: "Software engineer",
        profilePic: "",
        email: "aravindmarripelli@gmail.com",
        about: "I am Aravind."
    },
    {
        id: 3,
        name: "Abhi",
        title: "007",
        profilePic: "",
        email: "aravindmarripelli@gmail.com",
        about: "Name is enough."
    }
]

  

  return (
    <div className='mt-8 lg:ml-52 ml-15'>
      This is what About is:
      <Data person={person}/>
      
    </div>
  )
}

export default about
