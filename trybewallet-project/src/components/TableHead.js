import React, { Component } from 'react'
import './TableHead.css';

export default class extends Component {
  render() {
    const { expenses, excluiDespesa, editaDespesa } = this.props;
    
    return (
      <table >
        <thead>
          <tr className='table-head'>
            <th className='cell-head claro'> Descrição </th>
            <th className='cell-head escuro'> Tag </th>
            <th className='cell-head claro'> Método de pagamento </th>
            <th className='cell-head escuro'> Valor </th>
            <th className='cell-head claro'> Moeda </th>
            <th className='cell-head escuro'> Câmbio utilizado </th>
            <th className='cell-head claro'> Valor convertido </th>
            <th className='cell-head escuro'> Moeda de conversão </th>
            <th className='cell-head claro'> Editar/Excluir </th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((i) => (
            <tr key={ i.id } className='table-head'>
              <td className='cell-body claro'>
                { i.descricao }
              </td>
              <td className='cell-body escuro'>
                { i.categoria }
              </td>
              <td className='cell-body claro'>
                { i.metodo }
              </td>
              <td className='cell-body escuro'>
                { i.valor }
              </td>
              <td className='cell-body claro'>
                { i.moeda }
              </td>
              <td className='cell-body escuro'>
                { i.cambio }
              </td>
              <td className='cell-body claro'>
                { i.valorConvertido }
              </td>
              <td className='cell-body escuro'>
                BRL/Real
              </td>
              <td className='cell-body claro'>
                <input type='button' value='Editar' id={i.id} className='edit' 
                  onClick={ editaDespesa } 
                />
                <input className='exclui' type='button' value='Excluir' id={i.id} 
                  onClick={ excluiDespesa } 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
