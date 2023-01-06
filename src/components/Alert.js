import React from 'react'

function Alert(props) {
    const captialize = (word)=>{
     const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    // props.alert&& means if true then move ahead of && just like if
    props.alert &&
    <div>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong> {captialize(props.alert.type)}</strong>: {props.alert.msg}
  
</div>
    </div>
  )
}

export default Alert
