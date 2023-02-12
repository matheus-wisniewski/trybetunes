import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state = {
    inputName: '',
    isSaveButtonDisabled: true,
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
    const { inputName, isSaveButtonDisabled } = this.state;
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
            <button
              data-testid="search-artist-button"
              disabled={ isSaveButtonDisabled }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
