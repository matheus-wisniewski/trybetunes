import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

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
      <>
        <Header />
        <div data-testid="page-search">
          <form>
            <input
              type="text"
              value={ inputName }
              name="inputName"
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
            <input
              type="button"
              data-testid="search-artist-button"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleClick }
              value="pesquisar"
            />
          </form>

          <div>
            { artist && (
              <h1>
                Resultado de álbuns de:
                { ' ' }
                {artist}
              </h1>)}
            {albuns.length === 0 ? (<h1>Nenhum álbum foi encontrado</h1>) : (
              albuns.map((album, index) => (
                <div key={ index }>
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    <img src={ album.artworkUrl100 } alt={ album.artistName } />
                    <p>{ album.collectionName }</p>
                    <p>{album.artistName }</p>
                  </Link>
                </div>
              ))
            )}
            {searching && <Loading />}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
