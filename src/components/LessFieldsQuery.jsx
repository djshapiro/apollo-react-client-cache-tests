import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function LessFieldsQuery({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      Current: Less Fields Query
    </div>
  )
}

LessFieldsQuery.propTypes = {
  data: React.PropTypes.object.isRequired
}

const query = graphql(gql`
  query LessFieldsQuery($id: Int!){
    test(id: $id) {
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
)(LessFieldsQuery);
