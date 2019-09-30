import React, { Component } from 'react'

class Creatures extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.creature.name} 
          <img src ={this.props.creature.imageUrl} />
        </div>
      </div>
    )
  }
}

export default Creatures