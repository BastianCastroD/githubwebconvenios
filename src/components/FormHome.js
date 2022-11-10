import React from "react";
import { Formulario, Label, GrupoInput, InputH } from "./Formularios";

const FormHome = () =>  {
    const ar=[
        {rut: "202342235"},
        {nombre: "Felipe"},
        {apellido: "Rojas"},
        {apellido2: "Duran"},
        {celular: "923433567"},
        {email: "felipe@gmail.com"}
    ]
    console.log(
        ar[0].rut,
        ar[1].nombre,
        ar[2].apellido,
        ar[3].apellido2,
        ar[4].celular,
        ar[5].email
    );
    return (  
        <main>
            <Formulario action="">
                <GrupoInput>
                    <div className="contenedorTitulo">
                        <label className="titulo">Informacion Personal</label>
                    </div>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">RUT</Label>
                        <InputH className="inputForm" value={ar[0].rut} type="text" readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Nombre</Label>
                        <InputH className="inputForm" type="text" value={ar[1].nombre} readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">1° Apellido</Label>
                        <InputH className="inputForm" type="text" value={ar[2].apellido} readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">2° Apellido</Label>
                        <InputH className="inputForm" type="text" value={ar[3].apellido2} readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Numero de Telefono</Label>
                        <InputH className="inputForm" type="text" value={ar[4].celular} readOnly/>
                    </GrupoInput>
                </GrupoInput>
                <GrupoInput>
                    <div className="contenedorTitulo">
                        <label className="titulo">Informacion de la Cuenta</label>
                    </div>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Correo Electronico</Label>
                        <InputH className="inputForm" type="text" value={ar[5].email} readOnly/>
                    </GrupoInput>
                </GrupoInput>
            </Formulario>
        </main>
    );
}
 
export default FormHome;