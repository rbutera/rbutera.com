import React, { Component } from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "react-visibility-sensor"

type VSensorProps = {
  children: Function
  once: boolean
}

type VSensorState = {
  active: boolean
}

class VSensor extends Component<VSensorProps, VSensorState> {
  constructor(props: VSensorProps) {
    super(props)
    this.state = {
      active: true,
    }
  }

  render() {
    const { active } = this.state
    const { once, children, ...theRest } = this.props
    return (
      <VisibilitySensor
        active={active}
        onChange={isVisible =>
          once && isVisible && this.setState({ active: false })
        }
        {...theRest}
      >
        {({ isVisible }) => children({ isVisible })}
      </VisibilitySensor>
    )
  }
}

export default VSensor
