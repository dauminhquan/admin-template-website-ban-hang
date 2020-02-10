import React, {Component} from "react";
class MqNavItem extends Component{
    constructor(props){
      super(props)
      this.state = {
        menuOpen: false,
        className: this.props.className
      }
      this.wrapperRef = React.createRef()
    }
  componentDidMount() {
      if(this.props.hideoutclick){
        document.addEventListener('click', this.handleClick)
      }

  }

  componentWillUnmount() {
    if(this.props.hideoutclick){
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
            if(child.type.name == 'MqNavItemHead'){
             return React.cloneElement(child, { onClick: () => {
                  this.setState((state) => {
                    state.menuOpen = !state.menuOpen
                    return state
                  })
                }}
               )
            }
            if(child.type.name == 'MqNavItemDropdownBody' || child.type.name  == 'MqNav'){
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
      let newClass = this.state.className.split(' ')
      if(this.state.menuOpen){
        newClass.push('nav-item-open')
      }else{
        newClass = newClass.filter(item => {
          return item !='nav-item-open'
        })
      }
      newClass = newClass.join(' ')
      return (
        <li ref={this.wrapperRef} className={newClass}>
          {childrenWithProps}
        </li>
      )
    }
}
export default MqNavItem
