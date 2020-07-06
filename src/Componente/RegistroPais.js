import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class RegistroPais extends React.Component {

  state = {
    pais_id: '',
    pais_id2: '',
    nombre: '',
    fronteras: [],

    options: [],
    seleccionados: [],
  }

  handleChangePaisId = event => {
    this.setState({ pais_id: event.target.value });
  }

  handleChangePaisId2 = event => {
    this.setState({ pais_id2: event.target.value });
  }

  handleChangeNombre = event => {
    this.setState({ nombre: event.target.value });
  }

  onSelect(selectedList, selectedItem) {
    //console.log(selectedList)
    this.setState({ seleccionados: selectedList })
  }

  onRemove(selectedList, removedItem) {
    this.setState({ seleccionados: selectedList })
  }

  async componentDidMount() {
    API.get('Pais/ObtenerPaisCombo2')
      .then(res => {
        //console.log(res);
        const paises = res.data.data;
        this.setState({ options: paises });
      })
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ fronteras: [] });
    for(var i in this.state.seleccionados)
      this.state.fronteras.push(this.state.seleccionados[i].id);

    const pais = {
      pais_id: this.state.pais_id,
      pais_id2: this.state.pais_id2,
      nombre: this.state.nombre,
      fronteras: this.state.fronteras,
    };

    API.post('Pais/RegistrarPais', { pais })
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
              <label htmlFor="pais_id">Id</label>
            </div>
            <div className="col-75">
              <input type="text" id="pais_id" name="pais_id" placeholder="Ingrese id" required onChange={this.handleChangePaisId} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="pais_id2">Id 2</label>
            </div>
            <div className="col-75">
              <input type="text" id="pais_id2" name="pais_id2" placeholder="Ingrese id 2" required onChange={this.handleChangePaisId2} />
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
              <label htmlFor="fronteras">Fronteras</label>
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
