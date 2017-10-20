import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function BaselineQuery({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      Current: Baseline Query
    </div>
  )
}

BaselineQuery.propTypes = {
  data: React.PropTypes.object.isRequired
}

const query = graphql(gql`
  query BaselineQuery($id: Int!){
    test(id: $id) {
      a
      c {
        e
        f
      }
      d {
        e
        f
      }
    }
  }
`, {
  options: {variables: {id: 1}}
});

export default compose(
  query
)(BaselineQuery);
