import React from "react";

function Alerts(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type1} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.type1} <strong>{props.alert.msg}</strong>
          {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
        </div>
      )}
    </div>
  );
}

export default Alerts;
