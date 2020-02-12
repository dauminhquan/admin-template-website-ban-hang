import React, {Component,} from "react";

class MqDivDropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false,
      className: this.props.className
    }
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    const {hideoutclick} = this.props
    if(hideoutclick){
      document.addEventListener('click', this.handleClick)
    }

  }

  componentWillUnmount() {
    const {hideoutclick} = this.props
    if(hideoutclick){
      document.removeEventListener('click', this.handleClick)
    }
  }
  handleClick = (event) => {
    const { target } = event
    if (!this.wrapperRef.current.contains(target)) {
      this.closeMenuOpen()
    }
  }
  closeMenuOpen(){
    this.setState({
      menuOpen: false
    })
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>{
        if(child.type.name){
          if(child.type.name == 'MqDivDropdownHead'){
            return React.cloneElement(child, { onClick: () => {
                this.setState((state) => {
                  state.menuOpen = !state.menuOpen
                  return state
                })
              }}
            )
          }
          if(child.type.name == 'MqDivDropdownBody' || child.type.name  == 'MqDivDropdown'){
            let props = {}
            if(this.state.menuOpen){
              props.menustate = 1
            }
              return React.cloneElement(child, {...props}
            )
          }

        }
        return child
      }
    )


    let className = this.props.className ? this.props.className.split(' '): []
    if(this.state.menuOpen == false){
      className = className.filter(item => {
        return item !='show'
      })
    }else{
      className.push('show')
    }
    className = className.join(' ')
    return(
      <div {...this.props} className={className} ref={this.wrapperRef}>
        {childrenWithProps}
      </div>
    )
  }
}


export default MqDivDropdown
