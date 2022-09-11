import React, { Component } from 'react'
import { connect } from 'react-redux';
import { emailAction } from '../actions';
import './Login.css';
import carteiraImg from '../imagens/carteira.png';

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
      <section className='login-container'>
        <img src={ carteiraImg } alt='Imagem de uma carteira' width='100px' />
        <h1> TrybeWallet </h1>
        <label className='label-container' htmlFor='email'> E-mail:
            <input autoComplete='off' className='login-input' type='text' name='email' onChange={ this.handleChange } id='email'/>
        </label>
        <label className='label-container' htmlFor='senha'> Senha:
            <input autoComplete='off' className='login-input' type='password' name='senha' onChange={ this.handleChange } id='senha'/>
        </label>
        <button className='button-login' type='button' onClick={ this.buttonClick } disabled={ disabled } >
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