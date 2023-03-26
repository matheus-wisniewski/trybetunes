import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import '../styles/Search.css';
import Footer from '../components/Footer';

class Search extends Component {
  state = {
    inputName: '',
    isSaveButtonDisabled: true,
    searching: false,
    albuns: [],
    artist: '',
  };

  handleClick = async () => {
    const { inputName } = this.state;
    this.setState({ searching: true, artist: inputName });
    const response = await searchAlbumsAPI(inputName);
    this.setState({ searching: false, albuns: response, inputName: '' });
  };

  validateInput = () => {
    const { inputName } = this.state;

    const validSearch = inputName.length < 2;

    this.setState({ isSaveButtonDisabled: validSearch,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, () => this.validateInput());
  };

  render() {
    const { inputName, isSaveButtonDisabled, searching, artist, albuns } = this.state;
    return (
      <main className="search--component__main">
        <section>
          <div data-testid="page-search" className="search--component__searchDiv">
            <input
              type="text"
              value={ inputName }
              name="inputName"
              placeholder="Artists or Albuns"
              onChange={ this.handleChange }
              data-testid="search-artist-input"
              className="search--component__searchBar"
            />
            <button
              data-testid="search-artist-button"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleClick }
              className="search--component__searchButton"
            >
              <BsSearch />
            </button>
          </div>
        </section>

        <header style={ { backgroundColor: 'blueviolet' } }>
          <Header />
        </header>

        <body className="search--component__body">
          { artist && (
            <h1 className="search--component__resultAlbuns">
              Resultado de álbuns de:
              <p style={ { textTransform: 'capitalize' } }>
                { artist }
              </p>
            </h1>)}
          {
            albuns.length === 0 ? (
              <h1 className="search--body--firstMessage">
                Nenhum álbum foi encontrado
              </h1>) : (
              albuns.map((album, index) => (
                <div key={ index } className="search--component__albums">
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    <img src={ album.artworkUrl100 } alt={ album.artistName } />
                    <p style={ { color: '#efefef' } }>
                      Album:
                      {' '}
                      { album.collectionName }
                    </p>
                    <p style={ { color: '#efefef' } }>
                      Artista:
                      {album.artistName }
                    </p>
                  </Link>
                </div>
              ))
            )
          }
          {searching && <Loading />}
        </body>

        <footer className="search--component__footer">
          <Footer />
        </footer>
      </main>
    );
  }
}

export default Search;
