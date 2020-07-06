import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class RegistroProfesional extends React.Component {

  state = {
    profesional_id: '',
    nombre: '',
    areas: [],

    options: [],
    seleccionados: [],
  }

  handleChangeProfesionalId = event => {
    this.setState({ profesional_id: event.target.value });
  }

  handleChangeNombre = event => {
    this.setState({ nombre: event.target.value });
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
      
    const profesional = {
      profesional_id: this.state.profesional_id,
      nombre: this.state.nombre,
      areas: this.state.areas,
    };

    API.post('Profesional/RegistrarProfesional', { profesional })
      .then(res => {
        //console.log(res);
        alert(res.statusText);
      })

  }

  render() {
    return (
      <div className="container">
        <form align="left" onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-25">
              <label htmlFor="profesional_id">Id</label>
            </div>
            <div className="col-75">
              <input type="text" id="profesional_id" name="profesional_id" placeholder="Ingrese id" required onChange={this.handleChangeProfesionalId} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="col-75">
              <input type="text" id="nombre" name="nombre" placeholder="Ingrese nombre" required onChange={this.handleChangeNombre} />
            </div>
          </div>

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
            <input type="submit" value="Registrar" />
          </div>

        </form>
      </div>
    )
  }
}
