//Importaciones//
import React from "react";
import {LoginService} from "../api/LoginService";
import "../styles/Login.css";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { FormPaciente, Inputs, Label, LabelReq } from "../components/Formularios";

const Login = () => {
    LoginService("user@email.com","password");
    return ( 
        <main>
            <Formik 
                action=""

                //Valores del formulario//
                initialValues={{
                    correo: '',
                    password: ''
                }}

                //Validacion de valores
                validate={(valores) => {
                    let errores = {};

                    //Validaciones de correo electronico//
                    if(!valores.correo){
                        errores.correo = 'Este campo es obligatorio.'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Introduzca una direccion válida de correo electrónico (Ex: johndoe@domain.com).'
                    }

                    //Validaciones password//
                    if(!valores.password){
                        errores.password = 'Este campo es obligatorio.'
                    }

                    return errores;
                }}

                //Resetear y enviar formulario//
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log('Formulario Enviado');
                    const {correo, password} = valores;
                    console.log(correo, password);
                    if (correo==="bastian@gmail.com" && password==="bastian"){
                        //todo:pasar a la siguiente pantalla - useHISTORY
                        //history.push('/Home');

                    } else {
                        console.info("Usuario invalido");
                    }
                }}
            
            >
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form className="formulario" onSubmit={handleSubmit}>

                        {console.log(errors)}

                        <FormPaciente>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Usuarios Registrados</label>
                                </div>
                                <div id="notaLogin">
                                    Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.
                                </div>
                                <Label>Correo Electronico<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="correo"
                                    name="correo"
                                    value={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}

                                <Label>Contraseña<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                                <div className="recaptcha">
                                    <ReCAPTCHA
                                        sitekey="6Lek9tsiAAAAAOUyn_NBrROccYIf_-w38fsocNlN"
                                    />
                                </div>
                                <div id="accionLogin">
                                    <div id="botonLogin">
                                        <button><NavLink className="navlink" to='/Home'>Inicio Sesion</NavLink></button>
                                    </div>
                                    <div id="olvidasteContraseña">
                                        <li id="li-contraseña">
                                            <NavLink to='/OlvidasteContraseña'>¿Olvidaste tu contraseña?</NavLink>
                                        </li>
                                    </div>
                                    <div id="requerido">
                                        <span>* Campos requeridos</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Nuevo Paciente Cliente</label>
                                </div>
                                <div id="notaRegistro">
                                    Si no te encuentras registrado, puedes crear una cuenta a continuacion.
                                </div>
                                <div id="accionRegistro">
                                    <div id="botonRegistro">
                                        <button><NavLink className="navlink" to='/NuevoPacienteCliente'>Crea una cuenta</NavLink></button>
                                    </div>
                                </div>
                            </div>
                        </FormPaciente>

                    </form>
                )}

            </Formik>
        </main>
    );
}

export default Login;