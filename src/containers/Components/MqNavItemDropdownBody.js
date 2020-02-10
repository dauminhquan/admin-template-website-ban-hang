import React, {Component} from "react";

class MqNavItemDropdownBody extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={this.props.className} style={{display: this.props.menustate? 'inherit' : 'none'}}>
        {this.props.children}
      </div>
    )
  }
}

export default MqNavItemDropdownBody
