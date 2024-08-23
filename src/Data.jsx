import React from 'react';
import Card from './Routs/Card'

const Data = ({ person }) => {
  const profileCard = person.map((el, index) => (
    <Card                                                       
      key={index}
      name={el.name}
      pic={el.profilePic} 
      title={el.title}  
      email={el.email}  
      about={el.about}  
    />
  ));

  return (
    <div className="App  flex flex-wrap gap-6 justify-between  ">
      {profileCard}
    </div>
  );
}

export default Data;
