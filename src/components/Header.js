import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import '../styles/Header.css';

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
      <header data-testid="header-component" className="header--component">
        {/* eslint-disable-next-line max-len */}
        { loading ? <Loading /> : <p data-testid="header-user-name" className="header--component__user">{ name }</p>}
        <nav className="header--component__nav">
          <Link
            to="/search"
            data-testid="link-to-search"
            className="header--component--search__link"
          >
            <BsSearch />
            Pesquisar
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            <MdOutlineFavoriteBorder />
            Favoritas
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            <GiPlagueDoctorProfile />
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
