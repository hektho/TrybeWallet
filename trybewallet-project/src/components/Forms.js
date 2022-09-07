import React, { Component } from 'react'
import { connect } from 'react-redux';
import { expensesAction } from '../actions';
import { requestApi } from '../api';
import './Forms.css';

class Forms extends Component {
  
  render() {
    const paymentsWay = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Transporte', 'Saúde', 'Trabalho'];
    const {
      currencies,
      valor,
      moeda,
      metodo,
      categoria,
      descricao,
      handleInputsChange,
      saveExpenses,
      attExpense,
      attButton,
      saveButton,
    } = this.props;

    return (
      <form className='forms-container'>
        <label htmlFor='valor'> Valor:
          <input
            value={ valor }
            type='number' 
            id='valor' 
            name='valor' 
            onChange={ handleInputsChange } 
          />
        </label>
        <label htmlFor='moeda'> Moeda:
          <select
            value={ moeda }
            id='moeda' 
            name='moeda' 
            onChange={ handleInputsChange }
          >
            {currencies.map((i) => <option key={ i }> {i} </option>)}
          </select>
        </label>
        <label htmlFor='metodos'> Método de pagamento:
          <select
            value={ metodo }
            id='metodos' 
            name='metodo' 
            onChange={ handleInputsChange }
          >
            {paymentsWay.map((i) => <option key={ i }> {i} </option>)}
          </select>
        </label>
        <label htmlFor='categories'>
          <select
            value={ categoria }
            id='categories' 
            name='categoria' 
            onChange={ handleInputsChange }
          >
            {categories.map((i) => <option key={ i }> { i } </option>)}
          </select>
        </label>
        <label htmlFor='description'> Descrição:
          <input
            value={ descricao }
            type='text' 
            id='description' 
            name='descricao' 
            onChange={ handleInputsChange }
            autoComplete='off'
          />
        </label>
        <button type='button' onClick={ saveExpenses } disabled={ saveButton }>
          Adicionar despesa
        </button>
        <button type='button' onClick={ attExpense } disabled={ attButton }>
          Atualiza despesa
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  currencies: state.walletReducer.currencies,
  expenses: state.walletReducer.expenses,
  attButton: state.buttonsReducer.attExpenses,
  saveButton: state.buttonsReducer.saveExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  expensesDispatch: (expenses) => dispatch(expensesAction(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);