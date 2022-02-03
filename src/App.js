import React, { Component } from "react";
import Fomrulario from "./Componentes/Formulario";
import Usuario from "./Componentes/Usuario";

export default class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  // hay metodos especificos del montado del componente
  componentDidMount() {
    this.BuscarDatos();
  }

  BuscarDatos = () => {
    const URL = "https://reqres.in/api/users";
    fetch(URL).then((respuesta) =>  respuesta.json()).then( (usuariosJSON) => this.setState({usuarios:usuariosJSON.data}) );
  };

  // render
  render() {
    return (
      <div>
        <Fomrulario/>

        {this.state.usuarios.map((usuario) => (
          <Usuario
            key={usuario.id}
            id={usuario.id}
            first_name={usuario.first_name}
            last_name={usuario.last_name}
            email={usuario.email}
            avatar={usuario.avatar}
          />
        ))}
      </div>
    );
  }
}
