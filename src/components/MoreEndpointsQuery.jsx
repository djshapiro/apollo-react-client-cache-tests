import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function MoreEndpointsQuery({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      Current: More Endpoints Query
    </div>
  )
}

MoreEndpointsQuery.propTypes = {
  data: React.PropTypes.object.isRequired
}

const query = graphql(gql`
  query MoreEndpointsQuery($id: Int!){
    test(id: $id) {
      a
      b
      c {
        e
        f
      }
      d {
        e
        f
      }
    }
    othertest(id: $id) {
      othertestfield
    }
  }
`, {
  options: {variables: {id: 1}}
});

export default compose(
  query
)(MoreEndpointsQuery);
