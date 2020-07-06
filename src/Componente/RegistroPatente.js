import React from 'react';
import API from '../api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class RegistroPatente extends React.Component {

  state = {
    patente_id: '',
    inventores: [],
    patente_fecha_presentacion: '',
    invento_nombre: '',
    invento_pais_origen_id: '',
    invento_area_de_investigacion_id: '',
    profesionales: [],
    
    options: [],
    seleccionados: [],
    optionsPaises: [],
    optionsAreas: [],
    optionsProfesionales: [],
    seleccionadosProfesionales: [],
  }

  handleChangePatenteId = event => {
    this.setState({ patente_id: event.target.value });
  }

  handleChangePatenteFechaPresentacion = event => {
    this.setState({ patente_fecha_presentacion: event.target.value });
  }

  handleChangeInventoNombre = event => {
    this.setState({ invento_nombre: event.target.value });
  }

  handleChangeProfesionales = event => {
    this.setState({ profesionales: event.target.value });
  }

  onSelect(selectedList, selectedItem) {
    this.setState({ seleccionados: selectedList })
  }

  onRemove(selectedList, removedItem) {
    this.setState({ seleccionados: selectedList })
  }

  onSelectPaises(selectedList, selectedItem) {
    this.setState({ invento_pais_origen_id: selectedItem.id })
  }

  onRemovePaises(selectedList, removedItem) {
    this.setState({ invento_pais_origen_id: '' })
  }

  onSelectAreas(selectedList, selectedItem) {
    this.setState({ invento_area_de_investigacion_id: selectedItem.id })
  }

  onRemoveAreas(selectedList, removedItem) {
    this.setState({ invento_area_de_investigacion_id: '' })
  }

  onSelectProfesionales(selectedList, selectedItem) {
    this.setState({ seleccionadosProfesionales: selectedList })
  }

  onRemoveProfesionales(selectedList, removedItem) {
    this.setState({ seleccionadosProfesionales: selectedList })
  }

  async componentDidMount() {
    API.get('Patente/ObtenerInventorCombo')
      .then(res => {
        //console.log(res);
        const inventores = res.data.data;
        this.setState({ options: inventores });
      })

    API.get('Pais/ObtenerPaisCombo')
      .then(res => {
        //console.log(res);
        const paises = res.data.data;
        this.setState({ optionsPaises: paises });
      })
      
    API.get('Patente/ObtenerAreaDeInvestigacionCombo')
    .then(res => {
      //console.log(res);
      const areas = res.data.data;
      this.setState({ optionsAreas: areas });
    })

    API.get('Patente/ObtenerProfesionalCombo')
    .then(res => {
      //console.log(res);
      const profesionales = res.data.data;
      this.setState({ optionsProfesionales: profesionales });
    })
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ inventores: [] });
    for(var i in this.state.seleccionados)
      this.state.inventores.push(this.state.seleccionados[i].id);

    this.setState({ profesionales: [] });
    for(var j in this.state.seleccionadosProfesionales)
      this.state.profesionales.push(this.state.seleccionadosProfesionales[j].id);
  
    const patente = {
      patente_id: this.state.patente_id,
      inventores: this.state.inventores,
      patente_fecha_presentacion: this.state.patente_fecha_presentacion,
      invento_nombre: this.state.invento_nombre,
      invento_pais_origen_id: this.state.invento_pais_origen_id,
      invento_area_de_investigacion_id: this.state.invento_area_de_investigacion_id,
      profesionales: this.state.profesionales,
    };

    API.post('Patente/RegistrarPatente', { patente })
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
              <label htmlFor="patente_id">Id Patente</label>
            </div>
            <div className="col-75">
              <input type="text" id="patente_id" name="patente_id" placeholder="Ingrese id patente" required onChange={this.handleChangePatenteId} />
            </div>
          </div>

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
            <div className="col-25">
              <label htmlFor="patente_fecha_presentacion">Fecha Presentación</label>
            </div>
            <div className="col-75">
              <input type="datetime-local" id="patente_fecha_presentacion" name="patente_fecha_presentacion" required onChange={this.handleChangePatenteFechaPresentacion} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="invento_nombre">Invento</label>
            </div>
            <div className="col-75">
              <input type="text" id="invento_nombre" name="invento_nombre" placeholder="Ingrese invento" required onChange={this.handleChangeInventoNombre} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="invento_pais_origen_id">País Origen Invento</label>
            </div>
            <div className="col-75">
              <Multiselect
                options={this.state.optionsPaises}
                selectedValues={this.state.selectedValue}
                onSelect={this.onSelectPaises.bind(this)}
                onRemove={this.onRemovePaises.bind(this)}
                displayValue="name"
                showCheckbox={true}
                closeIcon="cancel"
                selectionLimit={1}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="invento_area_de_investigacion_id">Area De Investigación Invento</label>
            </div>
            <div className="col-75">
              <Multiselect
                options={this.state.optionsAreas}
                selectedValues={this.state.selectedValue}
                onSelect={this.onSelectAreas.bind(this)}
                onRemove={this.onRemoveAreas.bind(this)}
                displayValue="name"
                showCheckbox={true}
                closeIcon="cancel"
                selectionLimit={1}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="profesionales">Profesionales</label>
            </div>
            <div className="col-75">
              <Multiselect
                options={this.state.optionsProfesionales}
                selectedValues={this.state.selectedValue}
                onSelect={this.onSelectProfesionales.bind(this)}
                onRemove={this.onRemoveProfesionales.bind(this)}
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
