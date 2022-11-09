import React from "react";
import { Formulario, Label, GrupoInput, InputH } from "./Formularios";

const FormHome = () =>  {
    const ar=[{rut: "273737373"}]
    console.log(ar[0].rut);
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
                        <InputH className="inputForm" type="text" value="Bastian" readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Apellido</Label>
                        <InputH className="inputForm" type="text" value="Castro" readOnly/>
                    </GrupoInput>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Numero de Telefono</Label>
                        <InputH className="inputForm" type="text" value="948833456" readOnly/>
                    </GrupoInput>
                </GrupoInput>
                <GrupoInput>
                    <div className="contenedorTitulo">
                        <label className="titulo">Informacion de la Cuenta</label>
                    </div>
                    <GrupoInput>
                        <Label className="labelForm" htmlFor="">Correo Electronico</Label>
                        <InputH className="inputForm" type="text" value="Bastian@gmail.com" readOnly/>
                    </GrupoInput>
                </GrupoInput>
            </Formulario>
        </main>
    );
}
 
export default FormHome;