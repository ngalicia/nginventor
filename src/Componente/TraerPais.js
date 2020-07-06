import React from 'react';
import API from '../api';

export default class TraerPais extends React.Component {
  state = {
    paises: []
  }

  async componentDidMount() {
    API.get('Pais/ObtenerPais')
      .then(res => {
        //console.log(res);
        const paises = res.data.data;
        this.setState({ paises });
      })
  }

  render() {
    return (
    
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Id</th><th>Id 2</th><th>Nombre</th><th>Fronteras</th></tr>
          </thead>
          <tbody>
            {this.state.paises.map((pais, index) => <tr key={index}><td>{pais.pais_id}</td><td>{pais.pais_id2}</td><td>{pais.nombre}</td>
                                <td><ul>
                                  {pais.fronteras != null ? pais.fronteras.map((frontera, index) => (
                                      <li key={index}>{frontera}</li>
                                  )):<li>No Tiene</li>}
                                </ul></td></tr>)}
          </tbody>
        </table>
      </div>
      
    )
  }
}
