import React, { useEffect, useState } from 'react';
import Item from './item';
import Details from './details';

function List(  ) {

  const [list, setList] = useState([]);
  const [currentId, setCurrentItem] = useState('');
  const [info, setInfo] = useState({});
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then(response => response.json())
    .then(json => setList(json))
  }, []);
  
  const handleClick = e => {
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    if (currentId !== id) {
      setCurrentItem(id);
      setInfo({id, name});
    }
  };

  return (
    <>
      <div className="wrapper">
        <ul className="list">
          {list.map((a,i) => <Item key={i} id={a.id} name={a.name} click={handleClick} /> )}
        </ul>
        {Object.keys(info).length > 0 ? <Details info={info} /> : <div></div>}
      </div>
    </>
  );
}
              
export default List;