import React, { useEffect, useState } from 'react';

function Details( {info} ) {

  const [details, setDetails] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setDetails(() => '');
    setLoading(() => true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then(response => response.json())
      .then(json => setTimeout(() => {
        setDetails(json);
        setLoading(false);
      }, 2000));
    
  }, [info]);
  
  return (
    <>
      <div className="block">
        <div>
          {isLoading && <progress /> ||
            <div>
              <img className="icon" src={details.avatar} alt="icon" />
              <header className="header">{details.name}</header>
              <div>City: {details.details.city}</div>
              <div>Company: {details.details.company}</div>
              <div>Position: {details.details.position}</div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
              
export default Details;