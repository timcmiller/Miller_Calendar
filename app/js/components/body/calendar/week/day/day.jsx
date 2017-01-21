import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="dayContainer">
        {this.props.day}
      </div>
    );
  }
});
