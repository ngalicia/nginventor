import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class TraerReporteInvetoPorPais extends React.Component {
  state = {
    inventos: [],
    paises: [],

    options: [],
    seleccionados: [],
  }

  onSelect(selectedList, selectedItem) {
    this.setState({ seleccionados: selectedList })
  }

  onRemove(selectedList, removedItem) {
    this.setState({ seleccionados: selectedList })
  }

  async componentDidMount() {
    API.get('Pais/ObtenerPaisCombo')
      .then(res => {
        //console.log(res);
        const paises = res.data.data;
        this.setState({ options: paises });
      })
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ paises: [] });
    for(var i in this.state.seleccionados)
      this.state.paises.push(this.state.seleccionados[i].name);
      
    const datos = {
      paises: this.state.paises.toString().split(',')
    };

    API.post('Reporte/ObtenerReporteInventoPorPais', { datos })
      .then(res => {
        const inventos = res.data.data;
        this.setState({ inventos });
      })
  }

  render() {
    return (
    
      <div className="container">

        <form align="left" onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-25">
              <label htmlFor="paises">Países</label>
            </div>
            <div className="col-75">
              <Multiselect
                options={this.state.options}
                selectedValues={this.state.selectedValue}
                onSelect={this.onSelect.bind(this)}
                onRemove={this.onRemove.bind(this)}
                displayValue="name"
                showCheckbox={true}
                closeIcon="cancel"
              />
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Mostrar" />
          </div>

        </form>

        <div className="table-container">
          <table>
            <thead>
              <tr><th>País Origen</th><th>Id País Origen</th><th>Id Invento</th><th>Invento</th><th>Año</th></tr>
            </thead>
            <tbody>
              {this.state.inventos.map((invento, index) => <tr key={index}><td>{invento.pais_origen_nombre}</td><td>{invento.pais_origen_id}</td><td>{invento.invento_id}</td><td>{invento.invento_nombre}</td><td>{invento.invento_anio}</td></tr>)}
            </tbody>
          </table>
        </div>
        
      </div>
      
    )
  }
}
