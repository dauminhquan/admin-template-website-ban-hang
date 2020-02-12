import React, {Component} from "react";
import PropTypes from "prop-types";
import MqSelect from "./MqSelect";
class MqAlert extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
  }
  render(){
    if(this.state.show){
      return(
        <div {...this.props}>
          {this.props.children}
          <button type="button" className="close" data-dismiss="alert" onClick={() => {
            this.setState({
              show:false
            })
          }}>×</button>
        </div>
      )
    }
    return ""
  }
}
MqSelect.propTypes = {
  closeAlert: PropTypes.func
}
export default MqAlert
