import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CargaPais from './Componente/CargaPais';
import CargaInventor from './Componente/CargaInventor';
import CargaPatente from './Componente/CargaPatente';
import CargaInvento from './Componente/CargaInvento';
import CargaInventoPorPais from './Componente/CargaInventoPorPais';
import CargaInventoPorInventor from './Componente/CargaInventoPorInventor';
import CargaInventoPorAreaDeInvestigacion from './Componente/CargaInventoPorAreaDeInvestigacion';
import CargaProfesional from './Componente/CargaProfesional';
import TraerPais from './Componente/TraerPais';
import RegistroPais from './Componente/RegistroPais';
import TraerProfesional from './Componente/TraerProfesional';
import RegistroProfesional from './Componente/RegistroProfesional';
import TraerPatente from './Componente/TraerPatente';
import RegistroPatente from './Componente/RegistroPatente';
import TraerReporteInventoPorPais from './Componente/TraerReporteInventoPorPais';
import TraerReporteInventoPorInventor from './Componente/TraerReporteInventoPorInventor';
import TraerReporteInventoPorAreaDeInvestigacion from './Componente/TraerReporteInventoPorAreaDeInvestigacion';

function App() {

  return (
    <div className="App">

      <Router>
        <nav className="nav">
          <Link to="/" className="site-title">
            NGInventor
          </Link>
          <ul>
            <Link to="/Cargas"><button className="button">Cargas</button></Link>
            <Link to="/Paises"><button className="button">Países</button></Link>
            <Link to="/Profesionales"><button className="button">Profesionales</button></Link>
            <Link to="/Patentes"><button className="button">Patentes</button></Link>
            <Link to="/Reportes"><button className="button">Reportes</button></Link>
          </ul>
        </nav>

        <div className="header">
          <h1>Sistema de Patentes</h1>
        </div>

        <div className="content">

          <Switch>
            <Route path="/Cargas">
              <Cargas />
            </Route>
            <Route path="/Paises">
              <Paises />
            </Route>
            <Route path="/Profesionales">
              <Profesionales />
            </Route>
            <Route path="/Patentes">
              <Patentes />
            </Route>
            <Route path="/Reportes">
              <Reportes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>  

      <div className="footer">
        NGInventor
        <center>2020</center>
      </div>

    </div>
    
  );
}

function Home() {
  return (
    <div>
      <h2>Bienvenido</h2>
    </div>
  );
}

function Cargas() {
  return (
    <Router>
      <div className="menu">

        <Link to="/CargarPaises"><button className="button-sub">Cargar Países</button></Link>
        <Link to="/CargarInventores"><button className="button-sub">Cargar Inventores</button></Link>
        <Link to="/CargarPatentes"><button className="button-sub">Cargar Patentes</button></Link>
        <Link to="/CargarInventos"><button className="button-sub">Cargar Inventos</button></Link>
        <Link to="/CargarInventosPorPais"><button className="button-sub">Cargar Inventos Por País</button></Link>
        <Link to="/CargarInventosPorInventor"><button className="button-sub">Cargar Inventos Por Inventor</button></Link>
        <Link to="/CargarInventosPorAreaDeInvestigacion"><button className="button-sub">Cargar Inventos Por Area De Investigación</button></Link>
        <Link to="/CargarProfesionales"><button className="button-sub">Cargar Profesionales</button></Link>

        <Switch>
          <Route path="/CargarPaises">
            <CargarPaises />
          </Route>
          <Route path="/CargarInventores">
            <CargarInventores />
          </Route>
          <Route path="/CargarPatentes">
            <CargarPatentes />
          </Route>
          <Route path="/CargarInventos">
            <CargarInventos />
          </Route>
          <Route path="/CargarInventosPorPais">
            <CargarInventosPorPais />
          </Route>
          <Route path="/CargarInventosPorInventor">
            <CargarInventosPorInventor />
          </Route>
          <Route path="/CargarInventosPorAreaDeInvestigacion">
            <CargarInventosPorAreaDeInvestigacion />
          </Route>
          <Route path="/CargarProfesionales">
            <CargarProfesionales />
          </Route>
        </Switch>

      </div>
    </Router>  
  );
}

function CargarPaises() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Países</h2>
        <CargaPais />
      </section>
    </div>
  );
}

function CargarInventores() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Inventores</h2>
        <CargaInventor />
      </section>
    </div>
  );
}

function CargarPatentes() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Patentes</h2>
        <CargaPatente />
      </section>
    </div>
  );
}

function CargarInventos() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Inventos</h2>
        <CargaInvento />
      </section>
    </div>
  );
}

function CargarInventosPorPais() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Inventos Por País</h2>
        <CargaInventoPorPais />
      </section>
    </div>
  );
}

