import React, { Component } from 'react'
import Creatures from './creatures'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const CREATURE_QUERY = gql`
  {
    creatures {
      id
      name
      imageUrl
    }
  }
`

class CreatureList extends Component {
  render() {

    return (
        <Query query={CREATURE_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) {
                console.log(error, data)
                return <div>Error </div>}
            console.log(error)
            const creaturesToRender = data.creatures
                console.log(data)
                return (
                    <div>
                    {creaturesToRender.map(creature => <Creatures key={creature.id} creature={creature} />)}
                    </div>)
            }}
        </Query>
    )
  }
}

export default CreatureList