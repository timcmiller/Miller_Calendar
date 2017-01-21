import React from 'react';

import Calendar from './calendar/calendar.jsx';

export default React.createClass({

  render() {
    return (
      <section>
        <h1>{this.props.monthText} {this.props.year}</h1>
        <button onClick={this.props.previousMonth}>Previos Month</button>
        <button onClick={this.props.nextMonth}>Next Month</button>
        <Calendar {...this.props}/>
      </section>
    );
  }
});
