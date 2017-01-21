import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInterfaceActions from '../actions/user_interface_actions';

import Dashboard from './dashboard';

const CalendarApp = React.createClass({

  render() {
    return (
      <Dashboard
      {...this.props}/>
    );
  }
});

function mapStateToProps(state) {
  return {
    ...state.mainReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userInterfaceActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarApp);
