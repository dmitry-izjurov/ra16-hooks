import React, { useState } from 'react';
import DataButton from './data';
import View from './view';

function JsonFetch() {
  const [content, setContent] = useState('Результат будет выведен сюда');
  const objData = ['data', 'loading', 'error'];
  const handleClick = e => setContent(() => e.target.textContent);
  
  return (
    <>
      {objData.map((a,i) => <DataButton key={i} obj={a} click={handleClick} />)}
      {objData.find(a => a === content) ? <View content={content}/> : <div className="block_result">Результат будет выведен сюда</div>}
    </>
  );
}

export default JsonFetch;