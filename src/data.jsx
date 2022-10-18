function DataButton( {obj, click} ) {
  
  return (
    <button className="button" onClick={click}>{obj}</button>
  )
}

export default DataButton;