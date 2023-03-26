/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';
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
        { loading ? <Loading />
          : <p data-testid="header-user-name" className="header--component__user">
            <FaRegUserCircle className="header--component__user--icon" />
            { name }
            {/* eslint-disable-next-line indent */}
            </p> }
        <nav className="header--component__nav">

          <Link
            to="/search"
            data-testid="link-to-search"
            className="header--component--search"
          >
            <BsSearch />
            <p>Pesquisar</p>
          </Link>

          <Link
            to="/favorites"
            data-testid="link-to-favorites"
            className="header--component--favorites"
          >
            <MdOutlineFavoriteBorder />
            <p>Favoritas</p>
          </Link>

          <Link
            to="/profile"
            data-testid="link-to-profile"
            className="header--component--profile"
          >
            <GiPlagueDoctorProfile />
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
