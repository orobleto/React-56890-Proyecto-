import React from "react";
import '../recursos/CSS/form.css';
import '../recursos/CSS/button.css';

export default class Fomrulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
        }
    }

    LimpiarValoresFormulario = () => {
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
        });
    }

    AsignarValoresFormulario = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    // enviar formulario para crear el usuario

    InsertarValoresFormulario = (e) => {
        e.preventDefault();
        console.log("Enviando");
        // como insertamos el usuario en la api
        this.props.FuncionInsertar(
            this.state.first_name, 
            this.state.last_name, 
            this.state.email);

        // metodo 
        this.LimpiarValoresFormulario();
    }

    render() {
        return (<div>
            <form onSubmit={this.InsertarValoresFormulario}>
                <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="Nombre"
                    required={true}
                    value={this.state.first_name}
                    onChange={this.AsignarValoresFormulario}
                />
                <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Apellido"
                    required={true}
                    value={this.state.last_name}
                    onChange={this.AsignarValoresFormulario}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required={true}
                    value={this.state.email}
                    onChange={this.AsignarValoresFormulario}
                />

                <div>
                    <button type="submit" className="success">Agregar Usuario</button>
                    <button type="reset" className="warning" onClick={this.LimpiarValoresFormulario}>Limpiar Formulario</button>
                </div>

            </form>


        </div>);
    }
}