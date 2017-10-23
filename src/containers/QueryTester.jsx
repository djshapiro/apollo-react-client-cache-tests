import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'
import BaselineQuery from '../components/BaselineQuery'
import MoreFieldsQuery from '../components/MoreFieldsQuery'
import LessFieldsQuery from '../components/LessFieldsQuery'
import MoreEndpointsQuery from '../components/MoreEndpointsQuery'
import LessSubfieldsQuery from '../components/LessSubfieldsQuery'

class QueryTester extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: '',
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
    const divStyle = {
      fontFamily: 'Andale mono, monospace',
    };
    return (
      <div style={divStyle}>
        { open === '' && <div>Click a button</div>}
        { open === 'baseline' && <BaselineQuery />}
        { open === 'moreFields' && <MoreFieldsQuery />}
        { open === 'lessFields' && <LessFieldsQuery />}
        { open === 'moreEndpoints' && <MoreEndpointsQuery />}
        { open === 'lessSubfields' && <LessSubfieldsQuery />}
        <br />

        <button
          onClick={() => {
            this.setState({open: 'baseline'});
          }}>
        {'{{a X c {e f} d {e f}} X {X}}'} - baseline
        </button>
        <br />

        <button
          onClick={() => {
            this.setState({open: 'moreFields'});
          }}>
        {'{{a b c {e f} d {e f}} X {X}}'} - more fields
        </button>
        <br />
      
        <button
          onClick={() => {
            this.setState({open: 'lessFields'});
          }}>
        {'{{X X c {e f} d {e f}} X {X}}'} - less fields
        </button>
        <br />
      
        <button
          onClick={() => {
            this.setState({open: 'lessSubfields'});
          }}>
        {'{{a X c {e X} d {e X}} X {X}}'} - less subfields
        </button>
        <br />

        <button
          onClick={() => {
            this.setState({open: 'moreEndpoints'});
          }}>
        {'{{a X c {e f} d {e f}} g {h}}'} - more endpoints
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
