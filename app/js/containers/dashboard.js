import React from 'react';
import ReactDOM from 'react-dom';


import CalendarBody from './../components/body/body.jsx';
//import CalendarHeader from './../components/header/header';
//import CalendarFooter from './../components/footer/footer';

export default React.createClass({

  render() {

    return (
      <CalendarBody {...this.props} />
    );
  }
});
