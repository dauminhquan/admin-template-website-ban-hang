import React, {Component} from "react";

class MqDivDropdownHead extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <a href="javascript:void(0)" {...this.props}>
        {this.props.children}
      </a>
    )
  }
}
export default MqDivDropdownHead
