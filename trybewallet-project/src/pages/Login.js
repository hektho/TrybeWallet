import React, { Component } from 'react'
import { connect } from 'react-redux';
import { emailAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value }, () => {
      const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
      const { senha, email } = this.state;

      if(regex.test(email) && senha.length >= 6) return this.setState({ disabled: false });
      return this.setState({ disabled: true });
    })
  }

  buttonClick = () => {
    const { emailDispatch, history } = this.props;
    const { email } = this.state;

    localStorage.setItem('userEmail', email);
    emailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    return (
      <section>
        <label htmlFor='email'> E-mail:
            <input type='text' name='email' onChange={ this.handleChange } id='email'/>
        </label>
        <label htmlFor='senha'> Senha:
            <input type='password' name='senha' onChange={ this.handleChange } id='senha'/>
        </label>
        <button type='button' onClick={ this.buttonClick } disabled={ disabled } >
            Entrar
        </button>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    emailDispatch: (email) => dispatch(emailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);