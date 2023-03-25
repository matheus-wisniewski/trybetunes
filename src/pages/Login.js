import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Logo from '../image/logo.png';
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
      <div className="login__div" data-testid="page-login">
        <form className="login__div__form">

          <img src={ Logo } alt="logo" />

          <label htmlFor="name-label">
            <input
              className="login__form__name__input"
              type="text"
              name="nameArea"
              required
              placeholder="Email or username"
              data-testid="login-name-input"
              onChange={ this.handleChange }
              value={ nameArea }
            />
          </label>

          <label htmlFor="button-label">
            <input
              className="login__form__button"
              type="button"
              name="isSaveButtonDisabled"
              data-testid="login-submit-button"
              value="Log in"
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
