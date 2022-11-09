import React from "react";
import "../styles/FormPacienteCliente.css";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";

import { FormPaciente, Inputs, Label, LabelReq } from "./Formularios";

const FormPacienteCliente = () => {
    return ( 
        <main>
            <Formik 
                action=""

                //Valores del formulario//
                initialValues={{
                    rut: '',
                    numeroDocumento: '',
                    nombre: '',
                    apellido: '',
                    celular: '',
                    correo: '',
                    password: '',
                    confirmarPassword: '',
                    toggle: false, 
                    checked: []
                }}

                //Validacion de valores
                validate={(valores) => {
                    let errores = {};

                    //Validaciones password//
                    if(!valores.rut){
                        errores.rut = 'Este campo es obligatorio.'
                    }
                    if(!valores.numeroDocumento){
                        errores.numeroDocumento = 'Este campo es obligatorio.'
                    }
                    if(!valores.nombre){
                        errores.nombre = 'Este campo es obligatorio.'
                    }
                    if(!valores.apellido){
                        errores.apellido = 'Este campo es obligatorio.'
                    }
                    if(!valores.celular){
                        errores.celular = 'Este campo es obligatorio.'
                    }
                    if(!valores.correo){
                        errores.correo = 'Este campo es obligatorio.'
                    }
                    if(!valores.password){
                        errores.password = 'Este campo es obligatorio.'
                    }
                    if(!valores.confirmarPassword){
                        errores.confirmarPassword = 'Este campo es obligatorio.'
                    }

                    return errores;
                }}

                //Resetear y enviar formulario//
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log(valores);
                    const {rut, numeroDocumento, nombre, apellido, celular, correo, password, confirmarPassword, terminos} = valores;
                    console.log({rut, numeroDocumento, nombre, apellido, celular, correo, password, confirmarPassword, terminos});
                    console.log('Formulario Enviado');
                }}
            
            >
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form className="formulario" onSubmit={handleSubmit}>
                        <FormPaciente>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Informacion Personal</label>
                                </div>
                                <Label>RUT<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="rut"
                                    name="rut"
                                    value={values.rut}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.rut && errors.rut && <div className="error">{errors.rut}</div>}

                                <Label>N° Documento <LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="numeroDocumento"
                                    name="numeroDocumento"
                                    value={values.numeroDocumento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.numeroDocumento && errors.numeroDocumento && <div className="error">{errors.numeroDocumento}</div>}

                                <Label>Nombre<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="nombre"
                                    name="nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}

                                <Label>Apellido<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="apellido"
                                    name="apellido"
                                    value={values.apellido}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}

                                <Label>Celular<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="celular"
                                    name="celular"
                                    value={values.celular}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.celular && errors.celular && <div className="error">{errors.celular}</div>}
                            </div>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Informacion de Cuenta</label>
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

                                <Label>Confirmar Contraseña<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="confirmarPassword"
                                    name="confirmarPassword"
                                    value={values.confirmarPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.confirmarPassword && errors.confirmarPassword && <div className="error">{errors.confirmarPassword}</div>}

                                <div className="blockRegistro">
                                    <div className="blockTerminos">
                                    <label>
                                        <input type="checkbox" name="toggle" />
                                        {`${values.toggle}`}
                                    </label>
                                        <span> Acepto los </span>
                                        <NavLink className="navTerminos">Terminos y Condiciones</NavLink>
                                    </div>
                                    <div className="campoRequerido">
                                        <span className="obligatorio">* Campos requeridos</span>
                                    </div>
                                    <div className="blockCrearCuenta">
                                        <button type="submit">Crea una cuenta</button>
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
 
export default FormPacienteCliente;