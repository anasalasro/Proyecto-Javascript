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
// Muestra por defecto la pagina de Inicio con la id="defaultOpen"
document.getElementById("defaultOpen").click();

//slide imagenes
var primeraImagen = 1;
mostrarImegenes(primeraImagen);

setTimeout(avanzar, 3000);
// cuando seleccionamos la imagen 1 esperamos 3 segundos y avanza a la siguiente imagen
function avanzar() {
    pasarImagen(1);
    setTimeout(avanzar, 3000);
}
//Al pinchar en la flecha pasamos a la siguiente imagen
function pasarImagen(n) {
    mostrarImegenes(primeraImagen += n);
}
//al pinchar en los puntitos pasamos a la siguiente imagen
function imagenActual(n) {
    mostrarImegenes(primeraImagen = n);
}
// Mostrar las imagenes
function mostrarImegenes(n) {
    var i;
    var imagenes = document.getElementsByClassName("misImagenes");
    var puntos = document.getElementsByClassName("punto");
    
    if (n > imagenes.length) { primeraImagen = 1; }
    if (n < 1) { primeraImagen = imagenes.length; }
    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }
    for (i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" active", "");
    }
    //Muestra la imagen y el punto correspondiente esta activo
    imagenes[primeraImagen - 1].style.display = "block";
    puntos[primeraImagen - 1].className += " active";
}

/*Para la hoja de actividades he creado varios objetos y listas de arrays,
donde he guardado algunos datos predefimidos para poder buscarlos y rellenar la hoja,
por ejemplo, en el objeto profesor, primero me creo el objeto profesor le añado los datos
y al hacerle push lo añado al array(en este caso es la listaProfesores).
Más adelante he creado una funcion para añadir los datos de profesores,
en la que llamando a los objetos de la listaProfesores para insertarlos */

// Datos por defecto para rellenar la hoja de actividades
//listas de arrays para guardar datos
this.ListaGrados = ["Medio", "Superior"];
this.ListaCiclos = ["ASIR"];
this.ListaTutores = ["Luis", "Jose", "Julia"];
this.ListaCentros = ["LG; Cartuja", "Intel; Cartuja","Fujitsu; Centro",];

this.ListaProfesores = new Array();
//creacion de objetos y push para añadir a las listas
var profesor = new Object();
profesor.Nombre = "Pedro";
profesor.Apellidos = "Santos";
this.ListaProfesores.push(profesor);

profesor = new Object();
profesor.Nombre = "Manuel";
profesor.Apellidos = "Garcia";
this.ListaProfesores.push(profesor);

profesor = new Object();
profesor.Nombre = "Antonio";
profesor.Apellidos = "Rueda";
this.ListaProfesores.push(profesor);

this.ListaAlumnos = new Array();

var alumno = new Object();
alumno.Nombre = "Antonio";
alumno.Apellidos = "Suarez Martinez";
alumno.Ciclo = 0;
alumno.Grado = 1;
alumno.Profesor = 0;
alumno.Tutor = 2;
alumno.Centro = 3;
this.ListaAlumnos.push(alumno);

alumno = new Object();
alumno.Nombre = "Pedro";
alumno.Apellidos = "Santos Martinez";
alumno.Ciclo = 0;
alumno.Grado = 1;
alumno.Profesor = 1;
alumno.Tutor = 1;
alumno.Centro = 2;
this.ListaAlumnos.push(alumno);

alumno = new Object();
alumno.Nombre = "Manuel";
alumno.Apellidos = "Rodriguez Lama";
alumno.Ciclo = 0;
alumno.Grado = 0;
alumno.Profesor = 2;
alumno.Tutor = 0;
alumno.Centro = 1;
this.ListaAlumnos.push(alumno);

//funcion profesor para que muestre el nombre y apellido al crearlos en la tabla de profesores
function Profesor(nombreProfesor, apellidosProfesor) {
    this.nombreProfesor = nombreProfesor;
    this.apellidosProfesor = apellidosProfesor;
}
//Añadir Profesor
function añadirProfesor() {
  Profesor(document.getElementById("inNuevoNombreProfesor").value,
      document.getElementById("inNuevoApellidosProfesor").value);

    añadirProfesorTabla(this.nombreProfesor, this.apellidosProfesor); // Añade una fila nueva a la tabla con el nuevo profesor

    // Añade el nuevo profesor a la lista de profesores creada previamente
    var profesor = new Object();
    profesor.Nombre = this.nombreProfesor;
    profesor.Apellidos = this.apellidosProfesor;
    this.ListaProfesores.push(profesor);
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
//Añadir Empresa
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

//Añadir Alumnno
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

//Añadir Asignacion
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

//Ficha de actividades
//evento de cambiar de alumno en el select 
function cambiarAlumnoActividad(select) {
    mostrarActividadSemanal(select.selectedIndex);
}
this.ListaAlumnos.forEach(function (elemento, key) {
    var nombre = elemento.Nombre + " " + elemento.Apellidos; 
    //añade al select como nombre del almuno (nombre y apellido)
    //agrega nuevas opciones en el select alumnos
    document.getElementById("slAlumnoActividad").add(new Option(nombre, key));
});

document.getElementById("slAlumnoActividad").selectedIndex = 1;//el alumno seleccionado y que aparecerá por defecto será el 1
mostrarActividadSemanal(document.getElementById("slAlumnoActividad").selectedIndex);//nos muestra las actividades del alumno seleccionado

this.ListaProfesores.forEach(function (profesor) {
    añadirProfesorTabla(profesor.Nombre, profesor.Apellidos);//recorre la lista de profesores y el objeto profesor y los añade a la tabla
});
// "Funcion de Actividad Semanal"
function mostrarActividadSemanal(alumnoNumero) {

    document.getElementById("lbActCiclo").value = this.ListaCiclos[this.ListaAlumnos[alumnoNumero].Ciclo];//coge el ciclo introducido en la lista equivalente al alumno y se lo añade en actividades al alumno
    document.getElementById("lbActGrado").value = this.ListaGrados[this.ListaAlumnos[alumnoNumero].Grado];//coge el grado introducido en la lista equivalente al alumno y se lo añade en actividades al alumno
    var profesor = this.ListaProfesores[this.ListaAlumnos[alumnoNumero].Profesor];//
    document.getElementById("lbActProfesor").value = profesor.Nombre + " " + profesor.Apellidos; //coge el profesor introducido en la lista equivalente al alumno y se lo añade en actividades al alumno
    document.getElementById("lbActTutorLaboral").value = this.ListaTutores[this.ListaAlumnos[alumnoNumero].Tutor]; //coge el tutor introducido een la lista equivalente al alumno y se lo añade en actividades al alumno

    var centroInfo = this.ListaCentros[this.ListaAlumnos[alumnoNumero].Centro];
    var datos = centroInfo.split(";");//diferencia entre lo que esta antes del ; y despues en la lista de centros donde nos da el nombre de la empresa y el lugar de trabajo
    document.getElementById("lbActEmpresa").value = datos[0];//antes del ; el valor es el 0, añadimos ese valor a Empresa y nos muestra el nombre de la Empresa
    document.getElementById("lbActCentroTrabajo").value = datos[1];// despues de ; el valor es 1 en este caso solo hay 2 valores, añadimos ese valos al centro de trabajo y nos muestra el lugar
}

