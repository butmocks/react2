import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.number === nextProps.number && this.props.title === nextProps.title);
  //   return false;
  // }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>

        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

// Numbers.PropTypes = {
//   title: PropTypes.string,
//   number: PropTypes.number.isRequired
// }
// Numbers

export default Numbers;
