import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation CreateCreature($name: String!) {
    createCreature(name: $name) {
      name
    }
  }
`

class CreateLink extends Component {
  state = {
    name: ''
  }

  render() {
    const { name, imageUrl } = this.state
    return (
      <div>
        <div>
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="the name"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ name }}>
            {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateLink