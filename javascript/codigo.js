

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

/*slide imagenes*/
var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}
function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}  