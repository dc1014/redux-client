import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

// the ref below is used for unit testing

export default React.createClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});
