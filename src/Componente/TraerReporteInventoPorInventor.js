import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class TraerReporteInvetoPorInventor extends React.Component {
  state = {
    inventos: [],
    inventores: [],

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
    API.get('Patente/ObtenerInventorCombo')
      .then(res => {
        //console.log(res);
        const inventores = res.data.data;
        this.setState({ options: inventores });
      })
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ inventores: [] });
    for(var i in this.state.seleccionados)
      this.state.inventores.push(this.state.seleccionados[i].name);
      
    const datos = {
      inventores: this.state.inventores.toString().split(',')
    };

    API.post('Reporte/ObtenerReporteInventoPorInventor', { datos })
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
              <label htmlFor="inventores">Inventores</label>
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
              <tr><th>Inventor</th><th>Id Inventor</th><th>Id Invento</th><th>Invento</th></tr>
            </thead>
            <tbody>
              {this.state.inventos.map((invento, index) => <tr key={index}><td>{invento.inventor_nombre}</td><td>{invento.inventor_id}</td><td>{invento.invento_id}</td><td>{invento.invento_nombre}</td></tr>)}
            </tbody>
          </table>
        </div>
        
      </div>
      
    )
  }
}
