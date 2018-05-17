var d01 = document.getElementById('estado_01').innerHTML
if (d01 === '0') {
    document.getElementById('estado_01').innerHTML = '1'
    document.getElementById('botao_01').innerHTML = '<a href=\'/?desligar_01\' class=\'botao\'><button>Desligar 01</button></a>'
} else {
    document.getElementById('estado_01').innerHTML = '0'
    document.getElementById('botao_01').innerHTML = '<a href=\'/?ligar_01\' class=\'botao\'><button>Ligar 01</button></a>'
}

var d02 = document.getElementById('estado_02').innerHTML
if (d02 === '0') {
    document.getElementById('estado_02').innerHTML = '1'
    document.getElementById('botao_02').innerHTML = '<a href=\'/?desligar_02\' class=\'botao\'><button>Desligar 02</button></a>'
} else {
    document.getElementById('estado_02').innerHTML = '0'
    document.getElementById('botao_02').innerHTML = '<a href=\'/?ligar_02\' class=\'botao\'><button>Ligar 02</button></a>'
}

var d03 = document.getElementById('estado_03').innerHTML
if (d03 === '0') {
    document.getElementById('estado_03').innerHTML = '1'
    document.getElementById('botao_03').innerHTML = '<a href=\'/?desligar_03\' class=\'botao\'><button>Desligar 03</button></a>'
} else {
    document.getElementById('estado_03').innerHTML = '0'
    document.getElementById('botao_03').innerHTML = '<a href=\'/?ligar_03\' class=\'botao\'><button>Ligar 03</button></a>'
}

var d04 = document.getElementById('estado_04').innerHTML
if (d04 === '0') {
    document.getElementById('estado_04').innerHTML = '1'
    document.getElementById('botao_04').innerHTML = '<a href=\'/?desligar_04\' class=\'botao\'><button>Desligar 04</button></a>'
} else {
    document.getElementById('estado_04').innerHTML = '0'
    document.getElementById('botao_04').innerHTML = '<a href=\'/?ligar_04\' class=\'botao\'><button>Ligar 04</button></a>'
}

var d05 = document.getElementById('estado_05').innerHTML
if (d05 === '0') {
    document.getElementById('estado_05').innerHTML = '1'
    document.getElementById('botao_05').innerHTML = '<a href=\'/?desligar_05\' class=\'botao\'><button>Desligar 05</button></a>'
} else {
    document.getElementById('estado_05').innerHTML = '0'
    document.getElementById('botao_05').innerHTML = '<a href=\'/?ligar_05\' class=\'botao\'><button>Ligar 05</button></a>'
}

var d06 = document.getElementById('estado_06').innerHTML
if (d06 === '0') {
    document.getElementById('estado_06').innerHTML = '1'
    document.getElementById('botao_06').innerHTML = '<a href=\'/?desligar_06\' class=\'botao\'><button>Desligar 06</button></a>'
} else {
    document.getElementById('estado_06').innerHTML = '0'
    document.getElementById('botao_06').innerHTML = '<a href=\'/?ligar_06\' class=\'botao\'><button>Ligar 06</button></a>'
}

var d07 = document.getElementById('estado_07').innerHTML
if (d07 === '0') {
    document.getElementById('estado_07').innerHTML = '1'
    document.getElementById('botao_07').innerHTML = '<a href=\'/?desligar_07\' class=\'botao\'><button>Desligar 07</button></a>'
} else {
    document.getElementById('estado_07').innerHTML = '0'
    document.getElementById('botao_07').innerHTML = '<a href=\'/?ligar_07\' class=\'botao\'><button>Ligar 07</button></a>'
}

var d04 = document.getElementById('estado_08').innerHTML
if (d04 === '0') {
    document.getElementById('estado_08').innerHTML = '1'
    document.getElementById('botao_08').innerHTML = '<a href=\'/?desligar_08\' class=\'botao\'><button>Desligar 08</button></a>'
} else {
    document.getElementById('estado_08').innerHTML = '0'
    document.getElementById('botao_08').innerHTML = '<a href=\'/?ligar_08\' class=\'botao\'><button>Ligar 08</button></a>'
}

function enviar() {
    var slider = document.getElementById("myRange");
    window.location = '/?potencia:' + slider.value + ':';
}