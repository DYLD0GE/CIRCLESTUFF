function findArea() {
  var radius = Number(document.getElementById('radius').value);
  var area = Math.PI * (radius * radius);
  var p = document.getElementById('par');
  p.innerText = 'The area of a circle with a '+ radius + ' radius is ' + area.toFixed(1);
  makeCircle();
};

function makeCircle() {
  var radius = Number(document.getElementById('radius').value);
var div = document.createElement('div');
div.setAttribute('id', 'circle');
document.body.appendChild(div);
document.getElementById('circle').style.width = radius+'px';
document.getElementById('circle').style.height = radius+'px';
};
var button = document.getElementById('button');
button.addEventListener('click', findArea);
