import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'40px'}}>
        {props.alert.type && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type} : </strong> {props.alert.msg}.
            </div>
        </div>}
    </div>
    )
}

export default Alert