function CargarInventosPorInventor() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Inventos Por Inventor</h2>
        <CargaInventoPorInventor />
      </section>
    </div>
  );
}

function CargarInventosPorAreaDeInvestigacion() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Inventos Por Area De Investigación</h2>
        <CargaInventoPorAreaDeInvestigacion />
      </section>
    </div>
  );
}

function CargarProfesionales() {
  
  return (  
    <div>
      <section>
        <h2>Cargar Profesionales</h2>
        <CargaProfesional />
      </section>
    </div>
  );
}

function Paises() {
  return (
    <Router>
      <div className="menu">

        <Link to="/VerPaises"><button className="button-sub">Ver Países</button></Link>
        <Link to="/RegistrarPaises"><button className="button-sub">Registrar Países</button></Link>
            
        <Switch>
          <Route path="/VerPaises">
            <VerPaises />
          </Route>
          <Route path="/RegistrarPaises">
            <RegistrarPaises />
          </Route>
        </Switch>

      </div>
    </Router>  
  );
}

function VerPaises() {
  
  return (  
    <div>
      <section>
        <h2>Ver Países</h2>
        <TraerPais />
      </section>
    </div>
  );
}

function RegistrarPaises() {
  
  return (  
    <div>
      <section>
        <h2>Registrar Países</h2>
        <RegistroPais />   
      </section>
    </div>
  );
}

function Profesionales() {
  return (
    <Router>
      <div className="menu">

        <Link to="/VerProfesionales"><button className="button-sub">Ver Profesionales</button></Link>
        <Link to="/RegistrarProfesionales"><button className="button-sub">Registrar Profesionales</button></Link>
            
        <Switch>
          <Route path="/VerProfesionales">
            <VerProfesionales />
          </Route>
          <Route path="/RegistrarProfesionales">
            <RegistrarProfesionales />
          </Route>
        </Switch>

      </div>
    </Router>  
  );
}

function VerProfesionales() {
  
  return (  
    <div>
      <section>
        <h2>Ver Profesionales</h2>
        <TraerProfesional />
      </section>
    </div>
  );
}

function RegistrarProfesionales() {
  
  return (  
    <div>
      <section>
        <h2>Registrar Profesionales</h2>
        <RegistroProfesional />   
      </section>
    </div>
  );
}

function Patentes() {
  return (
    <Router>
      <div className="menu">

        <Link to="/VerPatentes"><button className="button-sub">Ver Patentes</button></Link>
        <Link to="/RegistrarPatentes"><button className="button-sub">Registrar Patentes</button></Link>
            
        <Switch>
          <Route path="/VerPatentes">
            <VerPatentes />
          </Route>
          <Route path="/RegistrarPatentes">
            <RegistrarPatentes />
          </Route>
        </Switch>

      </div>
    </Router>  
  );
}

function VerPatentes() {
  
  return (  
    <div>
      <section>
        <h2>Ver Patentes</h2>
        <TraerPatente />
      </section>
    </div>
  );
}

function RegistrarPatentes() {
  
  return (  
    <div>
      <section>
        <h2>Registrar Patentes</h2>
        <RegistroPatente />   
      </section>
    </div>
  );
}

function Reportes() {
  return (
    <Router>
      <div className="menu">

        <Link to="/VerReporteInventoPorPais"><button className="button-sub">Ver Reporte Invento Por País</button></Link>
        <Link to="/VerReporteInventoPorInventor"><button className="button-sub">Ver Reporte Invento Por Inventor</button></Link>
        <Link to="/VerReporteInventoPorAreaDeInvestigacion"><button className="button-sub">Ver Reporte Invento Por Area De Investigación</button></Link>
            
        <Switch>
          <Route path="/VerReporteInventoPorPais">
            <VerReporteInventoPorPais />
          </Route>
          <Route path="/VerReporteInventoPorInventor">
            <VerReporteInventoPorInventor />
          </Route>
          <Route path="/VerReporteInventoPorAreaDeInvestigacion">
            <VerReporteInventoPorAreaDeInvestigacion />
          </Route>
        </Switch>

      </div>
    </Router>  
  );
}

function VerReporteInventoPorPais() {
  
  return (  
    <div>
      <section>
        <h2>Ver Reporte Invento Por País</h2>
        <TraerReporteInventoPorPais />
      </section>
    </div>
  );
}

function VerReporteInventoPorInventor() {
  
  return (  
    <div>
      <section>
        <h2>Ver Reporte Invento Por Inventor</h2>
        <TraerReporteInventoPorInventor />
      </section>
    </div>
  );
}

function VerReporteInventoPorAreaDeInvestigacion() {
  
  return (  
    <div>
      <section>
        <h2>Ver Reporte Invento Por Area De Investigación</h2>
        <TraerReporteInventoPorAreaDeInvestigacion />
      </section>
    </div>
  );
}

export default App;
