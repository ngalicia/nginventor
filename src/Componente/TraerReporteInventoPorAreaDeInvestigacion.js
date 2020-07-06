import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class TraerReporteInvetoPorAreaDeInvestigacion extends React.Component {
  state = {
    inventos: [],
    areas: [],

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
    API.get('Patente/ObtenerAreaDeInvestigacionCombo')
      .then(res => {
        //console.log(res);
        const areas = res.data.data;
        this.setState({ options: areas });
      })
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ areas: [] });
    for(var i in this.state.seleccionados)
      this.state.areas.push(this.state.seleccionados[i].name);
      
    const datos = {
      areas: this.state.areas.toString().split(',')
    };

    API.post('Reporte/ObtenerReporteInventoPorAreaDeInvestigacion', { datos })
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
              <label htmlFor="areas">Areas De Investigación</label>
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
              <tr><th>Area De Investigación Origen</th><th>Id Area De Investigación Origen</th><th>Id Invento</th><th>Invento</th><th>Año</th></tr>
            </thead>
            <tbody>
              {this.state.inventos.map((invento, index) => <tr key={index}><td>{invento.area_de_investigacion_nombre}</td><td>{invento.area_de_investigacion_id}</td><td>{invento.invento_id}</td><td>{invento.invento_nombre}</td><td>{invento.invento_anio}</td></tr>)}
            </tbody>
          </table>
        </div>
        
      </div>
      
    )
  }
}
