import React from 'react';

const Card = (props) => {
  return (
    <div className="card h-fit flex w-80 p-10  flex-col border ml-10 justify-between border-gray-300 rounded-lg">
  <h2 className='text-red-500'>{props.name}</h2>
  <h3>{props.title}</h3>
  <p>{props.email}</p>
  <p>{props.about}</p>
  
</div>

  );
}

export default Card;
