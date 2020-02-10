import React, {Component} from "react";

class MqNav extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let className = this.props.className.split(' ')
    let style = {}
    if(className.includes('nav-group-sub')){
      style = {display: this.props.menustate? 'block' : 'none'}
    }
    return (
      <ul {...this.props} style={style}>
        {this.props.children}
      </ul>
    )
  }
}


export default MqNav
