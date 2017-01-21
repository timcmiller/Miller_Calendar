import React from 'react';

import Day from './day/day.jsx';

export default React.createClass({

  render() {

    var DayNodes = this.props.week.map((day) => {
      return <Day day={day} key={Math.random() * day}/>
    });

    return (
      <div className="weekContainer">
        {DayNodes}
      </div>
    );
  }
});
