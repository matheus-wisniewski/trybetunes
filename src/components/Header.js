import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    name: '',
    loading: true,
  };

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({
      name, loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : <p data-testid="header-user-name">{ name }</p> }
        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
      </header>
    );
  }
}

export default Header;
