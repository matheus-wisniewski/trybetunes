import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-favorites"> Favorite </div>
      </>
    );
  }
}

export default Favorites;
