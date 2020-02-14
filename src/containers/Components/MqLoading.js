import React, {Component} from "react";
class MqLoading extends Component{

  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default MqLoading
