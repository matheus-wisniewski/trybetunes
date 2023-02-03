import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';

class App extends Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>

        <Switch>
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/search" component={ Search } />
          <Route exact path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
