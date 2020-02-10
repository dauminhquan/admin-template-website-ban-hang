import React, {Component} from "react";

class MqDivDropdownBody extends Component{
  constructor(props){
    super(props)
  }
  render() {
    const {menustate} = this.props
    let className = this.props.className.split(' ')

    if(menustate){
      if(!className.includes('show')){
        className.push('show')
      }else{
        className = className.filter(item => {
          return item !='show'
        })
      }
    }
    className = className.join(' ')
    return(
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    )
  }
}
export default MqDivDropdownBody
