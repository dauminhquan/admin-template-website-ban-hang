import React, {Component} from "react";
class WarningIcon extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="f-modal-icon f-modal-warning animate">
        <span className="f-modal-x-mark">
          <span className="f-modal-line f-modal-left animateXLeft"></span>
          <span className="f-modal-line f-modal-right animateXRight"></span>
        </span>
        <div className="f-modal-placeholder"></div>
        <div className="f-modal-fix"></div>
      </div>
    )
  }
}

export default WarningIcon
