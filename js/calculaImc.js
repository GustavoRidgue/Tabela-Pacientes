var titulo = document.querySelector('#titulo');
titulo.textContent='Olá mundo';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var imc = peso / (altura * altura);

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validarPeso(peso);
	var alturaEhValida = validarAltura(altura);

	if (!pesoEhValido) {
	    console.log("Peso inválido!");
	    tdImc.textContent = "Peso inválido!";
	    paciente.classList.add('paciente-invalido');
	}

	if (!alturaEhValida){
	    console.log("Altura inválida!");
	    tdImc.textContent = "Altura inválida!";
	    paciente.classList.add('paciente-invalido');
	}

	if (alturaEhValida && pesoEhValido){
	    var imc = calculaImc(peso, altura);
	    tdImc.textContent = imc;
	}
}

function validarPeso(peso){
	if (peso >=0 && peso <= 700) {
		return true;
	}
	else {
		return false;
	}
}

function validarAltura(altura){
	if (altura >=0 && altura <= 3) {
		return true;
	}
	else {
		return false;
	}
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}


//query selector traz só um item
//query selecor all traz todos

/*
Março - 30h
Abril - 25h
Maio - 30h
Junho - 35h
Julho - 35h
Agosto - 35h
Setebmbro - 10h

180hr

12h
12h
15h
20h
1h
5h
20h
15h
8h
3h
3h
20h
5h
3h
30h
8h
25h
8h
12h


*/