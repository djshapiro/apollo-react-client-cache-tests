import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'
import FullQuery from '../components/FullQuery'
import MoreFieldsQuery from '../components/MoreFieldsQuery'
import LessFieldsQuery from '../components/LessFieldsQuery'
import MoreEndpointsQuery from '../components/MoreEndpointsQuery'
import LessSubfieldsQuery from '../components/LessSubfieldsQuery'

class QueryTester extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: undefined,
    };
  }
  render() {
    const data = this.props.data || {};
    const { open } = this.state;
    if (data.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        { open === 'full' && <FullQuery />}
        { open === 'moreFields' && <MoreFieldsQuery />}
        { open === 'lessFields' && <LessFieldsQuery />}
        { open === 'moreEndpoints' && <MoreEndpointsQuery />}
        { open === 'lessSubfields' && <LessSubfieldsQuery />}
        <br />

        <button
          onClick={() => {
            this.setState({open: 'full'});
          }}>
        full query
        </button>
        <br />

        <button
          onClick={() => {
            this.setState({open: 'moreFields'});
          }}>
        more fields query
        </button>
        <br />
      
        <button
          onClick={() => {
            this.setState({open: 'lessFields'});
          }}>
        less fields query
        </button>
        <br />
      
        <button
          onClick={() => {
            this.setState({open: 'moreEndpoints'});
          }}>
        more endpoints query
        </button>
        <br />
      
        <button
          onClick={() => {
            this.setState({open: 'lessSubfields'});
          }}>
        less subfields query
        </button>
        <br />

      </div>
    );
  }
}

QueryTester.propTypes = {
  data: React.PropTypes.object
}

export default QueryTester;
