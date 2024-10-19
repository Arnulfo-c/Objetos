const alumno = {
    nombre: "Jorge Carranza",
    calificaciones: {
        inglés: 85,
        programación: 92,
        matemática: 78
    }
};

const media = (alumno.calificaciones.inglés + alumno.calificaciones.programación + alumno.calificaciones.matemática) / 3;

console.log(`Nombre del alumno: ${alumno.nombre}`);
console.log(`Media de las calificaciones: ${media.toFixed(2)}`);