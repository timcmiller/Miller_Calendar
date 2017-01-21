import React from 'react';

import Week from './week/week.jsx';

export default React.createClass({

  render() {

    var WeekNodes = this.props.calendar.map((week, index) => {
      return <Week week={week} key={index} />;
    });

    return (
      <div className="calendarContainer">
        {WeekNodes}
      </div>
    );
  }
});
