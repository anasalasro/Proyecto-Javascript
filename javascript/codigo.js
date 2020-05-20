/*funcion de visualizacion y navegacion por las diferentes paginas del menu*/
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
function añadirProfesor() {
// Añade una fila nueva a la tabla con el nuevo profesor
    añadirProfesorTabla(document.getElementById("inNuevoNombreProfesor").value,
   document.getElementById("inNuevoApellidosProfesor").value);
}

function añadirProfesorTabla(nombre, apellidos) {
//Creamos los elementos que se van añadir en las nuevas filas que crearemos de la tabla.
    var tbBody = document.getElementById("tbBodyProfesores");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdApellidos = document.createElement("td");
//le asignamos a cada variable el contenido a añadir
    tdNombre.className = "nombre";
    tdApellidos.className = "apellidos";

    tdNombre.innerHTML = nombre;
    tdApellidos.innerHTML = apellidos;
//nos añade el nuevo profesor a nuestra tabla previamente creada pero nos crea filas nuevas
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellidos);
    tbBody.appendChild(tr);
}

function añadirAlumno() {
    añadirAlumnoTabla(document.getElementById("inNuevoAlumnoNombre").value,
                      document.getElementById("inNuevoAlumnoApellidos").value,
                      document.getElementById("seCurso").value,
                      document.getElementById("seGrado").value);
        
}
function añadirAlumnoTabla(nombre, apellidos, curso, ciclo) {
//Creamos los elementos que se van añadir en las nuevas filas que crearemos de la tabla.
    var tbBody = document.getElementById("tbBodyAlumnos");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdApellidos = document.createElement("td");
    var tdCurso = document.createElement("td");
    var tdCiclo = document.createElement("td");
//le asignamos a cada variable el contenido a añadir
    tdNombre.innerHTML = nombre;
    tdApellidos.innerHTML = apellidos;
    tdCurso.innerHTML = curso;
    tdCiclo.innerHTML = ciclo;
    
//nos añade el nuevo alumno a nuestra tabla previamente creada pero nos crea filas nuevas
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellidos);
    tr.appendChild(tdCurso);
    tr.appendChild(tdCiclo);
    tbBody.appendChild(tr);
    
}
function añadirAsignacion() {
    añadirAsignacionTabla(document.getElementById("inNuevaAsignacionNombre").value,
        document.getElementById("inNuevaAsignacionTutorLaboral").value,
        document.getElementById("inNuevaAsignacionTutorLaboral").value,
        document.getElementById("inNuevasignacionFechaInicio").value,
        document.getElementById("inNuevasignacionFechaFin").value,)
        
}
function añadirAsignacionTabla(nombre, tutorLaborar, tutorDocente, fechaInicio, fechaFin) {

    var tbBody = document.getElementById("tbBodyAsignacion");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdTutorLaborar = document.createElement("td");
    var tdTutorDocente = document.createElement("td");
    var tdfechaInicio = document.createElement("td");
    var tdfechaFin = document.createElement("td");
    

    tdNombre.innerHTML = nombre;
    tdTutorLaborar.innerHTML = tutorLaborar;
    tdTutorDocente.innerHTML = tutorDocente;
    tdfechaInicio.innerHTML = fechaInicio;
    tdfechaFin.innerHTML = fechaFin;
  

    tr.appendChild(tdNombre);
    tr.appendChild(tdTutorLaborar);
    tr.appendChild(tdTutorDocente);
    tr.appendChild(tdfechaInicio);
    tr.appendChild(tdfechaFin);
    tbBody.appendChild(tr);
}

function añadirEmpresa() {
    añadirEmpresaTabla(document.getElementById("inNuevaEmpresaNombre").value,
        document.getElementById("inNuevaEmpresaWeb").value,
        document.getElementById("inNuevaEmpresaDireccion").value,
        document.getElementById("inNuevaEmpresaTelefono").value,
        document.getElementById("inNuevaEmpresaEmail").value,
        document.getElementById("inNuevaEmpresaTutor").value,
        document.getElementById("inNuevaEmpresaEmailTutor").value);
}

function añadirEmpresaTabla(nombre, web, direccion, telefono, email, tutor, emailTutor) {

    var tbBody = document.getElementById("tbBodyEmpresas");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdWeb = document.createElement("td");
    var tdDireccion = document.createElement("td");
    var tdTelefono = document.createElement("td");
    var tdEmail = document.createElement("td");
    var tdTutor = document.createElement("td");
    var tdEmailTutor = document.createElement("td");

    tdNombre.innerHTML = nombre;
    tdWeb.innerHTML = web;
    tdDireccion.innerHTML = direccion;
    tdTelefono.innerHTML = telefono;
    tdEmail.innerHTML = email;
    tdTutor.innerHTML = tutor;
    tdEmailTutor.innerHTML = emailTutor;

    tr.appendChild(tdNombre);
    tr.appendChild(tdWeb);
    tr.appendChild(tdDireccion);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTutor);
    tr.appendChild(tdEmailTutor);
    tbBody.appendChild(tr);
}

/*slide imagenes*/

var slideIndex = 1;
showSlides(slideIndex);

setTimeout(avanzar, 3000);

function avanzar() {
    plusSlides(1);
    setTimeout(avanzar, 3000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("misImagenes");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}