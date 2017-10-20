import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function LessSubfieldsQuery({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      Current: Less Subfields Query
    </div>
  )
}

LessSubfieldsQuery.propTypes = {
  data: React.PropTypes.object.isRequired
}

const query = graphql(gql`
  query LessSubfieldsQuery($id: Int!){
    test(id: $id) {
      a
      b
      c {
        e
      }
      d {
        e
      }
    }
  }
`, {
  options: {variables: {id: 1}}
});

export default compose(
  query
)(LessSubfieldsQuery);
