

/*funcion de visualizacion y navegacion por las diferentes paginas*/
function abrirPagina(evt, nombre) {
    var i, contenido, paginas;
    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }
    paginas = document.getElementsByClassName("paginas");
    for (i = 0; i < paginas.length; i++) {
        paginas[i].className = paginas[i].className.replace(" active", "");
    }
    document.getElementById(nombre).style.display = "block";
    evt.currentTarget.className += " active";
}

// Muestra por defecto la pagina de Actividades
document.getElementById("defaultOpen").click();


// El modal
var modal = document.getElementById("ventana");

    // Boton para abrir el modal
var boton = document.getElementById("boton");
var botonCerrar = document.getElementById("botonCerrar");
// para cerrar
    var span = document.getElementsByClassName("cerrar")[0];

// Abrir el modal al pulsar el boton
boton.onclick = function() {
            modal.style.display = "block";
}
//cerrar el modal al pulsar el boton cerrar
botonCerrar.onclick = function(){
    modal.style.display="none";
}

// cerrar el modal al pinchar en la X
span.onclick = function() {
                modal.style.display = "none";
}

function abrirProfesor() {
    document.getElementById("Profesores").style.display = "block";
    document.getElementById("Alumnos").style.display = "none";
    document.getElementById("Empresas").style.display = "none";
    document.getElementById("Asignaciones").style.display = "none";
    document.getElementById("Actividades").style.display = "none";

}
function abrirAlumno() {
    document.getElementById("Profesores").style.display = "none";
    document.getElementById("Alumnos").style.display = "block";
    document.getElementById("Empresas").style.display = "none";
    document.getElementById("Asignaciones").style.display = "none";
    document.getElementById("Actividades").style.display = "none";
    
}
function abrirEmpresa() {
    document.getElementById("Profesores").style.display = "none";
    document.getElementById("Alumnos").style.display = "none";
    document.getElementById("Empresas").style.display = "block";
    document.getElementById("Asignaciones").style.display = "none";
    document.getElementById("Actividades").style.display = "none";

}
function abrirAsignacion() {
    document.getElementById("Profesores").style.display = "none";
    document.getElementById("Alumnos").style.display = "none";
    document.getElementById("Empresas").style.display = "none";
    document.getElementById("Asignaciones").style.display = "block";
    document.getElementById("Actividades").style.display = "none";

}
function abrirActividad() {
    document.getElementById("Profesores").style.display = "none";
    document.getElementById("Alumnos").style.display = "none";
    document.getElementById("Empresas").style.display = "none";
    document.getElementById("Asignaciones").style.display = "none";
    document.getElementById("Actividades").style.display = "block";

}
function añadirActividadSemanal() {
    var dia1 = document.getElementById("1dia").Value;
    var dia2 = document.getElementById("2dia").Value;
    var mes = document.getElementById("mesAct").Value;
    var año = document.getElementById("año").Value;
    var validar = validarDia(dia1, mes, año);
    var dias = dia2 - dia1;
    if (validar != "lun" || dias != 7) {
        alert("El día debe de empezar en Lunes o la semana no cuenta con 7 días")
        
    }
}
function Actividades(dia, actividades, horas) {
    this.dia = dia;
    this.actividades = actividades;
    this.horas = horas;
    
}
function Profesor(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}
function Empresa(nombre, web, direccion, telefono, email, tutor, emailTutor ){
    this.nombre = nombre;
    this.web = web;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.tutor = tutor;
    this.emailTutor = emailTutor;
}
function Asignacion(nombre, empresa, tutor, fechaInicio, fechaFin) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.tutor = tutor;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
}
function Alumno(nombre, apellidos, curso, ciclo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.curso = curso;
    this.ciclo = ciclo;
    
}

function cerrarActividad() {
    document.getElementById("modalActividad").style.display = "none";
    
}
function cerrarEmpresa() {
    document.getElementById("modalEmpresa").style.display = "none";

}
function cerrarAlumno() {
    document.getElementById("modalAlumno").style.display = "none";

}
function cerrarProfesor() {
    document.getElementById("modalProfesor").style.display = "none";

}
function cerrarAsignacion() {
    document.getElementById("modalAsignacion").style.display = "none";

}
function añadirProfesor() {
    document.getElementById("modalProfesor").style.display = "block";
   


function añadirAlumno() {
    document.getElementById("modalAlumno").style.display = "block";

}
function añadirAsignacion() {
    document.getElementById("modalAsignacion").style.display = "block";

}
function añadirEmpresa() {
    document.getElementById("modalEmpresa").style.display = "block";

}
function añadirActividad() {
    document.getElementById("modalEmpresa").style.display = "block";

}

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 1; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(this.nombre + i + this.apellidos + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "0");
}


}
