var lamp = document.getElementById('estado_lamp').innerHTML
if (lamp === '0') {
  document.getElementById('estado_lamp').innerHTML = '1'
  document.getElementById('botao_lamp').innerHTML = '<a href=\'/?desligar_lamp\' class=\'botao\'><button>Desliga_lamp</button></a>'
} else {
  document.getElementById('estado_lamp').innerHTML = '0'
  document.getElementById('botao_lamp').innerHTML = '<a href=\'/?ligar_lamp\' class=\'botao\'><button>Liga_lamp</button></a>'
}

var geral = document.getElementById('estado_geral').innerHTML
if (geral === '0') {
  document.getElementById('estado_geral').innerHTML = '1'
  document.getElementById('botao_geral').innerHTML = '<a href=\'/?desligar_geral\' class=\'botao\'><button>Liga_geral</button></a>'
} else {
  document.getElementById('estado_geral').innerHTML = '0'
  document.getElementById('botao_geral').innerHTML = '<a href=\'/?ligar_geral\' class=\'botao\'><button>Desliga_geral</button></a>'
}

var vent = document.getElementById('estado_vent').innerHTML
if (vent === '0') {
  document.getElementById('estado_vent').innerHTML = '1'
  document.getElementById('botao_vent').innerHTML = '<a href=\'/?desligar_vent\' class=\'botao\'><button>Desliga_vent</button></a>'
} else {
  document.getElementById('estado_vent').innerHTML = '0'
  document.getElementById('botao_vent').innerHTML = '<a href=\'/?ligar_vent\' class=\'botao\'><button>Liga_vent</button></a>'
}

var exaust = document.getElementById('estado_exaust').innerHTML
if (exaust === '0') {
  document.getElementById('estado_exaust').innerHTML = '1'
  document.getElementById('botao_exaust').innerHTML = '<a href=\'/?desligar_exaust\' class=\'botao\'><button>Desliga_exaust</button></a>'
} else {
  document.getElementById('estado_exaust').innerHTML = '0'
  document.getElementById('botao_exaust').innerHTML = '<a href=\'/?ligar_exaust\' class=\'botao\'><button>Liga_exaust</button></a>'
}

function enviar () {
  var slider = document.getElementById("myRange");
  window.location = '/?potencia:' + slider.value + ':';
}