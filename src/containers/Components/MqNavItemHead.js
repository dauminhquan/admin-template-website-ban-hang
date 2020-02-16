import React, {Component} from "react";
import {Link} from "react-router-dom";

class MqNavItemHead extends Component{
  constructor(props){
    super(props)
  }

  render() {
    if(this.props.to){
      return (
        <Link {...this.props}
        onClick={() => {
          if(this.props.clicked){
            this.props.clicked()
          }

        }}
        >
          {this.props.children}
        </Link>)
    }
    return (
      <a href="javascript:void(0)" {...this.props}>
        {this.props.children}
      </a>)
  }
}

export default MqNavItemHead
