import React, {Component} from "react";

class MqDivDropdownHead extends Component{
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.button){
      return(
        <button {...this.props}>
          {this.props.children}
        </button>
      )
    }
    return(
      <a href="javascript:void(0)" {...this.props}>
        {this.props.children}
      </a>
    )
  }
}
export default MqDivDropdownHead
