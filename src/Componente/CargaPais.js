import React from 'react';
import API from '../api';

export default class CargaPais extends React.Component {
  state = {
    msg: ''
  }

  async componentDidMount() {
    API.get('Carga/CargarPais')
      .then(res => {
        //console.log(res);
        const msg = res.data.msg;
        this.setState({ msg });
      })
  }

  render() {
    return (
    
      <h1>{this.state.msg}</h1>
      
    )
  }
}
