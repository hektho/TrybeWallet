import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attAction, currenciesActionThunk, expensesAction, saveAction } from '../actions';
import { requestApi } from '../api';
import Forms from '../components/Forms';
import Header from '../components/Header';
import TableHead from '../components/TableHead';
import './Wallet.css';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'Alimentação',
      descricao: '',
    };
  }

  limpaBorda = () => {
    const tr = document.getElementsByClassName('table-head');
    
    for (let i = 1; i <= tr.length - 1; i += 1) {
      tr[i].classList.remove('borda');
    }
  }

  saveExpenses = async () => {
    const { dispatchExpenses, expenses } = this.props;
    const request = await requestApi();
    
    const cambio = request[this.state.moeda].ask;

    const valorConvertido = (this.state.valor * cambio).toFixed(2);

    dispatchExpenses({id: expenses.length, valorConvertido, cambio, ...this.state});
    const expensesLocalStorage = JSON.parse(localStorage.getItem('expenses'));

    if (expensesLocalStorage) {
      localStorage.setItem('expenses', JSON.stringify([...expensesLocalStorage, 
        {id: expenses.length, valorConvertido, cambio, ...this.state}]));
    } else {
      localStorage.setItem('expenses', JSON.stringify([{id: expenses.length, valorConvertido, cambio, ...this.state}]));
    }

    this.setState({
      valor: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'Alimentação',
      descricao: ''
    });


  }

  attExpense = async () => {
    const { expenses, dispatchAttButton, dispatchSaveButton, dispatchExpenses } = this.props;
    const btnId = document.getElementsByClassName('borda')[0].lastChild.lastChild.id;

    const request = await requestApi();
    
    const cambio = request[this.state.moeda].ask;

    const valorConvertido = (this.state.valor * cambio).toFixed(2);

    console.log(expenses);
    dispatchAttButton(true);
    dispatchSaveButton(false);

    const expensesIndex = expenses.findIndex((i) => +i.id === +btnId);

    expenses[expensesIndex] = { id: expensesIndex, valorConvertido, cambio, ...this.state };

    console.log(expenses);
    dispatchExpenses([]);
    dispatchExpenses(expenses);
    localStorage.setItem('expenses', JSON.stringify(expenses))
    
    this.setState({
      valor: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'Alimentação',
      descricao: ''
    });
  }

  handleInputsChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });

  }

  editaDespesa = ({ target }) => {
    const { id: btnId } = target;
    console.log(btnId);
    const { expenses, dispatchAttButton, dispatchSaveButton } = this.props;

    dispatchAttButton(false);
    dispatchSaveButton(true);

    const expensesIndex = expenses.findIndex((i) => +i.id === +btnId);
    const tr = document.getElementsByClassName('table-head');
    
    this.limpaBorda();
    
    tr[expensesIndex + 1].classList.toggle('borda');

    const expensesObject = expenses[expensesIndex];

    console.log(expensesObject);

    this.setState({
      valor: expensesObject.valor,
      moeda: expensesObject.moeda,
      metodo: expensesObject.metodo,
      categoria: expensesObject.categoria,
      descricao: expensesObject.descricao,
    });

  }

  excluiDespesa = ({ target }) => {
    const { id: btnId } = target;
    
    const { expenses, dispatchExpenses } = this.props;

    const filtered = expenses.filter(({ id }) => +btnId !== +id);
    filtered.forEach((i, index) => i.id = index);

    localStorage.setItem('expenses', JSON.stringify(filtered));
    return dispatchExpenses(filtered);
  }

  async componentDidMount() {
    const { walletCurrencies, dispatchExpenses } = this.props;
    const result = await requestApi();
    walletCurrencies(Object.keys(result));
    const expensesLocalStorage = JSON.parse(localStorage.getItem('expenses'));
    if (expensesLocalStorage) return dispatchExpenses(expensesLocalStorage);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <Forms 
          { ...this.state } 
          handleInputsChange={ this.handleInputsChange } 
          saveExpenses={ this.saveExpenses }
          attExpense={ this.attExpense }
        />
        <TableHead
          expenses={ expenses }
          excluiDespesa={ this.excluiDespesa }
          editaDespesa={ this.editaDespesa }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.userReducer.email,
  currencies: state.walletReducer.currencies,
  expenses: state.walletReducer.expenses,
  attButton: state.buttonsReducer.attExpenses,
  saveButton: state.buttonsReducer.saveExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  walletCurrencies: (currencies) => dispatch(currenciesActionThunk(currencies)),
  dispatchExpenses: (expenses) => dispatch(expensesAction(expenses)),
  dispatchAttButton: (att) => dispatch(attAction(att)),
  dispatchSaveButton: (save) => dispatch(saveAction(save)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
