import React, {Component} from "react";
class SuccessIcon extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="f-modal-icon f-modal-success animate">
        <span className="f-modal-line f-modal-tip animateSuccessTip"></span>
        <span className="f-modal-line f-modal-long animateSuccessLong"></span>
        <div className="f-modal-placeholder"></div>
        <div className="f-modal-fix"></div>
      </div>
    )
  }
}

export default SuccessIcon
