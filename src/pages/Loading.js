import React, { Component } from 'react';
import '../styles/Loading.css';

class Loading extends Component {
  render() {
    return (
      <main className="loading--div">
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      </main>
    );
  }
}

export default Loading;
