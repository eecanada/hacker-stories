import React from 'react'

const Test = (props) => {
  console.log(props)
  return ( 
    <div>
    <div> {props.names[0]}</div>
    <div> {props.hobby[0]}</div>
    </div>
   );
}
 
export default Test;