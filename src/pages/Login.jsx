import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validData: false,
    };

    this.userValidate = this.userValidate.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    }, () => this.userValidate());
  }

  userValidate() {
    const { email, password } = this.state;
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const validEmail = regex.test(String(email).toLowerCase());
    const minPassLength = 6;
    const isBlocked = (password.length >= minPassLength && validEmail);
    this.setState({
      validData: isBlocked,
    });
  }

  saveEmail(e) {
    e.preventDefault();
    const { email } = this.state;
    localStorage.setItem('user', { email });
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password, validData } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <Link
          to="/comidas"
        >
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ !validData }
            onSubmit={ this.saveEmail }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Login;
