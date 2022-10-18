function Item( {id, name, click} ) {
  return (
    <li className="item" data-id={id} data-name={name} onClick={click}>{name}</li>
  );
}

export default Item;