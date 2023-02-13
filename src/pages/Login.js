import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    nameArea: '',
    isSaveButtonDisabled: true,
    loading: false,
  };

  handleClick = async () => {
    const { nameArea } = this.state;
    const { history } = this.props;

    this.setState({ loading: true });

    await createUser({ name: nameArea });

    this.setState({ loading: false });

    history.push('/search');
  };

  validateInputs = () => {
    const { nameArea } = this.state;

    const minLength = 3;
    const validateName = nameArea.length < minLength;

    this.setState({ isSaveButtonDisabled: validateName });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value }, () => this.validateInputs());
  };

  render() {
    const { isSaveButtonDisabled, loading, nameArea } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name-area">
            <input
              type="text"
              name="nameArea"
              placeholder="insira seu nome"
              data-testid="login-name-input"
              onChange={ this.handleChange }
              value={ nameArea }
            />

            <input
              type="button"
              name="isSaveButtonDisabled"
              data-testid="login-submit-button"
              value="Entrar"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleClick }
            />
          </label>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Login;
