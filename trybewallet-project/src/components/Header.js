import React, { Component } from 'react'
import { connect } from 'react-redux'
import carteiraImg from '../imagens/carteira.png';
import './Header.css';

class Header extends Component {

  render() {
    const { userEmail, walletExpenses } = this.props;

    console.log(userEmail);
    const convertedValues = walletExpenses.map(({ valorConvertido }) => +valorConvertido);
    const totalValue = convertedValues.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    return (
      <header className='header-container'>
        <img src={ carteiraImg } alt='Ícone de uma carteira' width='50px'/>
        <section className='user-info-header'>
          <span>
            Email: { userEmail || localStorage.getItem('userEmail') }
          </span>
          <h3> Despesa total: <span id='total-value'> { totalValue } </span> BRL </h3>
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.userReducer.email,
  walletExpenses: state.walletReducer.expenses,
});

export default connect(mapStateToProps, null)(Header);