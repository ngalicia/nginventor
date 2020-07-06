import React from 'react';
import API from '../api';

export default class TraerProfesional extends React.Component {
  state = {
    profesionales: []
  }

  async componentDidMount() {
    API.get('Profesional/ObtenerProfesional')
      .then(res => {
        console.log(res);
        const profesionales = res.data.data;
        this.setState({ profesionales });
      })
  }

  render() {
    return (
    
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Id</th><th>Nombre</th><th>Area De Investigación</th></tr>
          </thead>
          <tbody>
            {this.state.profesionales.map((profesional, index) => <tr key={index}><td>{profesional.profesional_id}</td><td>{profesional.nombre}</td>
                                <td><ul>
                                  {profesional.areas_de_investigacion != null ? profesional.areas_de_investigacion.map((area_de_investigacion, index) => (
                                      <li key={index}>{area_de_investigacion}</li>
                                  )):<li>No Tiene</li>}
                                </ul></td></tr>)}
          </tbody>
        </table>
      </div>
      
    )
  }
}
