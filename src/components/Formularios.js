import styled from "styled-components";

//Constante de colores a utilizar
const colores = {
    borde: "#2192FF",
    error: "#bb2929",
    exito: "#2B7A0B"
}

//Estructura de formulario
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 70px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

//Estructura de formulario Paciente Cliente
const FormPaciente = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px 75px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

//Label de los formularios
const Label = styled.label`
    display: block;
    color: rgb(77, 76, 83);
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    min-height: 25px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
    padding-bottom: 5px;
`;

//Grupos de input de los formularios
const GrupoInput = styled.div`
    position: relative;
    z.index: 90;
    padding-bottom: 15px;
`;

//Input de los formularios
const Inputs = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.8px;
    color: black;
    width: 100%;
    background: #FFFFFF;
    border-radius: 3px;
    height: 40px;
    line-height: 45px;
    padding 0 40px 0 10px;
    border: 0.5px solid rgb(194, 194, 194);

    &:focus {
        border: 2px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 15px rgba(163, 163, 163, 0.4);
    }
`;

//Input para formulario de lectura HOME
const InputH = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.8px;
    color: #73777B;
    width: 100%;
    background: #FFFFFF;
    border-radius: 3px;
    height: 37  px;
    line-height: 45px;
    padding 0 40px 0 10px;
    border: 0.5px solid rgb(194, 194, 194);
`;

//Mensaje de exito - formulario completado
const MensajeExito = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${colores.exito};
    font-size: 13px;
    font-weight: 500;
    display: none;
`;

//Campos requeridos
const LabelReq = styled.label`
    color: red;
`;

//Formularios de una sola columna
const FormularioUnic = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px 75px;
`;

//Mensaje de error bajo los input
const LeyendaError = styled.p`
    margin-top: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
`;

//Exportaciones
export {
    Formulario, 
    Label, 
    GrupoInput, 
    Inputs, 
    InputH,
    LabelReq, 
    FormularioUnic, 
    LeyendaError,
    MensajeExito,
    FormPaciente
};