import React, { useState } from 'react';
import useJsonFetch from './hooks/useJsonFetch';

function View({content}) {
    const url = `http://localhost:7070/${content}`;
    const [data, isLoading, hasError] = useJsonFetch(url);
    
    return (
      <>
       <div className="block_result">
         {isLoading && <progress /> ||
           <p>{content === 'data' ? data.status : content === 'loading' ? 'Загрузка завершена' : `${hasError}`}</p>
         }
       </div>
      </>
    );
  }
  
  export default View;