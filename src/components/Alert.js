import React from 'react'

function Alert(props) {
  return (
    // Using JS template literal and using $ to use JS variable
    // This will return false if props.alert is `null` else it will return the alert because props.alert will not be null
    props.alert && <div className={`alert alert-${props.alert.alertType} fade show`} role="alert">
        <strong>{props.alert.alertType}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
