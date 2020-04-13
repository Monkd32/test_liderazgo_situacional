const ESTILOS = ["E-1", "E-2", "E-3", "E-4"];
const EFECTIVIDAD = [-2, -1, 1, 2];
var efectividadTotal = 0;
var conteoEstilo = [0, 0, 0, 0];

function calcularResultados() {
    var repuestas = [
        parseInt($("#respuestas-pregunta-1").val()),
        parseInt($("#respuestas-pregunta-2").val()),
        parseInt($("#respuestas-pregunta-3").val()),
        parseInt($("#respuestas-pregunta-4").val()),
        parseInt($("#respuestas-pregunta-5").val()),
        parseInt($("#respuestas-pregunta-6").val()),
        parseInt($("#respuestas-pregunta-7").val()),
        parseInt($("#respuestas-pregunta-8").val()),
        parseInt($("#respuestas-pregunta-9").val()),
        parseInt($("#respuestas-pregunta-10").val()),
        parseInt($("#respuestas-pregunta-11").val()),
        parseInt($("#respuestas-pregunta-12").val())
    ];
    for (var index = 0; index < repuestas.length; index++) {
        var respuesta = repuestas[index];
        var respuestaEfectividad = respuestaEfectividad + repuestas[index]
        var estiloCount = conteoEstilo[respuesta]
        conteoEstilo[respuesta] = estiloCount + 1;
    }
    
    console.log("efectividadTotal", efectividadTotal);
    console.log("conteoEstilo", conteoEstilo);
}