document.addEventListener("DOMContentLoaded", function () {
  //console.log('загрузилось');
var x=document.getElementById('username');

var nameError=document.getElementsByClassName('true')[0];

var emailError=document.getElementsByClassName('true')[1];

var form=document.getElementById('form');

var y=document.getElementById('email');

var submit=document.getElementById('submit');

//console.log(submit);
form.addEventListener('submit', function(e) {

  e.preventDefault();
var regExpName="/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u";
var regExpMail="^/\A[^@]+@([^@\.]+\.)+[^@\.]+\z/";
    if (x.value!=regExpName && y.value!=regExpMail){
          //console.log(nameError);
          nameError.style.display="block";
          nameError.innerHTML="Ошибка";
          emailError.style.display="block";
          emailError.innerHTML="Ошибка";
          console.log('дальше не иду');
          return;
}

console.log('иду');

var xhr = new XMLHttpRequest();


xhr.open('GET', '/dashboard/slisenko/result.json', false);


xhr.send();


if (xhr.status != 200) {
  
  alert( xhr.status + ': ' + xhr.statusText );
} else {
    alert( xhr.responseText); 

}

  console.log("нажата кнопка отправки формы");
})




/*submit.addEventListener('click', function(e) {
//console.log(x);
var regExpName="/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u";
var regExpMail="^[A-Za-z0-9][A-Za-z0-9\.\-_]";
    if (x.value!=regExpName && y.value!=regExpMail){
          //console.log(nameError);
          nameError.style.display="block";
          nameError.innerHTML="Ошибка";
          emailError.style.display="block";
          emailError.innerHTML="Ошибка";
          console.log('дальше не иду');
          return;
}

console.log('иду');

var xhr = new XMLHttpRequest();


xhr.open('GET', '/dashboard/slisenko/result.json', false);


xhr.send();


if (xhr.status != 200) {
  
  alert( xhr.status + ': ' + xhr.statusText );
} else {
    alert( xhr.responseText); 

}

})*/

});