let hr = document.getElementById('valorHora');
let mi = document.getElementById('valorMinutos');
let sg = document.getElementById('valorSegundos');
let day = document.getElementById('valorDia');
let date = document.getElementById('valorNumero');
let month = document.getElementById('valorMes');
let year = document.getElementById('valorAnio');
function changeTime(){
    let time = new Date();
    let vdia = time.getDay();
    switch(vdia){
    case 0:
        day.innerHTML = 'Domingo';
    break;
    case 1:
        day.innerHTML = 'Lunes';
    break;
    case 2:
        day.innerHTML = 'Martes';
    break;
    case 3:
        day.innerHTML = 'Miércoles';
    break;
    case 4:
        day.innerHTML = 'Jueves';
    break;
    case 5:
        day.innerHTML = 'Viernes';
    break;
    case 6:
        day.innerHTML = 'Sábado';
    break;
    }
    date.innerHTML = time.getDate();
    let vmes = time.getMonth();
    switch(vmes){
    case 0:
        month.innerHTML = 'Enero';
    break;
    case 1:
        month.innerHTML = 'Febrero';
    break;
    case 2:
        month.innerHTML = 'Marzo';
    break;
    case 3:
        month.innerHTML = 'Abril';
    break;
    case 4:
        month.innerHTML = 'Mayo';
    break;
    case 5:
        month.innerHTML = 'Junio';
    break;
    case 6:
        month.innerHTML = 'Julio';
    break;
    case 7:
        month.innerHTML = 'Agosto';
    break;
    case 8:
        month.innerHTML = 'Septiembre';
    break;
    case 9:
        month.innerHTML = 'Octubre';
    break;
    case 10:
        month.innerHTML = 'Noviembre';
    break;
    case 11:
        month.innerHTML = 'Diciembre';
    break;
    }
    year.innerText = time.getFullYear();
    hr.innerHTML = time.getHours();
    mi.innerHTML = time.getMinutes();
    sg.innerHTML = time.getSeconds();
}
setInterval(changeTime,0);