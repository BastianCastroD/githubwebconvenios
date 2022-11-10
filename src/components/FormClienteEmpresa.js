import React from "react";
import "../styles/FormClienteEmpresa.css";
import { Formik } from "formik";
import { Formulario, Inputs, Label, LabelReq } from "./Formularios";

const FormClienteEmpresa = () => {
    return ( 
        <main>
            <Formik 
                action=""

                //Valores del formulario//
                initialValues={{
                    rutEmpresa: '',
                    nombreEmpresa: '',
                    apellidoEmpresa: '',
                    correoEmpresa: '',
                    passwordEmpresa: '',
                    confirmarPasswordEmpresa: '',
                    nombreKam: '',
                    correoKam: '',
                    cargo: '',
                    empresa: ''
                }}

                //Validacion de valores
                validate={(valores) => {
                    let errores = {};

                    //Validaciones password//
                    if(!valores.rutEmpresa){
                        errores.rutEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.nombreEmpresa){
                        errores.nombreEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.apellidoEmpresa){
                        errores.apellidoEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.correoEmpresa){
                        errores.correoEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.passwordEmpresa){
                        errores.passwordEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.confirmarPasswordEmpresa){
                        errores.confirmarPasswordEmpresa = 'Este campo es obligatorio.'
                    }
                    if(!valores.nombreKam){
                        errores.nombreKam = 'Este campo es obligatorio.'
                    }
                    if(!valores.correoKam){
                        errores.correoKam = 'Este campo es obligatorio.'
                    }
                    if(!valores.cargo){
                        errores.cargo = 'Este campo es obligatorio.'
                    }
                    if(!valores.empresa){
                        errores.empresa = 'Este campo es obligatorio.'
                    }

                    return errores;
                }}

                //Resetear y enviar formulario//
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    const {rutEmpresa, nombreEmpresa, apellidoEmpresa, correoEmpresa, 
                        passwordEmpresa, confirmarPasswordEmpresa, nombreKam, correoKam, cargo, empresa
                    } = valores;

                    console.log(rutEmpresa, nombreEmpresa, apellidoEmpresa, correoEmpresa, 
                        passwordEmpresa, confirmarPasswordEmpresa, nombreKam, correoKam, cargo, empresa
                    );

                    console.log('Formulario Enviado');
                }}
            
            >
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form className="formulario" onSubmit={handleSubmit}>

                        {console.log(errors)}

                        <Formulario>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Informacion Cliente Empresa</label>
                                </div>
                                <Label>RUT<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="rutEmpresa"
                                    name="rutEmpresa"
                                    value={values.rutEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.rutEmpresa && errors.rutEmpresa && <div className="error">{errors.rutEmpresa}</div>}

                                <Label>Nombre<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="nombreEmpresa"
                                    name="nombreEmpresa"
                                    value={values.nombreEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.nombreEmpresa && errors.nombreEmpresa && <div className="error">{errors.nombreEmpresa}</div>}

                                <Label>Apellido<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="apellidoEmpresa"
                                    name="apellidoEmpresa"
                                    value={values.apellidoEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.apellidoEmpresa && errors.apellidoEmpresa && <div className="error">{errors.apellidoEmpresa}</div>}
                            </div>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Informacion de Cuenta</label>
                                </div>
                                <Label>Correo Electronico<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="correoEmpresa"
                                    name="correoEmpresa"
                                    value={values.correoEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.correoEmpresa && errors.correoEmpresa && <div className="error">{errors.correoEmpresa}</div>}

                                <Label>Contraseña<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="passwordEmpresa"
                                    name="passwordEmpresa"
                                    value={values.passwordEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.passwordEmpresa && errors.passwordEmpresa && <div className="error">{errors.passwordEmpresa}</div>}

                                <Label>Confirmar Contraseña<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="confirmarPasswordEmpresa"
                                    name="confirmarPasswordEmpresa"
                                    value={values.confirmarPasswordEmpresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.confirmarPasswordEmpresa && errors.confirmarPasswordEmpresa && <div className="error">{errors.confirmarPasswordEmpresa}</div>}
                            </div>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Asignacion Kam</label>
                                </div>
                                <Label>Nombre Kam<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="nombreKam"
                                    name="nombreKam"
                                    value={values.nombreKam}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.nombreKam && errors.nombreKam && <div className="error">{errors.nombreKam}</div>}

                                <Label>Correo Kam<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="correoKam"
                                    name="correoKam"
                                    value={values.correoKam}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.correoKam && errors.correoKam && <div className="error">{errors.correoKam}</div>}
                                <div className="blockRegistro">
                                    <div className="campoRequerido">
                                        <span className="obligatorio">* Campos requeridos</span>
                                    </div>
                                    <div className="blockCrearCuenta">
                                        <button type="submit">Crear Usuario</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="contenedorTitulo">   
                                    <label className="titulo">Informacion Empresa</label>
                                </div>
                                <Label>Cargo<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="cargo"
                                    name="cargo"
                                    value={values.cargo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.cargo && errors.cargo && <div className="error">{errors.cargo}</div>}
                                <Label>Empresa<LabelReq> *</LabelReq></Label>
                                <Inputs 
                                    type="text"
                                    className="empresa"
                                    name="empresa"
                                    value={values.empresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.empresa && errors.empresa && <div className="error">{errors.empresa}</div>}
                            </div>
                        </Formulario>
                    </form>
                )}
            </Formik>
        </main>
    );
}
 
export default FormClienteEmpresa;