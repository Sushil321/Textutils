import React from 'react'

function Alert(props) {
  const capitalize=(type)=>{
    const lower = type.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    

  }
  return (
  <div>
    {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg} : <strong>{capitalize(props.alert.type)}</strong>
        
      </div>
}
    
    

  </div>

  )
}


export default Alert
