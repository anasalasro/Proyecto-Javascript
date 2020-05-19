

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
function Profesor(nombreProfesor, apellidosProfesor){
    this.nombreProfesor = nombreProfesor;
    this.apellidosProfesor = apellidosProfesor;
}
function Empresa(nombreEmpresa, web, direccion, telefono, email, tutor, emailTutor ){
    this.nombreEmpresa = nombreEmpresa;
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
function Alumno(nombreAlumno, apellidosAlumno, curso, ciclo) {
    this.nombreAlumno = nombreAlumno;
    this.apellidosAlumno = apellidosAlumno;
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
    Profesor(document.getElementById("inNuevoNombreProfesor").value, document.getElementById("inNuevoApellidosProfesor").value);
    document.getElementById("lbNombreProfesor").innerHTML = this.nombreProfesor;
    document.getElementById("lbApellidosProfesor").innerHTML = this.apellidosProfesor;
}

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










/*slide imagenes*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}