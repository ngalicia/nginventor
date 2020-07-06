import React from 'react';
import API from '../api';

export default class TraerPatente extends React.Component {
  state = {
    patentes: []
  }

  async componentDidMount() {
    API.get('Patente/ObtenerPatente')
      .then(res => {
        //console.log(res);
        const patentes = res.data.data;
        this.setState({ patentes });
      })
  }

  render() {
    return (
    
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Id Patente</th><th>Id Inventor</th><th>Inventor</th><th>Nacionalidad Inventor</th><th>Fecha Presentación</th><th>Id Invento</th><th>Invento</th></tr>
          </thead>
          <tbody>
            {this.state.patentes.map((patente, index) => <tr key={index}><td>{patente.patente_id}</td><td>{patente.inventor_id}</td><td>{patente.inventor_nombre}</td><td>{patente.inventor_nacionalidad}</td><td>{patente.fecha_presentacion}</td><td>{patente.invento_id}</td><td>{patente.invento_nombre}</td></tr>)}
          </tbody>
        </table>
      </div>
      
    )
  }
}
