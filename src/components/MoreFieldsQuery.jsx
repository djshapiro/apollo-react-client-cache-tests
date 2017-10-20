import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function MoreFieldsQuery({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      Current: More Fields Query
    </div>
  )
}

MoreFieldsQuery.propTypes = {
  data: React.PropTypes.object.isRequired
}

const query = graphql(gql`
  query MoreFieldsQuery($id: Int!){
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
  }
`, {
  options: {variables: {id: 1}}
});

export default compose(
  query
)(MoreFieldsQuery);
